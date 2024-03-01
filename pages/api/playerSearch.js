export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { playerToSearch } = req.body

    if (!playerToSearch) {
      return res.status(400).json({ message: 'Player name is required' })
    }

    try {
      const apiUrl = `https://api.balldontlie.io/v1/players?search=${playerToSearch}`

      // TODO make sure that when the user clicks on a player name in the home, the correct formatted name is sent to the api (you could use an hash table to map the names. So if the user writes or clicks on "Lebron James" you send "lebron" to the api so you get the correct data)

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: process.env.API_KEY,
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
