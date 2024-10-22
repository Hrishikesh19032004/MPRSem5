// src/Chart.jsx
import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ fileName }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const chartDiv = document.getElementById('chart');
    if (!chartDiv) return; // Guard against null reference

    const newChart = createChart(chartDiv, {
      width: chartDiv.clientWidth,
      height: chartDiv.clientHeight,
      layout: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
      },
      grid: {
        vertLines: {
          color: '#f0f3fa',
        },
        horzLines: {
          color: '#f0f3fa',
        },
      },
      crosshair: {
        mode: 0,
        color: '#000000',
      },
      rightPriceScale: {
        borderColor: '#cccccc',
        fontSize: 12,
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
      timeScale: {
        borderColor: '#cccccc',
        fontSize: 12,
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
    });

    setChart(newChart);

    const candlestickSeries = newChart.addCandlestickSeries({
      upColor: '#4caf50',
      downColor: '#ef5350',
      borderDownColor: '#ef5350',
      borderUpColor: '#4caf50',
      wickDownColor: '#ef5350',
      wickUpColor: '#4caf50',
    });

    // Fetch and parse CSV data based on fileName prop
    fetch(`/${fileName}`)
      .then((response) => response.text())
      .then((csv) => {
        const data = parseCSV(csv);
        candlestickSeries.setData(data);
      })
      .catch((error) => console.error(`Error fetching ${fileName}:`, error)); // Error handling

    const parseCSV = (csv) => {
      const rows = csv.trim().split('\n');
      const data = [];
      rows.slice(1).forEach((row) => {
        const [date, open, high, low, close] = row.split(',').map((value) => value.trim());
        data.push({
          time: date,
          open: parseFloat(open),
          high: parseFloat(high),
          low: parseFloat(low),
          close: parseFloat(close),
        });
      });
      return data;
    };

    // Cleanup function to remove chart on unmount
    return () => chartDiv.innerHTML = '';
  }, [fileName]);

  return <div id="chart" />;
};

export default Chart;
