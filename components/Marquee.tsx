import styles from '@/styles/Marquee.module.scss'
import { nbaPlayers } from '@/data/nbaPlayers'

interface Props {
  handleAddPlayerNameToSearchInput: (playerName: string) => void
}

export default function Marquee({ handleAddPlayerNameToSearchInput }: Props) {
  return (
    <>
      <div className={styles.marqueeContainer}>
        <div
          className={styles.marquee}
          // style={{ animationDelay: '0s', animationDuration: '40s' }}
        >
          {nbaPlayers.map((player, index) => {
            return (
              <span
                role='button'
                key={index}
                className={index % 2 === 0 ? styles.lighter : styles.darker}
                // TODO: PUT ONCLICK HERE that will set the player name in the search input and focus on the input
                onClick={() => handleAddPlayerNameToSearchInput(player)}
              >
                {player} &nbsp;
              </span>
            )
          })}
        </div>
      </div>

      {/* REVERSED */}
      <div className={styles.marqueeContainer}>
        <div
          className={`${styles.marquee} ${styles.reversed}`}
          // style={{ animationDelay: '1s', animationDuration: '50s' }}
        >
          {nbaPlayers.map((player, index) => {
            return (
              <span
                role='button'
                key={index}
                className={index % 2 === 0 ? styles.lighter : styles.darker}
                // TODO: PUT ONCLICK HERE that will set the player name in the search input and focus on the input
                onClick={() => handleAddPlayerNameToSearchInput(player)}
              >
                {player} &nbsp;
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}
