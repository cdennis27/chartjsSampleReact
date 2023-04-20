import React from 'react';
import { Bar } from 'react-chartjs-2';
//below for links
import { Chart as ChartJS, BarElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js/auto';
import { useRef } from 'react';
import { getElementAtEvent } from 'react-chartjs-2';

ChartJS.register(BarElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart({ chartData }) {

    const chartRef = useRef();

    const onClick = (event) => {
        if(getElementAtEvent(chartRef.current, event).length > 0) {

        console.log(getElementAtEvent(chartRef.current, event));
        const clickDatasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
        console.log(clickDatasetIndex);
        const dataPointIndex = getElementAtEvent(chartRef.current, event)[0].index;
        console.log(dataPointIndex);
        console.log(chartData);
        const link = chartData.datasets[clickDatasetIndex].link[dataPointIndex];
        console.log(link);
        window.open(`${link}`, "_blank");


        }
    }

    return <Bar data={chartData} onClick={onClick} ref={chartRef} />;
}


export default BarChart;