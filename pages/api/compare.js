export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }

  const { player1Id, player2Id } = req.body
  const apiKey = process.env.API_KEY // Your API key in .env.local

  // TODO check URL! It is changed on the new ball don't lie API
  // Fetch data from the API
  const response1 = await fetch(
    `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player1Id?.id}`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  )
  const data1 = await response1.json()

  const response2 = await fetch(
    `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player2Id?.id}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )
  const data2 = await response2.json()

  // Return the data
  res
    .status(200)
    .json({ player1Stats: data1.data[0], player2Stats: data2.data[0] })
}
