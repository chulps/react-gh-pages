import React, { Component } from "react";
import Cards from "./CARDS/Cards";
import Table from "./TABLE/Table";
import { Helmet } from "react-helmet";
class Covid extends Component {
  state = {
    data: {},
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
              <h1>
                🦠 Covid-19
                <br />
                Dashboard
              </h1>

              <p>
                This dashboard is built with React, Nucleotide, and this cool little
                API{" "}
                <a href="https://rapidapi.com/api-sports/api/covid-193/">
                  here.
                </a>{" "}
                The point of this project is just to practice connecting to an
                API and demonstrate my ability to visualize data using what I
                know.
              </p>
            </div>

          </div>
          <h4 className="mb1">Covid-19 Data</h4>
          <Table />
          <hr className="my4" />
        </section>
      </section>
    );
  }
}

export default Covid;
