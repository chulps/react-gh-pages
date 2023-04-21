import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ISO31661Alpha2 from "iso-3166-1-alpha-2";
import countryNameToCode from "./countryNameToCode";

const getFlagEmoji = (countryName) => {
  const mappedCountryCode = countryNameToCode[countryName];
  const countryCode = mappedCountryCode
    ? mappedCountryCode
    : ISO31661Alpha2.getCode(countryName);

  if (!countryCode) {
    switch (countryName) {
      case "North-America":
      case "South-America":
        return <FontAwesomeIcon icon={solid("earth-americas")} />;
      case "Europe":
        return <FontAwesomeIcon icon={solid("earth-europe")} />;
      case "Africa":
        return <FontAwesomeIcon icon={solid("earth-africa")} />;
      case "Asia":
        return <FontAwesomeIcon icon={solid("earth-asia")} />;
      case "Oceania":
        return <FontAwesomeIcon icon={solid("earth-oceania")} />;
      case "All":
        return "🌎";
      default:
        return null;
    }
  }
  const codePoints = countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
  return codePoints;
};

export { getFlagEmoji };
