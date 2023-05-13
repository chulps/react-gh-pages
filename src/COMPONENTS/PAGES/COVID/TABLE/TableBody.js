import React from "react";
import {
  getFlagEmoji,
  decodeHtmlEntities,
  formatCountryName,
  formatNumberWithCommas,
} from "./helperFunctions";


const TableBody = ({ data, visibilityfilter }) => {
  const uniqueKey = visibilityfilter === "continents" ? "continent" : "country";
  const columns = [
    { label: "Flag", content: item => getFlagEmoji(item.country) },
    { 
      label: "Country/territory", 
      content: item => decodeHtmlEntities(formatCountryName(item[uniqueKey]).replace(/-/g, "&nbsp;"))
    },
    { label: "Population", content: item => formatNumberWithCommas(item.population) },
    { label: "Total Tests", content: item => formatNumberWithCommas(item.tests) },
    { label: "Total Cases", content: item => formatNumberWithCommas(item.cases) },
    { label: "Total Deaths", content: item => formatNumberWithCommas(item.deaths) },
    { label: "Total Recovered", content: item => formatNumberWithCommas(item.recovered) }
  ];
  
  return (
    <tbody>
      {console.log("data from tableBody", data)}
      {data.map(item => (
        <tr key={item[uniqueKey]}>
          {columns.map(col => (
            <td data-label={col.label}>{col.content(item)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
