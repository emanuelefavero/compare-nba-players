import type { NextApiRequest, NextApiResponse } from 'next'
import getCurrentSeason from '@/utils/getCurrentSeason'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }

  const { player1Id, player2Id } = req.body

  const apiKey = process.env.API_KEY
  if (!apiKey) return res.status(500).json({ message: 'API key is missing' })

  // TODO: Let the user choose the season (remember to still adjust the season year, @see getCurrentSeason)
  const seasonYear = getCurrentSeason()

  // * Fetch player 1 season averages
  const response1 = await fetch(
    `https://api.balldontlie.io/v1/season_averages?season=${seasonYear}&player_id=${player1Id}`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  )
  const data1 = await response1.json()

  // * Fetch player 2 season averages
  const response2 = await fetch(
    `https://api.balldontlie.io/v1/season_averages?season=${seasonYear}&player_id=${player2Id}`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  )
  const data2 = await response2.json()

  // Return data
  res
    .status(200)
    .json({ player1Stats: data1.data[0], player2Stats: data2.data[0] })
}
