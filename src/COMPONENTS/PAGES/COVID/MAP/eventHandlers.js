// eventHandlers.js

export const handleChange = (e, setSelectedMetric) => {
    setSelectedMetric(e.target.value);
  };
  
  export const handleZoomIn = (position, setPosition) => {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };
  
  export const handleZoomOut = (position, setPosition) => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };
  
  export const handleMoveEnd = (position, setPosition) => {
    setPosition(position);
  };
  
  export const handleReset = (setSelectedCountry) => {
    setSelectedCountry(null);
  };

  export const handleResetMap = (setPosition) => {
    setPosition({ coordinates: [10, 10], zoom: 1 });
  };
  
  