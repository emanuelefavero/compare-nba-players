import { readFile, writeFile, rename, mkdir, access, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const file = (name) => path.join(root, name)
const fields = 'pts ast reb fg_pct fg3_pct ft_pct fgm fga fg3m fg3a ftm fta oreb dreb stl blk turnover pf'.split(' ')
const normalize = (name) => name.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const checkpointPath = file('.snapshot-export/checkpoint.json')
let lastRequest = 0
let apiKey

async function request(relative) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    await sleep(Math.max(0, 1100 - (Date.now() - lastRequest)))
    let response
    try {
      lastRequest = Date.now()
      response = await fetch(`https://api.balldontlie.io/v1/${relative}`, {
        headers: { Authorization: apiKey }, signal: AbortSignal.timeout(30000),
      })
    } catch {
      if (attempt === 3) throw new Error('Network request failed after three attempts')
      await sleep(attempt * 2000)
      continue
    }
    if ([401, 403].includes(response.status)) throw new Error(`API access denied (HTTP ${response.status}); check credentials and endpoint entitlement. Export stopped.`)
    if (response.status === 429 || response.status >= 500) {
      if (attempt === 3) throw new Error(`Request failed after three attempts (HTTP ${response.status})`)
      const retry = response.headers.get('retry-after')
      const delay = retry && /^\d+(\.\d+)?$/.test(retry) ? Number(retry) * 1000 : Date.parse(retry || '') - Date.now()
      await sleep(Math.max(attempt * 2000, Number.isFinite(delay) ? delay : 0))
      continue
    }
    if (!response.ok) throw new Error(`Request failed (HTTP ${response.status})`)
    const body = await response.json()
    if (!Array.isArray(body.data)) throw new Error('Malformed API response: data must be an array')
    return body
  }
}

async function atomicWrite(destination, value) {
  const temporary = `${destination}.tmp`
  await writeFile(temporary, JSON.stringify(value, null, 2) + '\n')
  await rename(temporary, destination)
}

