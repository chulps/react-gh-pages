import React, { useState } from "react";
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
  const [touchAction, setTouchAction] = useState(null);

  const handleTouchStart = (e, action) => {
    e.preventDefault();
    setTouchAction(action);
    // Add any necessary touch start logic here
    // Start the action (e.g., handleReset, handleZoomIn) using a timeout or other logic
    if (action) {
      // Start the corresponding action based on the provided action parameter
      action();
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (touchAction) {
      // Perform any necessary touch end logic here
      // Cancel or complete the ongoing action if necessary
      // For example, you can clear a timeout if the action is based on a timeout
      setTouchAction(null);
    }
  };

  return (
    <div className={`zoom-controls ${isFullscreen ? 'isFullscreen' : ''}`} style={style}>
      <button
        className="btn3 fullscreen-button"
        onClick={handleToggleFullscreen}
        onTouchStart={(e) => handleTouchStart(e, handleToggleFullscreen)}
        onTouchEnd={handleTouchEnd}
      >
        <FontAwesomeIcon icon={isFullscreen ? solid("compress") : solid("expand")} />
      </button>
      <button
        className={`btn3 ${isCountrySelected ? "" : "disabled"} reset-details-button`}
        onClick={handleReset}
        onTouchStart={(e) => handleTouchStart(e, handleReset)}
        onTouchEnd={handleTouchEnd}
      >
        <FontAwesomeIcon icon={solid("earth")} />
      </button>
      <button
        className="btn3 reset-map-button"
        onClick={handleResetMap}
        onTouchStart={(e) => handleTouchStart(e, handleResetMap)}
        onTouchEnd={handleTouchEnd}
      >
        <FontAwesomeIcon icon={solid("location-crosshairs")} />
      </button>
      <button
        className="btn3 zoom-in-button"
        onClick={handleZoomIn}
        onTouchStart={(e) => handleTouchStart(e, handleZoomIn)}
        onTouchEnd={handleTouchEnd}
      >
        <FontAwesomeIcon icon={solid("plus")} />
      </button>
      <button
        className="btn3 zoom-out-button"
        onClick={handleZoomOut}
        onTouchStart={(e) => handleTouchStart(e, handleZoomOut)}
        onTouchEnd={handleTouchEnd}
      >
        <FontAwesomeIcon icon={solid("minus")} />
      </button>
    </div>
  );
};

export default ZoomControls;
