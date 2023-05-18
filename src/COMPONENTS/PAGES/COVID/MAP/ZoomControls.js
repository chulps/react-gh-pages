// ZoomControls.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ZoomControls = ({
  handleReset,
  handleZoomIn,
  handleZoomOut,
  handleResetMap,
  isCountrySelected,
  handleToggleFullscreen,
  isFullscreen,
  style,
}) => {
  return (
    <div className={`zoom-controls ${isFullscreen ? 'isFullscreen' : ''}`} style={style}>
      <button
        className="btn3 fullscreen-button ghost md-flex"
        onClick={handleToggleFullscreen}
      >
        <FontAwesomeIcon
          icon={isFullscreen ? solid("compress") : solid("expand")}
        />
      </button>
      <button
        className={`btn3 ${
          isCountrySelected ? "" : "disabled"
        } reset-details-button`}
        onClick={handleReset}
      >
        <FontAwesomeIcon icon={solid("earth")} />
      </button>
      <button className="btn3 reset-map-button" onClick={handleResetMap}>
        <FontAwesomeIcon icon={solid("location-crosshairs")} />
      </button>
      <button className="btn3 zoom-in-button" onClick={handleZoomIn}>
        <FontAwesomeIcon icon={solid("plus")} />
      </button>
      <button className="btn3 zoom-out-button" onClick={handleZoomOut}>
        <FontAwesomeIcon icon={solid("minus")} />
      </button>
    </div>
  );
};

export default ZoomControls;
