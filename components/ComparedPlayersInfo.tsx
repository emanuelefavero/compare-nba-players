import styles from '../styles/ComparedPlayersInfo.module.scss'
import { IPlayer } from '../types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
}

export default function ComparedPlayersInfo({ player1, player2 }: Props) {
  return (
    <section className={styles.comparedPlayersInfo}>
      <div className={styles.player1}>
        {player1?.first_name} {player1?.last_name}
      </div>
      <div className={styles.vs}>
        <span className={styles.text}>VS</span>
      </div>
      <div className={styles.player2}>
        {player2?.first_name} {player2?.last_name}
      </div>
    </section>
  )
}
