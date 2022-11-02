// Clicktool.js
import React from "react";
import "./clicktool.css";
import ClicktoolTopSection from "./CLICKTOOL_COMPONENTS/ClicktoolTopSection.js";
import ClicktoolRolesSection from "./CLICKTOOL_COMPONENTS/ClicktoolRolesSection.js";
import ClicktoolBrandSection from "./CLICKTOOL_COMPONENTS/ClicktoolBrandSection.js";
import ClicktoolDesignSystemSection from "./CLICKTOOL_COMPONENTS/ClicktoolDesignSystemSection.js";
import ClicktoolTeamSection from "./CLICKTOOL_COMPONENTS/ClicktoolTeamSection.js";
import ClicktoolVisitSection from "./CLICKTOOL_COMPONENTS/ClicktoolVisitSection.js";

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

        {/* challenges section */}
        {/* <ClicktoolChallengesSection /> */}

        {/* brand section  */}
        <ClicktoolBrandSection />

        {/* design system section */}
        <ClicktoolDesignSystemSection />

        {/* svg section */}
        <ClicktoolSVGSection />
        {/* <section className="p3 flex-center">
          section about passing data through svg's coming soon
        </section> */}

        {/* <section className="components flex-center">
          section about components coming soon
        </section> */}
        {/* <section className="tools flex-center">
          section about tools coming soon
        </section> */}

        {/* visit section */}
        <ClicktoolVisitSection />

        {/* team section */}
        <ClicktoolTeamSection />
      </div>
    );
  }
}

export default Clicktool;
