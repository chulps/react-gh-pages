// ClicktoolSVGSection.js
import React from "react";
import Hat from "./myHat.png";
import NonRedirectTracking from "../CLICKTOOL_COMPONENTS/SVG/NonRedirectTracking.js";
import ClicktoolCity from "./SVG/ClicktoolCity";
import MagnifyingGlass from "../CLICKTOOL_COMPONENTS/SVG/magnifying_glass_animation.svg";
import OnePlace from "../CLICKTOOL_COMPONENTS/SVG/ONE_PLACE.svg";
import RotateLanders from "../CLICKTOOL_COMPONENTS/SVG/RotateLandingPages.svg";

class ClicktoolSVGSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section className="clicktool-svg section pt4">
        <div className="one-column md-two-columns">
          <div>
            <h5>The Thing About SVG...</h5>
            <p>
              Since EVERYTHING needs to be animated and flat, that means we will
              need images that are:
            </p>
            <ul>
              <li>• Programable</li>
              <li>• Scalable</li>
              <li>• Interactive</li>
              <li>• Performant</li>
              <li>
                • Can be made into reusable components that take in props and
                state
              </li>
              <li>• Look nice!</li>
              <li>• PLUS! We can pass data through these things!!!</li>
            </ul>
          </div>

          <div>
            <div className="rounded shadow-in p1 md-p3 flex-center flex-vertical mb1">
              <ClicktoolCity />
              <label className="mt3">clicktool_city.svg</label>
            </div>
          </div>
        </div>
        <div className="one-column md-two-columns gap1">
          <div className="rounded shadow-in p1 md-p3 flex-center flex-vertical flex">
            <NonRedirectTracking />
            <label className="mt3">clicktool_city.svg</label>
          </div>
          <div className="p1 md-p3 flex-center flex-vertical">
            <img src={MagnifyingGlass} alt="" />
            <label className="mt3">magnifying_glass.svg</label>
          </div>
          <div className="rounded shadow-in p1 md-p3 flex-center flex-vertical">
            <img src={OnePlace} alt="" />
            <label className="mt3">one-place.svg</label>
          </div>
          <div className="rounded shadow-in p1 md-p3 flex-center flex-vertical">
            <img src={RotateLanders} alt="" />
            <label className="mt3">clicktool_city.svg</label>
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolSVGSection;
