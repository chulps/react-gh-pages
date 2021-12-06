import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <section className="hero flex-center">
          <section>
            <div className="flex-center flex-vertical text-center">
              <h2>Chuck is rebuilding his website.</h2>
              <p className="mb2">Come back later...</p>
              <button>Contact Chuck</button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
