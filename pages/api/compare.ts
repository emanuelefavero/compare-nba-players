import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlayerStats } from '@/data/nbaSnapshot'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }
  const { player1Id, player2Id } = req.body || {}
  if (![player1Id, player2Id].every((id) => Number.isSafeInteger(id) && id > 0)) return res.status(400).json({ message: 'Two valid player IDs are required' })
  const player1Stats = getPlayerStats(player1Id)
  const player2Stats = getPlayerStats(player2Id)
  if (!player1Stats || !player2Stats) return res.status(404).json({ message: 'Player is absent from this snapshot' })
  return res.status(200).json({ player1Stats, player2Stats })
}
