import React, { useState } from "react";

const AddEntryForm = ({ onAdd }) => {
  const [date, setDate] = useState("");
  const [stockName, setStockName] = useState("");
  const [pl, setPl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !stockName || !pl) {
      alert("Please fill in all fields!");
      return;
    }
    const entry = { date, stockName, pl: parseFloat(pl) };
    onAdd(entry);
    setDate("");
    setStockName("");
    setPl("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Stock Name"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Profit/Loss"
        value={pl}
        onChange={(e) => setPl(e.target.value)}
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddEntryForm;
