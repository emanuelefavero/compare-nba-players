import styles from '@/styles/NoStats.module.scss'

import { IPlayer, IPlayerStats } from '@/types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
  player1Stats: IPlayerStats | null
  player2Stats: IPlayerStats | null
  handleFocusOnSearchInput: () => void
}

export default function NoStats({
  player1,
  player2,
  player1Stats,
  player2Stats,
  handleFocusOnSearchInput,
}: Props) {
  return (
    <div className={styles.noStats}>
      <div className={styles.FourZeroFour}>404</div>
      <h2>No Stats Found For</h2>

      {
        // If player1Stats is null and player2Stats is null, show this message
        !player1Stats && !player2Stats && (
          <h3 className={styles.playerName}>
            <span>
              {player1?.first_name} {player1?.last_name}
            </span>{' '}
            &{' '}
            <span>
              {player2?.first_name} {player2?.last_name}
            </span>
          </h3>
        )
      }

      {
        // If player1Stats is null and player2Stats is not null, show this message
        !player1Stats && player2Stats && (
          <h3 className={styles.playerName}>
            <span>
              {player1?.first_name} {player1?.last_name}
            </span>
          </h3>
        )
      }

      {
        // If player1Stats is not null and player2Stats is null, show this message
        player1Stats && !player2Stats && (
          <h3 className={styles.playerName}>
            <span>
              {player2?.first_name} {player2?.last_name}
            </span>
          </h3>
        )
      }

      <p>Please only compare {new Date().getFullYear()} active NBA players</p>
      <div
        onClick={handleFocusOnSearchInput}
        role='button'
        className={styles.searchAgainButton}
      >
        Search Again <span className={styles.icon}>⬆</span>
      </div>
    </div>
  )
}
