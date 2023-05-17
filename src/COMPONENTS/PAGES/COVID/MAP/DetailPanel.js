import React from "react";
import {
  formatCountryName,
  formatNumberWithCommas,
  getFlagEmoji,
} from "../helperFunctions";
import "../../../../animate-in.scss";

const DetailPanel = ({ country, worldData }) => {
  if (!country) {
    const { population, tests, cases, active, deaths, recovered } = worldData;

    return (
      <div className="detail-panel p3 lg-pr-none">
        <div className="country-hero">
          <h1>🌎</h1>
          <h4>World</h4>
        </div>

        <div className="country-details animate-up-wrapper pt2">
          <div>
            <label>Population: </label>
            <data>{formatNumberWithCommas(population)}</data>
          </div>
          <div>
            <label>Total Tests: </label>
            <data>{formatNumberWithCommas(tests)}</data>
          </div>
          <div>
            <label>Total Cases: </label>
            <data>{formatNumberWithCommas(cases)}</data>
          </div>
          <div>
            <label>Active Cases: </label>
            <data>{formatNumberWithCommas(active)}</data>
          </div>
          <div>
            <label>Total Deaths: </label>
            <data>{formatNumberWithCommas(deaths)}</data>
          </div>
          <div>
            <label>Total Recovered: </label>
            <data>{formatNumberWithCommas(recovered)}</data>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-panel p3 lg-pr-none">
      <div className="country-hero">
        <h1>{getFlagEmoji(country.country)}</h1>
        <h4>{formatCountryName(country.country)}</h4>
      </div>
      <div className="country-details animate-up-wrapper pt2">
        <div>
          <label>Population: </label>
          <data>{formatNumberWithCommas(country.population)}</data>
        </div>
        <div>
          <label>Total Tests: </label>
          <data>{formatNumberWithCommas(country.tests)}</data>
        </div>
        <div>
          <label>Total Cases: </label>
          <data>{formatNumberWithCommas(country.cases)}</data>
        </div>
        <div>
          <label>Active Cases: </label>
          <data>{formatNumberWithCommas(country.active)}</data>
        </div>
        <div>
          <label>Total Deaths: </label>
          <data>{formatNumberWithCommas(country.deaths)}</data>
        </div>
        <div>
          <label>Total Recovered: </label>
          <data>{formatNumberWithCommas(country.recovered)}</data>
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
