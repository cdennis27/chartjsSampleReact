import React from 'react';
import { Line } from 'react-chartjs-2';
//below for links
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js/auto';
import { useRef } from 'react';
import { getElementAtEvent } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
function LineChart({ chartData }) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "USERS GAINED BY YEAR"
            }
        }
    }

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
    
    return <Line
        data={chartData}
        options={options}
        onClick={onClick}
        ref={chartRef}
    />;
}



export default LineChart;