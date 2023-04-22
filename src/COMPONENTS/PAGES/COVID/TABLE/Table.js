
import "./Table.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fetchCovidStats } from "../api"; // Add this line
import { findBestMatch } from "string-similarity";
import CustomAutocomplete from "./CustomAutoComplete";
import { getFlagEmoji } from "./getFlagEmoji";
// api lives here
// https://rapidapi.com/api-sports/api/covid-193/

const Table = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "normal",
  });
  const [visibilityFilter, setVisibilityFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const handleSuggestions = (input) => {
    if (input === "") {
      setSuggestions([]);
      return;
    }

    const regex = new RegExp(`^${input}`, "i");
    const filteredSuggestions = stats
      .map((item) => item.country)
      .filter((country) => regex.test(country));

    setSuggestions(filteredSuggestions);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchCovidStats(); // Change this line
      setStats(data);
      setError(error);
    };

    fetchData();
  }, []);

  //
  const getNestedValue = (obj, path) => {
    return path
      .split(".")
      .reduce(
        (value, key) =>
          value && value[key] !== undefined ? value[key] : undefined,
        obj
      );
  };

  // handle the radio buttons in the control panel
  const filterData = (data) => {
    let filteredData = data;

    if (visibilityFilter === "countries") {
      filteredData = filteredData.filter(
        (item) =>
          ![
            "Asia",
            "Europe",
            "North-America",
            "South-America",
            "Oceania",
            "Africa",
            "All",
          ].includes(item.country)
      );
    } else if (visibilityFilter === "continents") {
      filteredData = filteredData.filter((item) =>
        [
          "Asia",
          "Europe",
          "North-America",
          "South-America",
          "Oceania",
          "Africa",
        ].includes(item.country)
      );
    } else if (visibilityFilter === "world") {
      filteredData = filteredData.filter((item) => item.country === "All");
    }

    if (searchTerm) {
      const results = findBestMatch(
        searchTerm.toLowerCase(),
        data.map((item) => item.country.toLowerCase())
      );
      const bestMatch = results.bestMatch.target;
      const levenshteinDistance = results.bestMatch.distance;

      filteredData = filteredData.filter((item) => {
        if (item.country.toLowerCase() === bestMatch) {
          return true;
        }
        const distance = findBestMatch(item.country.toLowerCase(), [bestMatch])
          .bestMatch.distance;
        return distance <= levenshteinDistance;
      });
    }

    return filteredData;
  };

  const sortedData = () => {
    if (!stats) {
      return [];
    }

    let data = [...stats];

    if (sortConfig.key) {
      data.sort((a, b) => {
        const aValue = getNestedValue(a, sortConfig.key);
        const bValue = getNestedValue(b, sortConfig.key);

        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return data;
  };

  // sort the table on click
  const onHeaderClick = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = "normal";
      key = null;
    }
    setSortConfig({ key, direction });
  };

  function formatNumberWithCommas(number) {
    if (number === null) {
      return "🤷‍♂️";
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function decodeHtmlEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  const MemoizedTableRow = React.memo(
  ({ item }) => (
    <tr key={item.country}>
      <td data-label="Country" className="flex-center-y">
        <h3>{getFlagEmoji(item.country)}</h3>&nbsp;&nbsp;
        {decodeHtmlEntities(item.country.replace(/-/g, "&nbsp;"))}
      </td>
      <td data-label="Total Tests">
        <data>{formatNumberWithCommas(item.tests.total)}</data>
      </td>
      <td data-label="Total Cases">
        <data>{formatNumberWithCommas(item.cases.total)}</data>
      </td>
      <td data-label="Total Deaths">
        <data>{formatNumberWithCommas(item.deaths.total)}</data>
      </td>
      <td data-label="Total Recovered">
        <data>{formatNumberWithCommas(item.cases.recovered)}</data>
      </td>
    </tr>
  ),
  (prevProps, nextProps) => prevProps.item.country === nextProps.item.country
);

const MemoizedTableHeader = React.memo(
  () => (
    <tr>
      <th onClick={() => onHeaderClick("country")}>
        <FontAwesomeIcon icon={solid("sort")} />
        &nbsp;{visibilityFilter === "continents" ? "Continent" : "Country"}
      </th>
      <th onClick={() => onHeaderClick("tests.total")}>
        <FontAwesomeIcon icon={solid("sort")} />
        &nbsp;Total&nbsp;Tests
      </th>
      <th onClick={() => onHeaderClick("cases.total")}>
        <FontAwesomeIcon icon={solid("sort")} />
        &nbsp;Total&nbsp;Cases
      </th>
      <th onClick={() => onHeaderClick("deaths.total")}>
        <FontAwesomeIcon icon={solid("sort")} />
        &nbsp;Total&nbsp;Deaths
      </th>
      <th onClick={() => onHeaderClick("cases.recovered")}>
        <FontAwesomeIcon icon={solid("sort")} />
        &nbsp;TotalRecovered
      </th>
    </tr>
  ),
  () => true
);

const renderTable = () => {
  const data = filterData(sortedData());

  return (
    <table>
      <thead>
        <MemoizedTableHeader visibilityFilter={visibilityFilter} />
      </thead>
      <tbody>
        {data.map((item) => (
          <MemoizedTableRow key={item.country} item={item} />
        ))}
      </tbody>
    </table>
  );
};

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="control-panel covid-controls" style={{ zIndex: 2 }}>
        <h4 className="mb1 md-mb-none mr3">Covid-19 Data</h4>
        <div className="covid-filters">
          <div>
            <label className="radio-container">
              <input
                type="radio"
                value="all"
                checked={visibilityFilter === "all"}
                onChange={(e) => setVisibilityFilter(e.target.value)}
              />
              All
            </label>
          </div>

          <div>
            <label className="radio-container">
              <input
                type="radio"
                value="countries"
                checked={visibilityFilter === "countries"}
                onChange={(e) => setVisibilityFilter(e.target.value)}
              />
              <span className="checkmark"></span>
              Countries
            </label>
          </div>

          <div>
            <label className="radio-container">
              <input
                type="radio"
                value="continents"
                checked={visibilityFilter === "continents"}
                onChange={(e) => setVisibilityFilter(e.target.value)}
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
                checked={visibilityFilter === "world"}
                onChange={(e) => setVisibilityFilter(e.target.value)}
              />
              <span className="checkmark"></span>
              World
            </label>
          </div>
        </div>
        <div className="covid-search">
          <div className="autocomplete-container whole">
            <CustomAutocomplete
              options={suggestions}
              value={searchTerm}
              onChange={(newValue) => {
                setSearchTerm(newValue);
                handleSuggestions(newValue);
                setShowClearButton(newValue !== "");
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
          </div>

          <span className="checkmark"></span>
        </div>
      </div>
      <div className="table-wrapper">{renderTable()}</div>
    </div>
  );
};

export default React.memo(Table);
