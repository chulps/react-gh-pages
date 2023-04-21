import React, { useState } from "react";
import "./CustomAutoComplete.css";

const CustomAutocomplete = ({ options, value, onChange }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleChange = (event) => {
    const input = event.target.value;
    const regex = new RegExp(`^${input}`, "i");
    const filtered = options.filter((option) => regex.test(option));
    setFilteredOptions(filtered);
    onChange(input);
  };

  return (
    <div className="custom-autocomplete whole">
      <input
        width="100%"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search"
      />
      
      {filteredOptions.length > 0 && (
        <ul className="suggestions-list">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => onChange(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomAutocomplete;
