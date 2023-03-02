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
        statisticNameFull='Points Per Game'
        player1Statistic={player1Stats.pts.toFixed(1)}
        player2Statistic={player2Stats.pts.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName='AST'
        statisticNameFull='Assists Per Game'
        player1Statistic={player1Stats.ast.toFixed(1)}
        player2Statistic={player2Stats.ast.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName='REB'
        statisticNameFull='Rebounds Per Game'
        player1Statistic={player1Stats.reb.toFixed(1)}
        player2Statistic={player2Stats.reb.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName='FG%'
        statisticNameFull='Field Goal Percentage'
        // remove first digit (0) and round to 2 decimal places
        player1Statistic={player1Stats.fg_pct.toFixed(2).slice(1)}
        player2Statistic={player2Stats.fg_pct.toFixed(2).slice(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName='3P%'
        statisticNameFull='3-Point Percentage'
        // remove first digit (0) and round to 2 decimal places
        player1Statistic={player1Stats.fg3_pct.toFixed(2).slice(1)}
        player2Statistic={player2Stats.fg3_pct.toFixed(2).slice(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />
    </section>
  )
}

{
  /* 
          <p>Points: {player2Stats.pts}</p>
          <p>Assists: {player2Stats.ast}</p>
          <p>Rebounds: {player2Stats.reb}</p>
          <p>FG%: {player2Stats.fg_pct}</p>
          <p>3P%: {player2Stats.fg3_pct}</p>
          <p>FT%: {player2Stats.ft_pct}</p>
          <p>FG: {player2Stats.fgm}</p>
          <p>FGA: {player2Stats.fga}</p>
          <p>3P: {player2Stats.fg3m}</p>
          <p>3PA: {player2Stats.fg3a}</p>
          <p>FT: {player2Stats.ftm}</p>
          <p>FTA: {player2Stats.fta}</p>
          <p>ORB: {player2Stats.oreb}</p>
          <p>DRB: {player2Stats.dreb}</p>
          <p>STL: {player2Stats.stl}</p>
          <p>BLK: {player2Stats.blk}</p>
          <p>TOV: {player2Stats.turnover}</p>
          <p>PF: {player2Stats.pf}</p> */
}
