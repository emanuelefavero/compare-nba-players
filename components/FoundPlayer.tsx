import Image from 'next/image'
import styles from '@/styles/FoundPlayer.module.scss'

import { IPlayer } from '@/types'

interface Props {
  player: IPlayer
  player1: IPlayer | null
  player2: IPlayer | null
  handleAddPlayerForComparison: (player: IPlayer) => void
}

export default function FoundPlayer({
  player,
  player1,
  player2,
  handleAddPlayerForComparison,
}: Props) {
  return (
    <div className={styles.foundPlayer}>
      <section className={styles.left}>
        <h2 className={styles.name}>
          <div className={styles.firstName}>{player.first_name}</div>
          <div>{player.last_name}</div>
        </h2>
        <div className={styles.team}>
          {player.team.abbreviation && (
            <Image
              src={`/nba-logos/${player.team.abbreviation}.svg`}
              alt='logo'
              width={32}
              height={32}
            />
          )}
          <p>{player.team.name}</p>
          {player.position && (
            <>
              <p className={styles.dot}>•</p>

              <p>{player.position}</p>
            </>
          )}
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.playerHeight}>
          HT
          {player.height_feet && player.height_inches ? (
            <p>{`${player.height_feet}' ${player.height_inches}''`}</p>
          ) : (
            <p>❔</p>
          )}
        </div>
        <div className={styles.playerWeight}>
          WT
          {player.weight_pounds ? (
            <p>{`${player.weight_pounds} lbs`}</p>
          ) : (
            <p>❔</p>
          )}
        </div>

        {/* When the user clicks on add + button the button shows which slot the player is set to (between player1 and player2) */}
        {player === player1 ? (
          <div
            className={styles.showPlayerSlot}
            onClick={(e) => e.preventDefault()}
          >
            Player 1
          </div>
        ) : player === player2 ? (
          <div
            className={styles.showPlayerSlot}
            onClick={(e) => e.preventDefault()}
          >
            Player 2
          </div>
        ) : (
          <button
            className={styles.addPlayer}
            onClick={() => handleAddPlayerForComparison(player)}
          >
            Add <span className={styles.icon}>+</span>
          </button>
        )}
      </section>
    </div>
  )
}
