// MapLegend.js

import React from "react";
import "../../../../animate-in.scss";

const MapLegend = ({isFullscreen}) => {

  return (
    <div className="map-legend-container">
    <label>Legend</label>
    <div className="map-legend">
      <div className="labels">
        <small>Least</small>
        <small>Most</small>
      </div>
      <div className="gradient"></div>
    </div>
  </div>
  );
};

export default MapLegend;
