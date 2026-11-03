import type { NextApiRequest, NextApiResponse } from 'next'
import { normalizeName, searchPlayers } from '@/data/nbaSnapshot'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }
  const query = req.body?.playerToSearch
  if (typeof query !== 'string' || !normalizeName(query)) return res.status(400).json({ message: 'Player name is required' })
  return res.status(200).json(searchPlayers(query))
}
