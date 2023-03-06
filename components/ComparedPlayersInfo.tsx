import styles from '../styles/ComparedPlayersInfo.module.scss'
import { IPlayer } from '../types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
}

export default function ComparedPlayersInfo({ player1, player2 }: Props) {
  return (
    <section className={styles.comparedPlayersInfo}>
      <h2>
        {player1?.first_name} {player1?.last_name}
      </h2>
      <h2 className={styles.vs}>VS</h2>
      <h2>
        {player2?.first_name} {player2?.last_name}
      </h2>
    </section>
  )
}
