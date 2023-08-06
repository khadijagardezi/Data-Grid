import React, { useEffect, useState } from 'react';
import './DataGrid.css';

interface Column {
  label: string;
  key: string;
}

interface DataGridProps {
  columns: Column[];
  dataAPI: string;
}

const DataGrid: React.FC<DataGridProps> = ({ columns, dataAPI }) => {
  const [data, setData] = useState<DataGridProps[]>([]);

  useEffect(() => {
    fetch(dataAPI)
      .then((response) => response.json())
      .then((jsonData) => {
        const results = jsonData.data;
        if (Array.isArray(results)) {
          setData(results);
        } else {
          console.error('Unexpected API response format');
        }
      })
      .catch((err) => console.error(err));
  }, [dataAPI]);

  return (
    <div className="container-fluid tab-grid px-md-5 bg-dark">
      <table className="table table-success table-striped px-5">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
