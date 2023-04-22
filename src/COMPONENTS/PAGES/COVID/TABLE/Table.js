import React, { useState, useEffect } from "react";
import ISO31661Alpha2 from "iso-3166-1-alpha-2";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fetchCovidStats } from '../api';
import { countryNameToCode } from './countryNameToCode'

// api lives here
// https://rapidapi.com/api-sports/api/covid-193/

const Table = () => {
  const countryNameToCode = {
    "USA": "US",
    "UK": "GB",
    "S-Korea": "KR",
    "N-Korea": "KP",
    "UAE": "AE",
    "Algeria": "DZ",
    "St-Barth": "BL",
    "St-Vincent-Grenadines": "VC",
    "British-Virgin-Islands": "VG",
    "Bolivia": "BO",
    "Brunei ": "BN",
    "Cabo-Verde": "CV",
    "CAR": "CF",
    "Channel-Islands": "JE", // Note: This includes both Jersey and Guernsey
    "Curaçao": "CW",
    "Czechia": "CZ",
    "Carribean-Netherlands": "BQ",
    "DRC": "CD",
    "Antigua-and-Barbuda": "AG",
    "Dominican-Republic": "DO",
    "Iran": "IR",
    "Equatorial-Guinea": "GQ",
    "Burkina-Faso": "BF",
    "Brunei": "BN",
    "Bosnia-and-Herzegovina": "BA",
    "Eswatini": "SZ",
    "Cook-Islands": "CK",
    "Cayman-Islands": "KY",
    "El-Salvador": "SV",
    "Faeroe-Islands": "FO",
    "Costa-Rica": "CR",
    "French-Guiana": "GF",
    "French-Polynesia": "PF",
    "Falkland-Islands": "FK",
    "Gibraltar": "GI",
    "Hong-Kong": "HK",
    "Macao": "MO",
    "DPRK": "KP",
    "New-Zealand": "NZ",
    "Ivory-Coast": "CI",
    "Isle-of-Man": "IM",
    "Montserrat": "MS",
    "Diamond-Princess": "JP",
    "Myanmar": "MM",
    "New-Caledonia": "NC",
    "Palestine": "PS",
    "Papua-New-Guinea": "PG",
    "North-Macedonia": "MK",
    "R&eacute;union": "RE",
    "Saint-Martin": "MF",
    "Russia": "RU",
    "Saudi-Arabia": "SA",
    "Sierra-Leone": "SL",
    "South-Africa": "ZA",
    "Micronesia": "FM",
    "Marshall-Islands": "MH",
    "Laos": "LA",
    "MS-Zaandam": "NL",
    "Moldova": "MD",
    "Sri-Lanka": "LK",
    "South-Sudan": "SS",
    "San-Marino": "SM",
    "Saint-Kitts-and-Nevis": "KN",
    "Saint-Lucia": "LC",
    "Saint-Helena": "SH",
    "Sao-Tome-and-Principe": "ST",
    "St-Martin": "MF",
    "Saint-Pierre-Miquelon": "PM",
    "Sint-Maarten": "SX",
    "Syria": "SY",
    "Solomon-Islands": "SB",
    "Taiwan": "TW",
    "Tanzania": "TZ",
    "Turks-and-Caicos": "TC",
    "Vietnam": "VN",
    "Trinidad-and-Tobago": "TT",
    "Wallis-and-Futuna": "WF",
    "Venezuela": "VE",
    "Vatican-City": "VA",
    "Western-Sahara": "ME",
  };

  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "normal",
  });

  const [visibilityFilter, setVisibilityFilter] = useState("all");

  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

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
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
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
      return "";
    }
    const codePoints = countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
    return codePoints;
  };

  const renderTable = () => {
    const data = filterData(sortedData());

    return (
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.country}>
              <td data-label="Country">
                {getFlagEmoji(item.country)}&nbsp;{decodeHtmlEntities(item.country.replace(/-/g, "&nbsp;"))}
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
        <thead>
          <tr>
            <th onClick={() => onHeaderClick("country")}>
              <FontAwesomeIcon icon={solid("sort")} />
              &nbsp;Country
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="control-panel covid-controls">
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
              <span class="checkmark"></span>
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
              <span class="checkmark"></span>
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
              <span class="checkmark"></span>
              World
            </label>
          </div>
        </div>
        <div className="covid-search">
          <input
            type="text"
            placeholder="Search"
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
