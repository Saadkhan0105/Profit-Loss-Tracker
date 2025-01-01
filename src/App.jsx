import React, { useState, useEffect } from "react";
import AddEntryForm from "./components/AddEntryForm";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";

const App = () => {
  const [entries, setEntries] = useState([]); // Store table data
  const [investedAmount, setInvestedAmount] = useState(""); // Store invested amount
  const [selectedMonth, setSelectedMonth] = useState("All"); // Month filter
  const [selectedYear, setSelectedYear] = useState("All"); // Year filter

  // Load data from localStorage on page load
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries") || "[]");
    const savedInvestedAmount = localStorage.getItem("investedAmount") || "";
    setEntries(savedEntries);
    setInvestedAmount(savedInvestedAmount);
  }, []);

  // Save data to localStorage whenever entries or investedAmount changes
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
    localStorage.setItem("investedAmount", investedAmount || "");
  }, [entries, investedAmount]);

  // Add a new entry to the table
  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  // Delete an entry from the table
  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  // Filter entries based on the selected month and year
  const filteredEntries = entries.filter((entry) => {
    const entryDate = new Date(entry.date);
    const entryMonth = entryDate.toLocaleString("default", { month: "long" });
    const entryYear = entryDate.getFullYear().toString();

    return (
      (selectedMonth === "All" || selectedMonth === entryMonth) &&
      (selectedYear === "All" || selectedYear === entryYear)
    );
  });

  // Calculate total P&L and remaining invested amount
  const calculateTotals = () => {
    const totalPL = filteredEntries.reduce((sum, entry) => sum + entry.pl, 0);
    const remainingAmount = parseFloat(investedAmount || 0) + totalPL;
    return { totalPL, remainingAmount };
  };

  const { totalPL, remainingAmount } = calculateTotals();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Profit & Loss Tracker</h1>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <Dropdown
          label="Select Month: "
          options={[
            "All",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
          value={selectedMonth}
          onChange={setSelectedMonth}
        />
        <Dropdown
          label="Select Year: "
          options={[
            "All",
            ...Array.from(
              { length: new Date().getFullYear() - 2022 + 1 },
              (_, i) => (2023 + i).toString()
            ),
          ]}
          value={selectedYear}
          onChange={setSelectedYear}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Invested Amount:{" "}
          <input
            type="number"
            value={investedAmount}
            onChange={(e) => setInvestedAmount(e.target.value)}
            placeholder="Enter Invested Amount"
          />
        </label>
      </div>
      <AddEntryForm onAdd={handleAddEntry} />
      <Table
        entries={filteredEntries}
        investedAmount={investedAmount}
        onDelete={handleDeleteEntry}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Summary</h3>
        <p>Total P&L: {totalPL.toFixed(2)}</p>
        <p>Remaining Amount: {remainingAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default App;
