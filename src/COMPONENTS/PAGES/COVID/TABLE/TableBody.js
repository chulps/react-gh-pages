import React from "react";
import "./Table.css";
import {
  getFlagEmoji,
  decodeHtmlEntities,
  formatCountryName,
  formatNumberWithCommas,
} from "../helperFunctions";

const TableBody = ({ data, visibilityfilter }) => {
  const uniqueKey = visibilityfilter === "continents" ? "continent" : "country";
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td data-label="Flag"><h3>{getFlagEmoji(item.country)}</h3></td>
          <td data-label="Country/territory">
            {decodeHtmlEntities(
              formatCountryName(item[uniqueKey]).replace(/-/g, "&nbsp;")
            )}
          </td>
          <td data-label="Population">
            <data>{formatNumberWithCommas(item.population)}</data>
          </td>
          <td data-label="Total Tests">
            <data>{formatNumberWithCommas(item.tests)}</data>
          </td>
          <td data-label="Total Cases">
            <data>{formatNumberWithCommas(item.cases)}</data>
          </td>
          <td data-label="Active Cases">
            <data>{formatNumberWithCommas(item.active)}</data>
          </td>
          <td data-label="Total Deaths">
            <data>{formatNumberWithCommas(item.deaths)}</data>
          </td>
          <td data-label="Total Recovered">
            <data>{formatNumberWithCommas(item.recovered)}</data>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
