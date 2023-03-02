import styles from '@/styles/Stats.module.scss'
import StatsCard from '@/components/StatsCard'

interface Props {
  player1Stats: any
  player2Stats: any
  player1: any
  player2: any
}

export default function Stats({
  player1Stats,
  player2Stats,
  player1,
  player2,
}: Props) {
  return (
    <section className={styles.stats}>
      <StatsCard
        statisticName='PPG'
        player1Statistic={player1Stats.pts.toFixed(1)}
        player2Statistic={player2Stats.pts.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName='AST'
        player1Statistic={player1Stats.ast.toFixed(1)}
        player2Statistic={player2Stats.ast.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />
    </section>
  )
}
