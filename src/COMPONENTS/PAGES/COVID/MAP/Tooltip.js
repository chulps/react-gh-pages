import React from 'react';
import './Tooltip.css';

const Tooltip = ({ content, position }) => {
  const style = {
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return (
    <div className="tooltip" style={style}>
      {content}
    </div>
  );
};

export default Tooltip;
