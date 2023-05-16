import React, { useState, useEffect } from "react";
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

  const setTable = (key, direction) => {
    const updatedSortConfig = {
      key: key || "population",
      direction: direction || "normal",
    };

    setSortConfig(updatedSortConfig);
    const filteredStats = filterData(covidStats, visibilityfilter, searchTerm);
    const sorted = sortedData(filteredStats, updatedSortConfig);
    setSortedStats(sorted);
  };

  const onHeaderClick = (key) => {
    const direction =
      sortConfig.key === key
        ? sortConfig.direction === "ascending"
          ? "descending"
          : "ascending"
        : "ascending";

    setTable(key, direction);
  };

  useEffect(
    () => {
      if (covidStats) {
        setTable();
      }
    },
    // eslint-disable-next-line
    [visibilityfilter]
  );

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
