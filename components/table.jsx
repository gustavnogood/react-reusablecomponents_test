import React from "react";

export const Table = ({ headers, rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {row.cells.map((cell) => (
              <td key={cell.id}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};