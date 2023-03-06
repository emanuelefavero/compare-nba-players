import styles from '@/styles/CompareButton.module.scss'
import { IPlayer, IPlayerStats } from '@/types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
  setPlayer1Stats: (playerStats: IPlayerStats) => void
  setPlayer2Stats: (playerStats: IPlayerStats) => void
  setShowFoundPlayers: (show: boolean) => void
  setShowSelectedPlayers: (show: boolean) => void
  setShowCompareButton: (show: boolean) => void
}

export default function CompareButton({
  player1,
  player2,
  setPlayer1Stats,
  setPlayer2Stats,
  setShowFoundPlayers,
  setShowSelectedPlayers,
  setShowCompareButton,
}: Props) {
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

    setShowFoundPlayers(false) // Hide found players
    setShowSelectedPlayers(false) // Hide selected players
    setShowCompareButton(false) // Hide compare button
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
