import styles from '@/styles/CompareButton.module.scss'
import { IPlayer, IPlayerStats } from '@/types'

interface Props {
  setLoadingStats: (loading: boolean) => void
  player1: IPlayer | null
  player2: IPlayer | null
  setPlayer1Stats: (playerStats: IPlayerStats) => void
  setPlayer2Stats: (playerStats: IPlayerStats) => void
  setShowFoundPlayers: (show: boolean) => void
  setShowSelectedPlayers: (show: boolean) => void
  setShowCompareButton: (show: boolean) => void
  setShowStats: (show: boolean) => void
}

export default function CompareButton({
  setLoadingStats,
  player1,
  player2,
  setPlayer1Stats,
  setPlayer2Stats,
  setShowFoundPlayers,
  setShowSelectedPlayers,
  setShowCompareButton,
  setShowStats,
}: Props) {
  const handleCompare = async () => {
    setLoadingStats(true) // Show loader

    // Fetch player stats
    const response = await fetch(`/api/compare`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player1Id: player1?.id,
        player2Id: player2?.id,
      }),
    })

    const { player1Stats, player2Stats } = await response.json()
    setPlayer1Stats(player1Stats)
    setPlayer2Stats(player2Stats)

    setShowFoundPlayers(false) // Hide found players
    setShowSelectedPlayers(false) // Hide selected players
    setShowCompareButton(false) // Hide compare button
    setShowStats(true) // Show stats
    setLoadingStats(false) // Hide loader
  }

  if (player1 && player2) {
    return (
      <div className={styles.compareButtonContainer}>
        <button onClick={handleCompare}>Compare</button>
      </div>
    )
  } else {
    return null
  }
}
