import React from 'react';
import './Table.css';

const Table = ({ antelopesData }) => {
  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Continent</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Horns</th>
          </tr>
        </thead>
        <tbody>
          {antelopesData.map((antelope) => (
            <tr key={antelope.name}>
              <td><img src={antelope.picture} alt={antelope.name} /></td>
              <td>{antelope.name}</td>
              <td>{antelope.continent}</td>
              <td>{antelope.weight}</td>
              <td>{antelope.height}</td>
              <td>{antelope.horns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;