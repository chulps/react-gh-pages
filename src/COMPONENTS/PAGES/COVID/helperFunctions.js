// helperFunctions.js

import ISO31661Alpha2 from "iso-3166-1-alpha-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { countryNameToCode } from "./countryNameToCode";

export const getNestedValue = (obj, path) => {
    return path
      .split(".")
      .reduce(
        (value, key) =>
          value && value[key] !== undefined ? value[key] : undefined,
        obj
      );
  };

  export function formatNumberWithCommas(number) {
    if (number === null || number === undefined) {
      return "🤷‍♂️";
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

export function decodeHtmlEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

export const getFlagEmoji = (countryName) => {
    const mappedCountryCode = countryNameToCode[countryName];
    const countryCode = mappedCountryCode
      ? mappedCountryCode
      : ISO31661Alpha2.getCode(countryName);

    if (!countryCode) {
      switch (countryName) {
        case "North America":
        case "South America":
          return (
            <h3>
              <FontAwesomeIcon icon={solid("earth-americas")} />
            </h3>
          );
        case "Europe":
          return (
            <h3>
              <FontAwesomeIcon icon={solid("earth-europe")} />
            </h3>
          );
        case "Africa":
          return (
            <h3>
              <FontAwesomeIcon icon={solid("earth-africa")} />
            </h3>
          );
        case "Asia":
          return (
            <h3>
              <FontAwesomeIcon icon={solid("earth-asia")} />
            </h3>
          );
        case "Australia-Oceania":
          return (
            <h3>
              <FontAwesomeIcon icon={solid("earth-oceania")} />
            </h3>
          );
        case "All":
          return (
            <h3>
              <span role="img" aria-label="earth">
                🌎
              </span>
            </h3>
          );
        default:
          return <h3>""</h3>;
      }
    }
    const codePoints = countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
    return <span className="inline">{codePoints}</span>;
  };

export const formatCountryName = (countryName) => {
    const countryNameMapping = {
      "S. Korea": "South Korea",
      "N. Korea": "North Korea",
      "CAR": "Central African Republic",
      "DRC": "Democratic Republic of the Congo",
      "USA": "United States of America",
      "Diamond Princess": "Diamond Princess (🚢)",
      "St. Barth": "Saint Barth",
      "St-Vincent-Grenadines": "Saint Vincent and the Grenadines",
      "MS Zaandam": "MS Zaandam (🚢)",
      // Add more mappings if needed
    };

    return countryNameMapping[countryName] || countryName;
  };
  
  export const aggregateWorldData = (data) => {
    return data.reduce(
      (accumulator, current) => {
        return {
          cases: accumulator.cases + current.cases,
          deaths: accumulator.deaths + current.deaths,
          recovered: accumulator.recovered + current.recovered,
          population: accumulator.population + current.population,
          active: accumulator.active + current.active,
          tests: accumulator.tests + current.tests,
        };
      },
      { population: 0, cases: 0, deaths: 0, recovered: 0, tests: 0, active: 0 }
    );
  };