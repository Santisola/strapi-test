'use client'

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function PieChart({ chartData }:any) {
  return (
    <div className="chart-container container mt-4">
      <h2>Categorías</h2>
      <Pie
        data={chartData}
      />
    </div>
  );
}
export default PieChart;
