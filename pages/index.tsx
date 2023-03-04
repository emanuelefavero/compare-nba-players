import { useState, FormEvent } from 'react'
import Stats from '@/components/Stats'
import Header from '@/components/Header'
import FoundPlayer from '@/components/FoundPlayer'

import { IPlayer, IPlayerStats } from '@/types'

export default function Home() {
  const [foundPlayers, setFoundPlayers] = useState<IPlayer[]>([])
  const [player1, setPlayer1] = useState<IPlayer | null>(null)
  const [player2, setPlayer2] = useState<IPlayer | null>(null)
  const [lastAddedPlayer, setLastAddedPlayer] = useState<IPlayer | null>(null)
  const [player1Stats, setPlayer1Stats] = useState<IPlayerStats | null>(null)
  const [player2Stats, setPlayer2Stats] = useState<IPlayerStats | null>(null)

  const handleAddPlayerForComparison = (player: IPlayer) => {
    if (!player1) {
      setPlayer1(player)
      setLastAddedPlayer(player)
    } else if (!player2) {
      setPlayer2(player)
      setLastAddedPlayer(player)
    } else {
      if (lastAddedPlayer === player1) {
        setPlayer2(player)
        setLastAddedPlayer(player)
      } else {
        setPlayer1(player)
        setLastAddedPlayer(player)
      }
    }
  }

  const handleCompare = async () => {
    const response1 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player1?.id}`
    )
    const data1 = await response1.json()
    setPlayer1Stats(data1.data[0])

    const response2 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player2?.id}`
    )
    const data2 = await response2.json()
    setPlayer2Stats(data2.data[0])
  }

  return (
    <>
      <Header setFoundPlayers={setFoundPlayers} />

      <main>
        {foundPlayers.map((player: IPlayer) => (
          <div key={player.id}>
            {/* // ? If player.position is found, it means the player is active. Show only active players */}
            {player.position && (
              <FoundPlayer
                player={player}
                handleAddPlayerForComparison={handleAddPlayerForComparison}
              />
            )}
          </div>
        ))}

        {/* Selected Players */}
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
      </main>
    </>
  )
}
