import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Table from './components/Table/Table';
import RadarChart from './components/RadarChart';
import ScatterPlot from './components/ScatterPlot';

const App = () => {
  const [antelopesData, setAntelopesData] = useState([]);

  const [chartType, setChartType] = useState("");

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  useEffect(() => {
    fetch('/species.json')
      .then(response => response.json())
      .then(antelopesData => setAntelopesData(antelopesData))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="app">
      <h1>Antelopes Data Dashboard</h1>
      <div className="content">
        <div className="left-block">
          <div className="chart-container">
            <div className="chart-header">
              <h2>Chart</h2>
              <select className="form-select" value={chartType} onChange={handleChartTypeChange}>
                <option value="" disabled hidden>Chart type</option>
                <option value="scatter">Scatter</option>
                <option value="radar">Radar</option>
              </select>
            </div>
            <div className="chart-block">
              {chartType === 'scatter' ? <ScatterPlot antelopesData={antelopesData} /> : <RadarChart antelopesData={antelopesData} />}
            </div>
          </div>
        </div>
        <div className="right-block">
          <h2>Database</h2>
          <Table antelopesData={antelopesData} />
        </div>
      </div>
    </div>
  );
};

export default App;