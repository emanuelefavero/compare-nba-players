import styles from '@/styles/SelectedPlayers.module.scss'

import { IPlayer } from '@/types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
}

export default function SelectedPlayers({ player1, player2 }: Props) {
  return (
    <>
      <section className={styles.selectedPlayers}>
        {player1 && (
          <div>
            <p>
              {player1.first_name} {player1.last_name}
            </p>
          </div>
        )}

        {player1 && player2 && <div className={styles.vs}>VS</div>}

        {player2 && (
          <div>
            <p>
              {player2.first_name} {player2.last_name}
            </p>
          </div>
        )}
      </section>
    </>
  )
}
