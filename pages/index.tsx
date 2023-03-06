import { useState, FormEvent } from 'react'
import Stats from '@/components/Stats'
import Header from '@/components/Header'
import FoundPlayer from '@/components/FoundPlayer'
import SelectedPlayers from '@/components/SelectedPlayers'
import CompareButton from '@/components/CompareButton'

import { IPlayer, IPlayerStats } from '@/types'

export default function Home() {
  const [foundPlayers, setFoundPlayers] = useState<IPlayer[]>([])
  const [player1, setPlayer1] = useState<IPlayer | null>(null)
  const [player2, setPlayer2] = useState<IPlayer | null>(null)
  const [lastAddedPlayer, setLastAddedPlayer] = useState<IPlayer | null>(null)
  const [player1Stats, setPlayer1Stats] = useState<IPlayerStats | null>(null)
  const [player2Stats, setPlayer2Stats] = useState<IPlayerStats | null>(null)
  const [showFoundPlayers, setShowFoundPlayers] = useState(false)
  const [showSelectedPlayers, setShowSelectedPlayers] = useState(false)
  const [showCompareButton, setShowCompareButton] = useState(false)

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

  return (
    <>
      <Header
        setFoundPlayers={setFoundPlayers}
        setShowFoundPlayers={setShowFoundPlayers}
        setShowSelectedPlayers={setShowSelectedPlayers}
        setShowCompareButton={setShowCompareButton}
      />

      <main>
        {showFoundPlayers &&
          foundPlayers.map((player: IPlayer) => (
            <div key={player.id}>
              {/* // ? If player.position is found, it means the player is active. Show only active players */}
              {player.position && (
                <FoundPlayer
                  player={player}
                  player1={player1}
                  player2={player2}
                  handleAddPlayerForComparison={handleAddPlayerForComparison}
                />
              )}
            </div>
          ))}

        {showSelectedPlayers && (
          <SelectedPlayers player1={player1} player2={player2} />
        )}

        {showCompareButton && (
          <CompareButton
            player1={player1}
            player2={player2}
            setPlayer1Stats={setPlayer1Stats}
            setPlayer2Stats={setPlayer2Stats}
            setShowFoundPlayers={setShowFoundPlayers}
            setShowSelectedPlayers={setShowSelectedPlayers}
            setShowCompareButton={setShowCompareButton}
          />
        )}

        {/* Stats */}
        {/* TODO: Remove this section */}
        {/* {player1Stats && (
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
        )} */}

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
