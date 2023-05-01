import React, { useState, useEffect } from "react";
import ISO31661Alpha2 from "iso-3166-1-alpha-2";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fetchCovidStats } from "../api";
import { countryNameToCode } from "./countryNameToCode"
import "./Loader.css";

// api lives here
// https://rapidapi.com/api-sports/api/covid-193/

const Table = () => {


  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "normal",
  });

  const [visibilityfilter, setvisibilityfilter] = useState("all");

  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);
  const Loader = () => {
    return <div className="loader"></div>;
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchCovidStats();
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

    if (visibilityfilter === "countries") {
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
    } else if (visibilityfilter === "continents") {
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
    } else if (visibilityfilter === "world") {
      filteredData = filteredData.filter((item) => item.country === "All");
    }

  if (searchTerm) {
    filteredData = filteredData.filter((item) =>
      formatCountryName(item.country)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
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

  const getFlagEmoji = (countryName) => {
    const mappedCountryCode = countryNameToCode[countryName];
    const countryCode = mappedCountryCode
      ? mappedCountryCode
      : ISO31661Alpha2.getCode(countryName);

    if (!countryCode) {
      switch (countryName) {
        case "North-America":
        case "South-America":
          return <h3><FontAwesomeIcon icon={solid("earth-americas")} /></h3>;
        case "Europe":
          return <h3><FontAwesomeIcon icon={solid("earth-europe")} /></h3>;
        case "Africa":
          return <h3><FontAwesomeIcon icon={solid("earth-africa")} /></h3>;
        case "Asia":
          return <h3><FontAwesomeIcon icon={solid("earth-asia")} /></h3>;
        case "Oceania":
          return <h3><FontAwesomeIcon icon={solid("earth-oceania")} /></h3>;
        case "All":
          return <h3><span role="img" aria-label="earth">🌎</span></h3>;
        default:
          return <h3>""</h3>;
      }
    }
    const codePoints = countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
    return <h3 className="inline">{codePoints}</h3>;
  };

  const formatCountryName = (countryName) => {
  const countryNameMapping = {
    "S Korea": "South Korea",
    "DPRK": "North Korea",
    "CAR": "Central African Republic",
    "DRC": "Democratic Republic of the Congo",
    "USA": "United States of America",
    "Diamond-Princess": "Diamond Princess (🚢)",
    "St-Barth": "Saint Barth",
    "St-Vincent-Grenadines": "Saint Vincent and the Grenadines",
    "MS-Zaandam": "MS Zaandam (🚢)"
    // Add more mappings if needed
  };

  return countryNameMapping[countryName] || countryName;
};


  const renderTable = () => {
    const data = filterData(sortedData());

    return (
      <table id="covid-table">
        <tbody>
          {data.map((item) => (
            <tr key={item.country}>
              <td data-label="Country" className="flex-center-y">
                {getFlagEmoji(item.country)}&nbsp;&nbsp;{decodeHtmlEntities(formatCountryName(item.country).replace(/-/g, "&nbsp;"))}

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
          ))}
        </tbody>
        <thead visibilityfilter={visibilityfilter}>
          <tr>
            <th onClick={() => onHeaderClick("country")}>
              <FontAwesomeIcon icon={solid("sort")} />
              &nbsp;{visibilityfilter === "continents" ? "Continent" : "Country"}
            </th>
            <th onClick={() => onHeaderClick("tests.total")}>
              <FontAwesomeIcon icon={solid("sort")} />
              &nbsp;Total Tests
            </th>
            <th onClick={() => onHeaderClick("cases.total")}>
              <FontAwesomeIcon icon={solid("sort")} />
              &nbsp;Total Cases
            </th>
            <th onClick={() => onHeaderClick("deaths.total")}>
              <FontAwesomeIcon icon={solid("sort")} />
              &nbsp;Total Deaths
            </th>
            <th onClick={() => onHeaderClick("cases.recovered")}>
              <FontAwesomeIcon icon={solid("sort")} />
              &nbsp;Total Recovered
            </th>
          </tr>
        </thead>
      </table>
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

if (!stats) {
  return (
    <div className="my4 flex-center flex-vertical">
      <Loader />
      <small>Loading...</small>
    </div>
  );
}

  return (
    <div>
      <div className="control-panel covid-controls">
        <h3 className="mr3">Covid Data</h3>
        <div className="covid-filters">
          <div>
            <label className="radio-container">
              <input
                type="radio"
                value="all"
                checked={visibilityfilter === "all"}
                onChange={(e) => setvisibilityfilter(e.target.value)}
              />
              All
            </label>
          </div>

          <div>
            <label className="radio-container">
              <input
                type="radio"
                value="countries"
                checked={visibilityfilter === "countries"}
                onChange={(e) => setvisibilityfilter(e.target.value)}
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
      <div className="table-wrapper">{renderTable()}</div>
    </div>
  );
};

export default Table;
