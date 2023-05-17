import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ControlPanel = ({
  visibilityfilter,
  setvisibilityfilter,
  searchTerm,
  setSearchTerm,
  showClearButton,
  setShowClearButton,
}) => {
  return (
    <div className="control-panel covid-controls">
    <h3>Covid Data</h3>
    <div className="covid-filters">

      <div>
        <label className="radio-container">
          <input
            type="radio"
            value="countries/territories"
            checked={visibilityfilter === "countries/territories"}
            onChange={(e) => setvisibilityfilter(e.target.value)}
          />
          <span className="checkmark"></span>
          Countries/Territories
        </label>
      </div>

      <div>
        <label className="radio-container">
          <input
            type="radio"
            value="continents"
            checked={visibilityfilter === "continents"}
            onChange={(e) => setvisibilityfilter(e.target.value)}
          />
          <span className="checkmark"></span>
          Continents
        </label>
      </div>

      <div>
        <label className="radio-container">
          <input
            type="radio"
            value="world"
            checked={visibilityfilter === "world"}
            onChange={(e) => setvisibilityfilter(e.target.value)}
          />
          <span className="checkmark"></span>
          World
        </label>
      </div>
    </div>
    <div className="covid-search pb-none">
      <input
        type="text"
        placeholder="🔍 Search"
        value={searchTerm}
        className="whole"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowClearButton(e.target.value !== "");
        }}
      />
      {showClearButton && (
        <button
          className="btn3 search-button px1"
          onClick={() => {
            setSearchTerm("");
            setShowClearButton(false);
          }}
          fill="white"
        >
          <FontAwesomeIcon icon={solid("xmark")} />
        </button>
      )}
      <span className="checkmark"></span>
    </div>
  </div>
  );
};

export default ControlPanel;
