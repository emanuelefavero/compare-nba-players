import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Stats from '@/components/Stats'
import Header from '@/components/Header'

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
            {/* Player Info ----- */}
            <h2>
              {player.first_name} {player.last_name}
            </h2>

            {player.team.abbreviation && (
              <Image
                src={`/nba-logos/${player.team.abbreviation}.svg`}
                alt='logo'
                width={40}
                height={40}
              />
            )}

            <h3>
              {player.team.city} {player.team.name}
            </h3>

            <h4>{player.team.conference}</h4>

            <p>{player.position}</p>

            {player.height_feet && player.height_inches && (
              <h4>{`${player.height_feet}' ${player.height_inches}''`}</h4>
            )}

            {player.weight_pounds && <h4>{`${player.weight_pounds} lbs`}</h4>}

            {/* ----- */}

            <button onClick={() => handleAddPlayerForComparison(player)}>
              Add Player For Comparison
            </button>
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
      </main>
    </>
  )
}
