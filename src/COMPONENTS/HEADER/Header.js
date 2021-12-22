import React, { Component } from "react";
import "./Header.css";
import Nav from "./COMPONENTS/Nav";

class Header extends Component {
  render() {
    return (
      <header className="p0 md-px1">
        <Nav />
      </header>
    );
  }
}

export default Header;
