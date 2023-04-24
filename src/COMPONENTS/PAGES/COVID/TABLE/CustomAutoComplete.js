import React, { useState, useEffect } from "react";
import "./CustomAutoComplete.css";

const CustomAutocomplete = ({ options, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event) => {
    const input = event.target.value;
    setInputValue(input);

    if (input === "") {
      setFilteredOptions([]);
      return;
    }

    const regex = new RegExp(`^${input}`, "i");
    const filtered = options.filter((option) => regex.test(option));
    setFilteredOptions(filtered);
    onChange(input); // Add this line back
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".custom-autocomplete") === null) {
        setFilteredOptions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-autocomplete whole">
      <input
        width="100%"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />

      {filteredOptions.length > 0 && (
        <ul className="suggestions-list">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(option);
                setFilteredOptions([]);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomAutocomplete;