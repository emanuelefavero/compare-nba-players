import { useState, useEffect } from 'react'

export default function Home() {
  const [playerToSearch, setPlayerToSearch] = useState('')
  const [foundPlayers, setFoundPlayers] = useState<any>([])
  const [player1, setPlayer1] = useState<any>(null)
  const [player2, setPlayer2] = useState<any>(null)
  const [player1Stats, setPlayer1Stats] = useState<any>(null)
  const [player2Stats, setPlayer2Stats] = useState<any>(null)

  const handlePlayerSearch = async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${playerToSearch}`
    )
    const data = await response.json()
    setFoundPlayers(data.data)
  }

  const handleCompare = async () => {
    const response1 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player1.id}`
    )
    const data1 = await response1.json()
    setPlayer1Stats(data1.data[0])
    console.log(data1.data[0])

    const response2 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player2.id}`
    )
    const data2 = await response2.json()
    setPlayer2Stats(data2.data[0])
    console.log(data2.data[0])
  }

  return (
    <>
      <input
        type='text'
        placeholder='Search Player...'
        value={playerToSearch}
        onChange={(e) => setPlayerToSearch(e.target.value)}
      />

      <button onClick={handlePlayerSearch}>Search</button>

      {foundPlayers.map((player: any) => (
        <div key={player.id}>
          <p>
            {player.first_name} {player.last_name}
          </p>
          <button
            onClick={() => {
              setPlayer1(player)
            }}
          >
            Player 1
          </button>
          <button onClick={() => setPlayer2(player)}>Player 2</button>
        </div>
      ))}

      {player1 && (
        <div>
          <p>
            {player1.first_name} {player1.last_name}
          </p>
          <button onClick={() => setPlayer1(null)}>Remove Player 1</button>
        </div>
      )}

      {player2 && (
        <div>
          <p>
            {player2.first_name} {player2.last_name}
          </p>
          <button onClick={() => setPlayer2(null)}>Remove Player 2</button>
        </div>
      )}

      <button onClick={handleCompare}>Compare</button>

      {player1Stats && (
        <div>
          <h2>
            {player1.first_name} {player1.last_name}
          </h2>
          <p>Points: {player1Stats.pts}</p>
          <p>Rebounds: {player1Stats.reb}</p>
          <p>Assists: {player1Stats.ast}</p>
          <p>Minutes: {player1Stats.min}</p>
          <p>FG: {player1Stats.fgm}</p>
          <p>FGA: {player1Stats.fga}</p>
        </div>
      )}

      {player2Stats && (
        <div>
          <h2>
            {player2.first_name} {player2.last_name}
          </h2>
          <p>Points: {player2Stats.pts}</p>
          <p>Rebounds: {player2Stats.reb}</p>
          <p>Assists: {player2Stats.ast}</p>
          <p>Minutes: {player2Stats.min}</p>
          <p>FG: {player2Stats.fgm}</p>
          <p>FGA: {player2Stats.fga}</p>
        </div>
      )}
    </>
  )
}
