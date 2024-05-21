import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// for each country, get the number of antelopes for each horn type
const prepareDataForChart = (antelopesData) => {
  const countsByCountryAndHornType = {};

  antelopesData.forEach(({ continent, horns }) => {
    const key = `${continent}_${horns}`;
    if (!countsByCountryAndHornType[key]) {
      countsByCountryAndHornType[key] = 1;
    } else {
      countsByCountryAndHornType[key]++;
    }
  });

  const hornTypes = [...new Set(antelopesData.map(({ horns }) => horns))];
  const countries = [...new Set(antelopesData.map(({ continent }) => continent))];

  const datasets = countries.map((country) => {
    return {
      label: country,
      data: hornTypes.map((hornType) => {
        const key = `${country}_${hornType}`;
        return countsByCountryAndHornType[key] || 0;
      })
    };
  });

  return {
    labels: hornTypes,
    datasets: datasets,
  };
};

const RadarChart = ({ antelopesData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const config = {
          type: 'radar',
          data: prepareDataForChart(antelopesData),
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Number of antelopes by country for each horn type',
              },
            },
          },
        };

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [antelopesData]);

  return <canvas ref={chartRef} />;
};

export default RadarChart;