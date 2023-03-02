import styles from '@/styles/StatsCard.module.scss'
import StatsChart from '@/components/StatsChart'

interface Props {
  statisticName: string
  player1Statistic: number
  player2Statistic: number
  player1Name: string
  player2Name: string
}

export default function StatsCard({
  statisticName,
  player1Statistic,
  player2Statistic,
  player1Name,
  player2Name,
}: Props) {
  return (
    <section className={styles.statsCard}>
      <div className={styles.statisticNumber}>
        {player1Statistic} {/* 👈 */}
      </div>

      {/* Stats Chart */}
      <div className={styles.chartContainer}>
        <div className={styles.statisticName}>{statisticName}</div> {/* 👈 */}
        <StatsChart
          player1Statistic={player1Statistic} // 👈
          player2Statistic={player2Statistic} // 👈
          statisticName={statisticName} // 👈
          player1Name={player1Name}
          player2Name={player2Name}
        />
      </div>

      <div className={styles.statisticNumber}>
        {player2Statistic} {/* 👈 */}
      </div>
    </section>
  )
}
