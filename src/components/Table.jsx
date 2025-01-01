import React from "react";

const Table = ({ entries, investedAmount, onDelete }) => {
  const totalPL = entries.reduce((sum, entry) => sum + entry.pl, 0);
  const remainingAmount = parseFloat(investedAmount || 0) + totalPL;

  return (
    <table
      style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse",
        textAlign: "left",
      }}
    >
      <thead>
        <tr>
          <th>Date</th>
          <th>Invested Stocks</th>
          <th>P&L</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.stockName}</td>
            <td>{entry.pl.toFixed(2)}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>-</td>
          <td>{totalPL.toFixed(2)}</td>
          <td>{remainingAmount.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
