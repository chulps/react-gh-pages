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

    return (
      <section id="covid" className="py3">
        <Helmet>
          <title>🦠 Covid&#8210;19 Dashboard</title>
        </Helmet>   
          <div className="mb3" style={{maxWidth: '45ch'}}>
            <div>
              <label>Project:</label>
              <h1>
                🦠 Covid&#8210;19
                <br />
                Dashboard
              </h1>

              <p>
                This dashboard is built with React, <a href="/projects/nucleotide/">Nucleotide</a>, and this cool little
                API{" "}
                <a href="https://rapidapi.com/api-sports/api/Covid&#8210;193/">
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
    );
  }
}

export default Covid;
