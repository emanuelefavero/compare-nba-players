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
}

export default function StatsCard({
  statisticName,
  statisticNameFull,
  player1Statistic,
  player2Statistic,
  player1Name,
  player2Name,
}: Props) {
  const [player1StatColor, setPlayer1StatColor] = useState('#fff')
  const [player2StatColor, setPlayer2StatColor] = useState('#fff')

  useEffect(() => {
    if (statisticName !== '\u00A0PF' && statisticName !== 'TOV') {
      if (player1Statistic > player2Statistic) {
        setPlayer1StatColor('#05d555')
        setPlayer2StatColor('#ea114f')
      } else {
        setPlayer1StatColor('#ea114f')
        setPlayer2StatColor('#05d555')
      }
    } else {
      if (player1Statistic < player2Statistic) {
        setPlayer1StatColor('#05d555')
        setPlayer2StatColor('#ea114f')
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
          />
        </div>

        <div
          className={styles.statisticNumber}
          style={{
            color: player2StatColor,
          }}
          // style={{
          //   color: player1Statistic < player2Statistic ? '#05d555' : '#ea114f',
          // }}
        >
          {player2Statistic} {/* 👈 */}
        </div>
      </section>
    </div>
  )
}
