import React from 'react';
import { Bar } from 'react-chartjs-2';

function AdminBarChart() {
  const data =
  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets:
      [
        {
          label: 'Number of Consultations Every Month',
          data: [21, 13, 18, 25, 29, 19, 11, 24, 15, 28, 17, 22],
          backgroundColor: '#2196F3',
          hoverBackgroundColor: '#1565C0'
        }
      ]
  };

  const options =
  {
    scales:
    {
      yAxes:
      [
        {
          ticks:
          {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="g-0">
      <Bar data={data} options={options} />
    </div>
  );
}

export default AdminBarChart;