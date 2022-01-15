import React, { Component } from "react";
import Cards from "./CARDS/Cards";
import Chart from "./CHART/Chart";
import CountryPicker from "./COUNTRY_PICKER/Country_Picker";
import Map from "./MAP/Map";

import { fetchData } from "../../../COVID-API";

class Covid extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    {
      console.log(data);
    }

    return (
      <section className="hero" id="covid">
        <section className="py4">
          <div className="lg-two-columns gap3 mb3 lg-mb4">
            <div>
              <label>🦠 Project:</label>
              <h1 className="text-red0">Covid-19 Dashboard</h1>

              <p>
                This chart is built with React, SVG, Nucleotide, and this cool
                little API <a href="https://covid19.mathdro.id/api">here.</a>
              </p>
            </div>

            <Cards data={data} />
          </div>
          {/* <CountryPicker data={data} /> */}
          <h4 className="mb1">Daily data Jan. 22, 2020 - feb. 3, 2021</h4>
          <Chart />
          <div className="mt3 flex-vertical">
            <label>legend:</label>
            <small className="text-green0">
              Confirmed infections worldwide between Jan 22, 2020 - Feb 02, 2021
            </small>
            <small className="text-red0">
              Confirmed deaths worldwide between Jan 22, 2020 - Feb 02, 2021
            </small>
          </div>
          <hr className="my4" />
        </section>
      </section>
    );
  }
}

export default Covid;
