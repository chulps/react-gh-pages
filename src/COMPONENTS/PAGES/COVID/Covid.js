import React, { Component } from "react";
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
        <section className="py3">
          <div className="lg-two-columns gap3 mb3">
            <div>
              <label>Project:</label>
              <h1>
                🦠 Covid-19
                <br />
                Dashboard
              </h1>

              <p>
                This dashboard is built with React, <a href="/projects/nucleotide/">Nucleotide</a>, and this cool little
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
          <Table />
        </section>
      </section>
    );
  }
}

export default Covid;
