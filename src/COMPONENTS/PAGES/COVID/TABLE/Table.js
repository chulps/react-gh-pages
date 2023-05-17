// Table.js

import React, { useState, useEffect, useCallback } from "react";
import "./Table.css";
import { filterData, sortedData } from "./dataProcessing";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import ControlPanel from "./ControlPanel";
import Loader from "../../../UI/LOADER/Loader";

const Table = ({ covidStats }) => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [visibilityfilter, setvisibilityfilter] = useState(
    "countries/territories"
  );
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "normal",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedStats, setSortedStats] = useState(null);

  const setTable = useCallback(
    (key, direction) => {
      const updatedSortConfig = {
        key: key || "population",
        direction: direction || "normal",
      };
  
      setSortConfig(updatedSortConfig);
  
      let filteredStats = filterData(covidStats, visibilityfilter, searchTerm);
  
      // Remove "World" from filteredStats if the current filter is not "world"
      if (visibilityfilter !== "world") {
        filteredStats = filteredStats.filter((item) => item.country !== "All");
      }
  
      const sorted = sortedData(filteredStats, updatedSortConfig);
      setSortedStats(sorted);
    },
    [covidStats, visibilityfilter, searchTerm]
  );  
  
  useEffect(() => {
    if (covidStats) {
      setTable();
    }
  }, [visibilityfilter, covidStats, searchTerm, setTable]);
  

  const onHeaderClick = (key) => {
    const direction =
      sortConfig.key === key
        ? sortConfig.direction === "ascending"
          ? "descending"
          : "ascending"
        : "ascending";

    setTable(key, direction);
  };

  if (sortedStats || covidStats) {
    return (
      <>
        <ControlPanel
          visibilityfilter={visibilityfilter}
          setvisibilityfilter={setvisibilityfilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showClearButton={showClearButton}
          setShowClearButton={setShowClearButton}
        />
        <div className="table-wrapper">
          <table id="covid-table">
            <TableBody
              data={sortedStats || covidStats}
              visibilityfilter={visibilityfilter}
            />
            <TableHeader
              onHeaderClick={onHeaderClick}
              visibilityfilter={visibilityfilter}
            />
          </table>
        </div>
      </>
    );
  } else {
    return <div className="whole flex-center p3"><Loader /></div>;
  }
};

export default Table;
