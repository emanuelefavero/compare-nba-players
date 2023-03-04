import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

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
}

export default function StatsChart({
  player1Statistic,
  player2Statistic,
  statisticName,
  player1Name,
  player2Name,
}: Props) {
  const data = {
    labels: [player2Name, player1Name],
    datasets: [
      {
        label: statisticName,
        data: [player2Statistic, player1Statistic],
        backgroundColor: [
          'rgba(172, 205, 7, 0.888)',
          'rgba(93, 152, 255, 0.15)',
        ],
        borderColor: ['rgba(172, 205, 7, 1)', 'rgba(93, 152, 255, 1)'],
        borderWidth: 1,

        // Hover
        hoverBorderWidth: 2,
        // hoverBorderColor: 'white',
        hoverBackgroundColor: [
          'rgba(197, 232, 19, 1)',
          'rgba(93, 152, 255, 1)',
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