async function main() {
  const roster = JSON.parse(await readFile(file('data/roster.json'), 'utf8'))
  if (roster.length !== 100 || new Set(roster.map((p) => normalize(p.displayName))).size !== 100 || roster.some((p, i) => p.rank !== i + 1)) throw new Error('Invalid ordered roster')
  let localEnv = ''
  try { localEnv = await readFile(file('.env.local'), 'utf8') } catch (error) { if (error.code !== 'ENOENT') throw error }
  apiKey = process.env.API_KEY || localEnv.match(/^\s*(?:export\s+)?API_KEY\s*=\s*(?:"([^"\r\n]*)"|'([^'\r\n]*)'|([^\s#\r\n]+))/m)?.slice(1).find((v) => v !== undefined)
  if (!apiKey) throw new Error('Set API_KEY in the environment or .env.local')

  const averages = (id) => `season_averages?season=2025&player_id=${id}`
  const probe = await request(averages(115))
  if (probe.data.length !== 1 || probe.data[0].season !== 2025 || probe.data[0].player_id !== 115 || probe.data[0].games_played !== 45) throw new Error('Season preflight differs from the verified Curry record')

  await mkdir(file('.snapshot-export'), { recursive: true })
  let checkpoint = { schemaVersion: 1, season: 2025, seasonType: 'legacy', roster, records: {} }
  try {
    const saved = JSON.parse(await readFile(checkpointPath, 'utf8'))
    if (saved.schemaVersion !== 1 || saved.season !== 2025 || saved.seasonType !== 'legacy' || JSON.stringify(saved.roster) !== JSON.stringify(roster)) throw new Error('Checkpoint contract differs; investigate before resuming')
    checkpoint = saved
  } catch (error) { if (error.code !== 'ENOENT') throw error }

  const nbaTeams = new Set((await readdir(file('public/nba-logos'))).filter((name) => name.endsWith('.svg')).map((name) => name.slice(0, -4)))
  const aliases = { 'Lu Dort': 'Luguentz Dort', 'Herbert Jones': 'Herbert Jones', 'CJ McCollum': 'CJ McCollum' }
  for (const entry of roster) {
    if (checkpoint.records[entry.rank]?.complete) continue
    let record = checkpoint.records[entry.rank] || { ...entry }
    if (!record.player) {
      const candidates = new Map()
      let cursor
      const seen = new Set()
      do {
        const result = await request(`players?search=${encodeURIComponent((aliases[entry.displayName] || entry.displayName).replace(/ (Jr\.|III)$/, '').split(' ').at(-1))}&per_page=100${cursor == null ? '' : `&cursor=${cursor}`}`)
        for (const player of result.data) if (nbaTeams.has(player.team?.abbreviation) && normalize(`${player.first_name} ${player.last_name}`) === normalize(aliases[entry.displayName] || entry.displayName)) candidates.set(player.id, player)
        cursor = result.meta?.next_cursor
        if (cursor != null && seen.has(cursor)) throw new Error('Repeated pagination cursor')
        seen.add(cursor)
      } while (cursor != null)
      if (entry.playerId && candidates.has(entry.playerId)) { const verified = candidates.get(entry.playerId); candidates.clear(); candidates.set(entry.playerId, verified) }
      if (candidates.size !== 1) throw new Error(`Identity requires investigation: ${entry.displayName} (${candidates.size} exact matches); add a verified alias before continuing`)
      record.player = [...candidates.values()][0]
      checkpoint.records[entry.rank] = record
      await atomicWrite(checkpointPath, checkpoint)
    }
    const result = await request(averages(record.player.id))
    if (result.meta?.next_cursor != null || result.data.length > 1) throw new Error(`Ambiguous aggregate averages: ${entry.displayName}`)
    const row = result.data[0]
    if (row && (row.player_id !== record.player.id || row.season !== 2025)) throw new Error(`Averages identity/season mismatch: ${entry.displayName}`)
    if (row && (!Number.isInteger(row.games_played) || row.games_played < 0)) throw new Error(`Invalid games played: ${entry.displayName}`)
    if (!row || row.games_played === 0) record.excluded = true
    else {
      const source = row
      record.stats = { games_played: row.games_played }
      for (const field of fields) {
        const value = source[field]
        if (!Number.isFinite(value) || value < 0 || (field.endsWith('_pct') && value > 1)) throw new Error(`Invalid ${field}: ${entry.displayName}`)
        record.stats[field] = value
      }
      await access(file(`public/nba-logos/${record.player.team?.abbreviation}.svg`))
    }
    record.complete = true
    checkpoint.records[entry.rank] = record
    await atomicWrite(checkpointPath, checkpoint)
    console.log(`${entry.rank}. ${entry.displayName}: ${record.excluded ? 'confirmed no season stats' : 'saved'}`)
  }
  const records = roster.map((entry) => checkpoint.records[entry.rank])
  if (records.some((r) => !r?.complete) || new Set(records.map((r) => r.player.id)).size !== 100) throw new Error('Incomplete or duplicate identities')
  const players = records.filter((r) => !r.excluded).map((r) => ({ rank: r.rank, player: { ...r.player, first_name: r.displayName.split(' ')[0], last_name: r.displayName.split(' ').slice(1).join(' ') }, stats: r.stats }))
  const excludedPlayers = records.filter((r) => r.excluded).map((r) => ({ rank: r.rank, displayName: r.displayName, playerId: r.player.id, reason: 'no_season_stats' }))
  await atomicWrite(file('data/nba-2025-26.json'), { metadata: { schemaVersion: 1, source: 'balldontlie', season: 2025, seasonLabel: '2025–26', seasonType: 'legacy', capturedAt: new Date().toISOString() }, players, excludedPlayers })
  console.log(`Included: ${players.length}; excluded: ${excludedPlayers.length}; homepage eligible: ${players.filter((p) => p.rank <= 30).length}`)
}

main().catch((error) => { console.error(error.message); process.exitCode = 1 })
