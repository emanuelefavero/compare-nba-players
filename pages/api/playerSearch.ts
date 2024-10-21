import type { NextApiRequest, NextApiResponse } from 'next'
import { searchableNames } from '@/data/nbaPlayers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { playerToSearch } = req.body

    if (!playerToSearch) {
      return res.status(400).json({ message: 'Player name is required' })
    }

    // ---
    // TODO right now we need to convert the player full name to the format that the API expects (it does not accept full names anymore). Ask the balldontlie API team how to search for players by full name
    // If playerToSearch is in the searchableNames map, use the value from the map
    const playerToSearchFormatted =
      searchableNames.get(playerToSearch.toLowerCase()) || playerToSearch
    // ---

    try {
      const apiUrl = `https://api.balldontlie.io/v1/players?search=${playerToSearchFormatted}`
      const apiKey = process.env.API_KEY
      if (!apiKey)
        return res.status(500).json({ message: 'API key is missing' })

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      })
      const data = await response.json()

      res.status(200).json(data.data)
    } catch (error) {
      console.error('Failed to fetch player data:', error)
      res.status(500).json({ message: 'Failed to fetch player data' })
    }
  } else {
    // If the request method is not POST
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: 'Method ${req.method} Not Allowed' })
  }
}
