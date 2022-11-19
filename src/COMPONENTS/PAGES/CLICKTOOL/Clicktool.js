// Clicktool.js
import React from "react";
import "./clicktool.css";
import ClicktoolTopSection from "./CLICKTOOL_COMPONENTS/ClicktoolTopSection.js";
import ClicktoolRolesSection from "./CLICKTOOL_COMPONENTS/ClicktoolRolesSection.js";
import ClicktoolBrandSection from "./CLICKTOOL_COMPONENTS/ClicktoolBrandSection.js";
import ClicktoolDesignSystemSection from "./CLICKTOOL_COMPONENTS/ClicktoolDesignSystemSection.js";
import ClicktoolTeamSection from "./CLICKTOOL_COMPONENTS/ClicktoolTeamSection.js";
import ClicktoolVisitSection from "./CLICKTOOL_COMPONENTS/ClicktoolVisitSection.js";

import { Link } from "react-router-dom";


// import Laptop from "./CLICKTOOL_COMPONENTS/HomeProjectSection";
import ClicktoolSVGSection from "./CLICKTOOL_COMPONENTS/ClicktoolSVGSection";

class Clicktool extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="clicktool">
        {/* top section */}
        <ClicktoolTopSection />

        {/* roles section */}
        <ClicktoolRolesSection />

        {/* brand section  */}
        <ClicktoolBrandSection />

        {/* design system section */}
        <ClicktoolDesignSystemSection />

        {/* svg section */}
        <ClicktoolSVGSection />

        {/* visit section */}
        <ClicktoolVisitSection />

        {/* team section */}
        <ClicktoolTeamSection />

        {/* <section>
          hello
            <Link to="/clicktool/clicktool_homepage/">Clicktool Homepage</Link>
        </section> */}



      </div>
    );
  }
}

export default Clicktool;
