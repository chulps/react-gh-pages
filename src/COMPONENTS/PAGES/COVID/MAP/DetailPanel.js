import React from "react";
import {
  formatCountryName,
  formatNumberWithCommas,
  getFlagEmoji,
} from "../helperFunctions";
import "../../../../animate-in.scss";

const DetailPanel = ({ country, worldData, isFullscreen }) => {
  const data = country || worldData;

  const detailItems = [
    {
      label: "Population:",
      dataField: "population",
    },
    {
      label: "Total Tests:",
      dataField: "tests",
    },
    {
      label: "Total Cases:",
      dataField: "cases",
    },
    {
      label: "Active Cases:",
      dataField: "active",
    },
    {
      label: "Total Deaths:",
      dataField: "deaths",
    },
    {
      label: "Total Recovered:",
      dataField: "recovered",
    },
  ];

  return (
    <div className={`detail-panel ${isFullscreen ? "isFullscreen" : ""} animate-up-wrapper`}>
      <div className="country-hero">
        <h1>{country ? getFlagEmoji(country.country) : "🌎"}</h1>
        <h4>{country ? formatCountryName(country.country) : "World"}</h4>
      </div>
      <div className="country-details animate-up-wrapper">
        {detailItems.map((item) => (
          <div key={item.dataField}>
            <small>{item.label}</small>
            <data>{formatNumberWithCommas(data[item.dataField])}</data>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPanel;
