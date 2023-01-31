import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,

      text: 'Brunnen',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Fehler',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [2,2,1,1,3,2,2,4,3,2,4,5],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Fördermenge',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [0,1,1,2,3,5,8,13,21,34,55,89],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Anzahl',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [2,3,5,7,11,13,17,19,23,29,31,37],
      borderColor: 'rgb(53, 162, 35)',
      backgroundColor: 'rgba(53, 162, 35, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export default function DemoMultiLineChart() {
  return <Line options={options} data={data} />;
}
