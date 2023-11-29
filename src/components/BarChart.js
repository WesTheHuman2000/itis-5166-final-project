import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as CharJS } from 'chart.js/auto'

function BarChart({chartData}){
    console.log('chartData:', chartData);
    return(
       <Bar data={chartData}/>
    );
}


export default BarChart;