// useCovidTable.js

import { useState, useEffect } from "react";
import { fetchCovidStats } from "../api";
import { countryNameToCode } from "./countryNameToCode";
import ISO31661Alpha2 from "iso-3166-1-alpha-2";

// Move all the helper functions and logic-related code here
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

    let data = Array.isArray(stats) ? [...stats] : [];

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

export const useCovidTable = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "normal",
  });
  const [visibilityFilter, setVisibilityFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchCovidStats();
      setStats(data);
      setError(error);
    };

    fetchData();
  }, []);

  // Move all logic-related functions and state management here

  return {
    stats,
    error,
    sortConfig,
    setSortConfig,
    visibilityfilter,
    setVisibilityFilter,
    searchTerm,
    setSearchTerm,
    getNestedValue,
    filterData,
    sortedData,
    onHeaderClick,
    formatNumberWithCommas,
    decodeHtmlEntities,
    getFlagEmoji,
    formatCountryName,
    // Export any other functions and variables you need in the component
  };
};
