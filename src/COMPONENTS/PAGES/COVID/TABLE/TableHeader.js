import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TableHeader = ({ onHeaderClick, visibilityfilter }) => {
  
  return (
    <thead>
      <tr>
        <th className="text-center" onClick={() => onHeaderClick("flag")}>
          <FontAwesomeIcon icon={solid("flag")} />
        </th>
        <th onClick={() => onHeaderClick("country")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;
          {visibilityfilter === "continents"
            ? "Continent"
            : "Country/Territory"}
        </th>
        <th onClick={() => onHeaderClick("population")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;Population
        </th>
        <th onClick={() => onHeaderClick("tests")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;Total Tests
        </th>
        <th onClick={() => onHeaderClick("cases")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;Total Cases
        </th>
        <th onClick={() => onHeaderClick("active")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;Active Cases
        </th>
        <th onClick={() => onHeaderClick("deaths")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;Total Deaths
        </th>
        <th onClick={() => onHeaderClick("recovered")}>
          <FontAwesomeIcon icon={solid("sort")} />
          &nbsp;Total Recovered
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
