import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import getTeamColor from '@/utils/getTeamColor'

Chart.register(ArcElement, Tooltip, Legend)

Chart.defaults.font.family = ['Inter ', 'sans-serif'].join(', ')
Chart.defaults.font.size = 16
Chart.defaults.color = '#9ba1b8'
// Chart.defaults.font.weight = '500'

// Hide label
Chart.defaults.plugins.legend.display = false

interface Props {
  player1Statistic: number
  player2Statistic: number
  statisticName: string
  player1Name: string
  player2Name: string
  player1Team?: string
  player2Team?: string
}

export default function StatsChart({
  player1Statistic,
  player2Statistic,
  statisticName,
  player1Name,
  player2Name,
  player1Team,
  player2Team,
}: Props) {
  const data = {
    labels: [player1Team, player1Name],
    datasets: [
      {
        label: statisticName,
        data: [player2Statistic, player1Statistic],
        backgroundColor: [
          getTeamColor(player2Team, 0.3),
          getTeamColor(player1Team),
        ],

        borderColor: [getTeamColor(player2Team), getTeamColor(player1Team)],
        borderWidth: 1.5,

        // Hover
        hoverBorderWidth: 2,
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',

        hoverBackgroundColor: [
          getTeamColor(player2Team),
          getTeamColor(player1Team),
        ],
      },
    ],
  }

  const options = {
    tooltips: {
      enabled: false,
    },

    // rotation: -0.1 * Math.PI,
    plugins: {
      legend: {
        display: false,
        reverse: true,
      },

      tooltip: {
        enabled: false,
      },

      // title: {
      //   display: true,
      //   text: 'TEST',
      // },
    },

    // Responsive Chart (set width and height in css - .chart-container)
    responsive: true,

    // Doughnut cutout size
    cutout: 40,
  }

  return <Doughnut data={data} options={options} />
}
