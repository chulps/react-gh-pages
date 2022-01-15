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
          <div className="lg-half">
            <label>🦠 Project:</label>
            <h1>Covid-19 Dashboard</h1>

            <p>
              This API stopped collecting daily data in early 2021, however the
              all-time data is still accurate. This UI created using React, SVG,
              and this cool API{" "}
              <a href="https://covid19.mathdro.id/api">here.</a>
            </p>
          </div>
          {/* <CountryPicker data={data} /> */}
          <Chart />

          <hr className="my4" />
          <Cards data={data} />
        </section>
      </section>
    );
  }
}

export default Covid;
