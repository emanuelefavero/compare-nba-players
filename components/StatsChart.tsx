import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

Chart.defaults.font.family = ['Inter ', 'sans-serif'].join(', ')
Chart.defaults.font.size = 16
Chart.defaults.color = '#9ba1b8'
// Chart.defaults.font.weight = '500'

// Hide label
Chart.defaults.plugins.legend.display = false

export default function StatsChart({
  player1Statistic,
  player2Statistic,
  statisticName,
  player1Name,
  player2Name,
}: any) {
  const data = {
    labels: [player2Name, player1Name],
    datasets: [
      {
        label: statisticName,
        data: [player2Statistic, player1Statistic],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,

        // Hover
        hoverBorderWidth: 2,
        // hoverBorderColor: 'white',
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
        ],
      },
    ],
  }

  const options = {
    // rotation: -0.1 * Math.PI,
    plugins: {
      legend: {
        display: false,
        reverse: true,
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
