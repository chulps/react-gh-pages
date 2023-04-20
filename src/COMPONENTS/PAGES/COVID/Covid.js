import React, { Component } from "react";
import Cards from "./CARDS/Cards";
import Chart from "./CHART/Chart";
import {Helmet} from "react-helmet";
class Covid extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const { data } = this.state;

    return (
      <section className="hero" id="covid">
        <Helmet>
          <title>🦠 Covid-19 Dashboard</title>
        </Helmet>
        <section className="py4">
          <div className="lg-two-columns gap3 mb3 lg-mb4">
            <div>
              <label>Project:</label>
              <h1>🦠 Covid-19<br/>Dashboard</h1>

              <p>
                This chart is built with React, SVG, Nucleotide, and this cool
                little API <a href="https://covid19.mathdro.id/api">here.</a> The point of this project is just to practice connecting to an API and demonstrate my ability to visualize data using what I know.
              </p>
            </div>

            <Cards data={data} />
          </div>
          <h4 className="mb1">Covid-19 Data</h4>
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
