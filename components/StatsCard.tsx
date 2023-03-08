import { useState, useEffect } from 'react'
import styles from '@/styles/StatsCard.module.scss'
import StatsChart from '@/components/StatsChart'

interface Props {
  statisticName: string
  statisticNameFull: string
  player1Statistic: number
  player2Statistic: number
  player1Name: string
  player2Name: string
  player1Team?: string
  player2Team?: string
}

export default function StatsCard({
  statisticName,
  statisticNameFull,
  player1Statistic,
  player2Statistic,
  player1Name,
  player2Name,
  player1Team,
  player2Team,
}: Props) {
  const [player1StatColor, setPlayer1StatColor] = useState('#fff')
  const [player2StatColor, setPlayer2StatColor] = useState('#fff')

  useEffect(() => {
    if (statisticName !== '\u00A0PF' && statisticName !== 'TOV') {
      if (player1Statistic > player2Statistic) {
        setPlayer1StatColor('#05d555')
        setPlayer2StatColor('#ea114f')
      } else if (player1Statistic === player2Statistic) {
        setPlayer1StatColor('#fff')
        setPlayer2StatColor('#fff')
      } else {
        setPlayer1StatColor('#ea114f')
        setPlayer2StatColor('#05d555')
      }
    } else {
      if (player1Statistic < player2Statistic) {
        setPlayer1StatColor('#05d555')
        setPlayer2StatColor('#ea114f')
      } else if (player1Statistic === player2Statistic) {
        setPlayer1StatColor('#fff')
        setPlayer2StatColor('#fff')
      } else {
        setPlayer1StatColor('#ea114f')
        setPlayer2StatColor('#05d555')
      }
    }
  }, [player1Statistic, player2Statistic, statisticName])

  return (
    <div className={styles.statsCardContainer}>
      <div className={styles.statsCardTitle}>{statisticNameFull}</div>
      <section className={styles.statsCard}>
        <div
          className={styles.statisticNumber}
          style={{
            color: player1StatColor,
          }}
          title={player1Name}
        >
          {player1Statistic} {/* 👈 */}
        </div>

        {/* Stats Chart */}
        <div className={styles.chartContainer} title={statisticNameFull}>
          <div className={styles.statisticName}>{statisticName}</div> {/* 👈 */}
          <StatsChart
            player1Statistic={player1Statistic} // 👈
            player2Statistic={player2Statistic} // 👈
            statisticName={statisticName} // 👈
            player1Name={player1Name}
            player2Name={player2Name}
            player1Team={player1Team}
            player2Team={player2Team}
          />
        </div>

        <div
          className={styles.statisticNumber}
          style={{
            color: player2StatColor,
          }}
          title={player2Name}
        >
          {player2Statistic} {/* 👈 */}
        </div>
      </section>
    </div>
  )
}
