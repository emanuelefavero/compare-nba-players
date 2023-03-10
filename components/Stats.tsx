import styles from '@/styles/Stats.module.scss'
import StatsCard from '@/components/StatsCard'

import { IPlayerStats, IPlayer } from '@/types'

interface Props {
  player1Stats: IPlayerStats
  player2Stats: IPlayerStats
  player1: IPlayer | null
  player2: IPlayer | null
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
        player1Statistic={Number(player1Stats.pts.toFixed(1))}
        player2Statistic={Number(player2Stats.pts.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName='AST'
        statisticNameFull='Assists Per Game'
        player1Statistic={Number(player1Stats.ast.toFixed(1))}
        player2Statistic={Number(player2Stats.ast.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName='REB'
        statisticNameFull='Rebounds Per Game'
        player1Statistic={Number(player1Stats.reb.toFixed(1))}
        player2Statistic={Number(player2Stats.reb.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName='FG%'
        statisticNameFull='Field Goal Percentage'
        // ? removes 0 and decimal point ----------------------> 👇
        player1Statistic={Number(player1Stats.fg_pct.toFixed(2).slice(2))}
        player2Statistic={Number(player2Stats.fg_pct.toFixed(2).slice(2))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName='3P%'
        statisticNameFull='3-Point Percentage'
        player1Statistic={Number(player1Stats.fg3_pct.toFixed(2).slice(2))}
        player2Statistic={Number(player2Stats.fg3_pct.toFixed(2).slice(2))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName='FT%'
        statisticNameFull='Free Throw Percentage'
        player1Statistic={Number(player1Stats.ft_pct.toFixed(2).slice(2))}
        player2Statistic={Number(player2Stats.ft_pct.toFixed(2).slice(2))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        // force a space before FG
        statisticName={'\u00A0FG'}
        statisticNameFull='Field Goals Made'
        player1Statistic={Number(player1Stats.fgm.toFixed(1))}
        player2Statistic={Number(player2Stats.fgm.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'FGA'}
        statisticNameFull='Field Goals Attempted'
        player1Statistic={Number(player1Stats.fga.toFixed(1))}
        player2Statistic={Number(player2Stats.fga.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'\u00A03P'}
        statisticNameFull='3-Point Field Goals Made'
        player1Statistic={Number(player1Stats.fg3m.toFixed(1))}
        player2Statistic={Number(player2Stats.fg3m.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'\u00A0FT'}
        statisticNameFull='Free Throws Made'
        player1Statistic={Number(player1Stats.ftm.toFixed(1))}
        player2Statistic={Number(player2Stats.ftm.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'FTA'}
        statisticNameFull='Free Throws Attempted'
        player1Statistic={Number(player1Stats.fta.toFixed(1))}
        player2Statistic={Number(player2Stats.fta.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'ORB'}
        statisticNameFull='Offensive Rebounds'
        player1Statistic={Number(player1Stats.oreb.toFixed(1))}
        player2Statistic={Number(player2Stats.oreb.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'DRB'}
        statisticNameFull='Defensive Rebounds'
        player1Statistic={Number(player1Stats.dreb.toFixed(1))}
        player2Statistic={Number(player2Stats.dreb.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'STL'}
        statisticNameFull='Steals'
        player1Statistic={Number(player1Stats.stl.toFixed(1))}
        player2Statistic={Number(player2Stats.stl.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'BLK'}
        statisticNameFull='Blocks'
        player1Statistic={Number(player1Stats.blk.toFixed(1))}
        player2Statistic={Number(player2Stats.blk.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'TOV'}
        statisticNameFull='Turnovers'
        player1Statistic={Number(player1Stats.turnover.toFixed(1))}
        player2Statistic={Number(player2Stats.turnover.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />

      <StatsCard
        statisticName={'\u00A0PF'}
        statisticNameFull='Personal Fouls'
        player1Statistic={Number(player1Stats.pf.toFixed(1))}
        player2Statistic={Number(player2Stats.pf.toFixed(1))}
        player1Name={`${player1?.first_name} ${player1?.last_name}`}
        player2Name={`${player2?.first_name} ${player2?.last_name}`}
        player1Team={player1?.team.name}
        player2Team={player2?.team.name}
      />
    </section>
  )
}
