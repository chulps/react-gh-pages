import React, { Component } from "react";
import "./Header.css";
import Nav from "./COMPONENTS/Nav";

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <Nav />
      </header>
    );
  }
}

export default Header;
