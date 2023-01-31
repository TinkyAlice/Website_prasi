import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Wartungsaufwand',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Fehlermeldungen',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [2,2,1,1,3,2,2,4,3,2,4,5],
      backgroundColor: 'rgba(153, 102, 255, 0.7)',
    },
    {
      label: 'Aus der Ferne zu beheben',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [1,2,1,0,2,1,2,3,2,1,3,3],
      backgroundColor: 'rgba(255, 206, 86, 0.8)',
    },
    {
      label: 'Einsätze',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [1,0,0,1,1,1,0,1,1,1,1,2],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
    },
  ],
};


export default function DemoBarChart() {
  return <Bar options={options} data={data} />;
}
