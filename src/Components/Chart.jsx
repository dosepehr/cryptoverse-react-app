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

function Chart({ sparkline, change ,ticks}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },

        scales: {
            x: {
                ticks: {
                    display: ticks,
                },

                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: ticks,
                    beginAtZero: true,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };
    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
    ];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: sparkline,
                borderColor: `${change > 0 ? 'green' : 'red'}`,
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                pointRadius: 0,
            },
        ],
    };

    return <Line options={options} data={data} />;
}

export default Chart;
