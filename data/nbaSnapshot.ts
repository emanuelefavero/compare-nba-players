import snapshot from './nba-2025-26.json'
import { IPlayer, IPlayerStats } from '@/types'

export const snapshotMetadata = snapshot.metadata
export const normalizeName = (name: string) => name.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[’'`]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
const records = snapshot.players
export const homepagePlayers = records.filter(({ rank }) => rank <= 30).map(({ player }) => `${player.first_name} ${player.last_name}`)
export function searchPlayers(query: string): IPlayer[] {
  const tokens = normalizeName(query).split(/\s+/)
  return records.filter(({ player }) => tokens.every((token) => normalizeName(`${player.first_name} ${player.last_name}`).includes(token))).map(({ player }) => player)
}
export function getPlayerStats(id: number): IPlayerStats | undefined {
  return records.find(({ player }) => player.id === id)?.stats
}
