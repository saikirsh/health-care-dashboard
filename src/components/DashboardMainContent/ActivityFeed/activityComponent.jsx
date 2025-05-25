import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const data = {
  labels: ['Mon', 'Tue', 'Wen', 'Thu','Fri', 'Sat', 'Sun', 'Apr'],
  datasets: [
    {
      label: 'Activity',
      data: [30, 50, 70, 90,30, 50, 70],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const ActivityChart = () => <Bar data={data} />;
export default ActivityChart;