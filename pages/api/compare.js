import getCurrentSeason from '@/utils/getCurrentSeason'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }

  const { player1Id, player2Id } = req.body

  // TODO: Let the user choose the season (remember to still adjust the season year, @see getCurrentSeason)
  const seasonYear = getCurrentSeason()

  // Fetch data from the API
  const response = await fetch(
    `https://api.balldontlie.io/v1/season_averages?season=${seasonYear}&player_ids[]=${player1Id}&player_ids[]=${player2Id}`,
    {
      headers: {
        Authorization: process.env.API_KEY,
      },
    }
  )
  const data = await response.json()

  res
    .status(200)
    .json({ player1Stats: data.data[0], player2Stats: data.data[1] })
}
