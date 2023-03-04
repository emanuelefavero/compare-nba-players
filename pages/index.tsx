import { useState, FormEvent } from 'react'
import Stats from '@/components/Stats'
import Header from '@/components/Header'

import { IPlayer, IPlayerStats } from '@/types'

export default function Home() {
  const [foundPlayers, setFoundPlayers] = useState<IPlayer[]>([])
  const [player1, setPlayer1] = useState<IPlayer | null>(null)
  const [player2, setPlayer2] = useState<IPlayer | null>(null)
  const [player1Stats, setPlayer1Stats] = useState<IPlayerStats | null>(null)
  const [player2Stats, setPlayer2Stats] = useState<IPlayerStats | null>(null)

  const handleCompare = async () => {
    const response1 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player1?.id}`
    )
    const data1 = await response1.json()
    setPlayer1Stats(data1.data[0])
    console.log(player1Stats)

    const response2 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player2?.id}`
    )
    const data2 = await response2.json()
    setPlayer2Stats(data2.data[0])
    console.log(player2Stats)
  }

  return (
    <>
      <Header setFoundPlayers={setFoundPlayers} />

      {foundPlayers.map((player: IPlayer) => (
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

      {/* Selected Players */}
      {/* TODO: Add other data like height_feet, height_inches, position, team.abbreviation, team.city, team.conference, team.full_name, team.name, weight_pounds */}
      {player1 && (
        <div>
          <p>
            {player1.first_name} {player1.last_name}
          </p>
        </div>
      )}

      {player2 && (
        <div>
          <p>
            {player2.first_name} {player2.last_name}
          </p>
        </div>
      )}

      <button onClick={handleCompare}>Compare</button>

      {/* Stats */}
      {/* TODO: Remove this section */}
      {player1Stats && (
        <div>
          <h2>
            {player1?.first_name} {player1?.last_name}
          </h2>
        </div>
      )}

      {player2Stats && (
        <div>
          <h2>
            {player2?.first_name} {player2?.last_name}
          </h2>
        </div>
      )}

      {/* Stats */}
      {player1Stats && player2Stats && (
        <Stats
          player1Stats={player1Stats}
          player2Stats={player2Stats}
          player1={player1}
          player2={player2}
        />
      )}
    </>
  )
}
