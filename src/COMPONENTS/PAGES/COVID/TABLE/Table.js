import React, { useState, useEffect } from "react";
import "./Table.css";
import "./Loader.css";
import { filterData, sortedData, getAggregatedData } from "./dataProcessing";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import ControlPanel from "./ControlPanel";

const Table = ({ covidStats }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "normal",
  });

  const [visibilityfilter, setvisibilityfilter] = useState(
    "countries/territories"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);
  const Loader = () => {
    return <div className="loader"></div>;
  };
  const [dataChanged, setDataChanged] = useState(false);

  const onHeaderClick = (key) => {
    const direction =
      sortConfig.key === key
        ? sortConfig.direction === "ascending"
          ? "descending"
          : "ascending"
        : "ascending";

    const updatedSortConfig = {
      key: key,
      direction: direction,
    };

    setSortConfig(updatedSortConfig);
  };

  useEffect(() => {
    if (visibilityfilter === "continents") {
      setSortConfig((sortConfig) => {
        const updatedSortConfig = { ...sortConfig };
        switch (updatedSortConfig.key) {
          case "country":
            updatedSortConfig.key = "continent";
            break;
          case "cases":
          case "deaths":
          case "recovered":
          case "tests":
          case "population":
            updatedSortConfig.key = `aggregatedValues.${updatedSortConfig.key}`;
            break;
          default:
            updatedSortConfig.key = null;
            break;
        }
        return updatedSortConfig;
      });
    }
  }, [visibilityfilter]);

  const renderTable = () => {
    const filteredStats = filterData(covidStats, visibilityfilter, searchTerm);
    let sortedStats = sortedData(filteredStats, sortConfig, visibilityfilter === "continents" ? "continent" : "country");
    
    if (visibilityfilter === "continents") {
      sortedStats = getAggregatedData(sortedStats);
    }

    return (
      <table id="covid-table">
        <TableBody data={sortedStats} visibilityfilter={visibilityfilter} />
        <TableHeader
          data={filteredStats}
          onHeaderClick={onHeaderClick}
          visibilityfilter={visibilityfilter}
        />
      </table>
    );
  };
  

  if (!covidStats) {
    return (
      <div className="my4 flex-center flex-vertical">
        <Loader />
        <small>Loading...</small>
      </div>
    );
  }

  return (
    <div>
      <ControlPanel
        visibilityfilter={visibilityfilter}
        setvisibilityfilter={setvisibilityfilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showClearButton={showClearButton}
        setShowClearButton={setShowClearButton}
      />
      <div className="table-wrapper">{renderTable()}</div>
    </div>
  );
};

export default Table;
