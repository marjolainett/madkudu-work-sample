import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ScatterPlot = ({ antelopesData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const hornTypes = [...new Set(antelopesData.map(({ horns }) => horns))];
        const datasets = hornTypes.map((hornType) => {
          const filteredData = antelopesData.filter((species) => species.horns === hornType);
          return {
            label: hornType,
            data: filteredData.map(({ weight, height }) => ({ x: weight, y: height })),
          };
        });

        const config = {
          type: 'scatter',
          data: {
            datasets: datasets,
          },
          options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                title: {
                  display: true,
                  text: 'Weight (kg)'
                }
              },
              y: {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'Height (cm)'
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Weight and height of antelopes based on their horn type',
              },
            }
          }
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

export default ScatterPlot;