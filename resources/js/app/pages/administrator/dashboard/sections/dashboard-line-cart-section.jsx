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
    Colors,
    Filler,
} from 'chart.js';

import { Chart, Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors,
    Filler,
);



export default function DashboardLineCartSection({ analytics, periodic, year }) {

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const totals = analytics.map(res => res.total)
    const labels = periodic == 'weekly' ?
        analytics.map(res => res.data + ' Week') :
        periodic == 'monthly' ?
            analytics.map(res => month[res.data] + ' ' + year) :
            periodic == 'quarterly' ?
                analytics.map(res => res.data + 'st Quarter') :
                analytics.map(res => res.data);

    const options = {
        responsive: true,
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false,
                },
            },
            y: {
                position: 'right',
                border: {
                    display: false,
                },
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    color: '#686868',
                },
                ticks: {
                    display: true,
                    color: '#000000',
                    mirror: true,
                }
            },
        },
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            animations: {
                radius: {
                    duration: 400,
                    easing: 'linear',
                    loop: true,
                }
            },
        },
    };

    const data = {
        // labels,
        labels: labels,
        datasets: [
            {
                data: totals,
                borderColor: 'red',
                fill: true,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 0.7,
            },
        ],


    };
    // @ts-ignore
    return (
        <div>
            <Line options={options} data={data} width={'30%'} height={'10%'} />
        </div>
    );
}
