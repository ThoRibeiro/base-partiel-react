import { useEffect, useState } from "react";
import "./DataTable.css";

export default function DataTable({ columns, fetchData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(fetchedData => setData(fetchedData || []))
      .catch(() => setData([]));
  }, []);


  return (
    <table className="table">
      <thead>
        <tr>{columns.map(column =>
          <th key= {column.key} > {column.label} </th>
        )}
        </tr>
      </thead>
      <tbody>
        {data.map(line => (
          <tr key={line.id}>
            {columns.map(column =>
              <td key={column.key}>
                {line[column.key]}
              </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
