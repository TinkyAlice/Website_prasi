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
      text: 'Förderleistung',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Erlaubt',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [2,3,5,7,11,13,17,19,23,29,31,37],
      backgroundColor: 'rgba(53, 162, 35, 0.5)',
    },
    {
      label: 'Gefördert',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [1,3,4,7,12,12,17,17,21,32,30,38],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default function DemoBarChart() {
  return <Bar options={options} data={data} />;
}
