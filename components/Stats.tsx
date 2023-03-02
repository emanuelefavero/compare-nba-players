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
        player1Statistic={player1Stats.fg3_pct.toFixed(2).slice(1)}
        player2Statistic={player2Stats.fg3_pct.toFixed(2).slice(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName='FT%'
        statisticNameFull='Free Throw Percentage'
        player1Statistic={player1Stats.ft_pct.toFixed(2).slice(1)}
        player2Statistic={player2Stats.ft_pct.toFixed(2).slice(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        // force a space before FG
        statisticName={'\u00A0FG'}
        statisticNameFull='Field Goals Made'
        player1Statistic={player1Stats.fgm.toFixed(1)}
        player2Statistic={player2Stats.fgm.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'FGA'}
        statisticNameFull='Field Goals Attempted'
        player1Statistic={player1Stats.fga.toFixed(1)}
        player2Statistic={player2Stats.fga.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'\u00A03P'}
        statisticNameFull='3-Point Field Goals Made'
        player1Statistic={player1Stats.fg3m.toFixed(1)}
        player2Statistic={player2Stats.fg3m.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'\u00A0FT'}
        statisticNameFull='Free Throws Made'
        player1Statistic={player1Stats.ftm.toFixed(1)}
        player2Statistic={player2Stats.ftm.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'FTA'}
        statisticNameFull='Free Throws Attempted'
        player1Statistic={player1Stats.fta.toFixed(1)}
        player2Statistic={player2Stats.fta.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'ORB'}
        statisticNameFull='Offensive Rebounds'
        player1Statistic={player1Stats.oreb.toFixed(1)}
        player2Statistic={player2Stats.oreb.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'DRB'}
        statisticNameFull='Defensive Rebounds'
        player1Statistic={player1Stats.dreb.toFixed(1)}
        player2Statistic={player2Stats.dreb.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'STL'}
        statisticNameFull='Steals'
        player1Statistic={player1Stats.stl.toFixed(1)}
        player2Statistic={player2Stats.stl.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'BLK'}
        statisticNameFull='Blocks'
        player1Statistic={player1Stats.blk.toFixed(1)}
        player2Statistic={player2Stats.blk.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'TOV'}
        statisticNameFull='Turnovers'
        player1Statistic={player1Stats.turnover.toFixed(1)}
        player2Statistic={player2Stats.turnover.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />

      <StatsCard
        statisticName={'\u00A0PF'}
        statisticNameFull='Personal Fouls'
        player1Statistic={player1Stats.pf.toFixed(1)}
        player2Statistic={player2Stats.pf.toFixed(1)}
        player1Name={`${player1.first_name} ${player1.last_name}`}
        player2Name={`${player2.first_name} ${player2.last_name}`}
      />
    </section>
  )
}

/** DATA
 * player1Stats.pts
 * player1Stats.ast
 * player1Stats.reb
 * player1Stats.fg_pct
 * player1Stats.fg3_pct
 * player1Stats.ft_pct
 * player1Stats.fgm
 * player1Stats.fga
 * player1Stats.fg3m
 * player1Stats.fg3a
 * player1Stats.ftm
 * player1Stats.fta
 * player1Stats.oreb
 * player1Stats.dreb
 * player1Stats.stl
 * player1Stats.blk
 * player1Stats.turnover
 * player1Stats.pf
 */
