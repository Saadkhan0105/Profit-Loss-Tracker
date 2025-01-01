import React from "react";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
