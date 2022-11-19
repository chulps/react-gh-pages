import React from 'react';

function OptionsLabel (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path 
                fill="none"
                d="M0 0h20v20H0z" 
                className="cls-1" />
            <path 
                fill={props.color || "var(--cyan0)"}
                d="M0 10.8A1.2 1.2 0 1 1 1.2 12 1.2 1.2 0 0 1 0 10.8zM0 6a1.2 1.2 0 1 1 1.2 1.2A1.2 1.2 0 0 1 0 6zm0-4.8a1.2 1.2 0 1 1 1.2 1.2A1.2 1.2 0 0 1 0 1.2z" 
                className="cls-2" 
                transform="translate(9 4)"/>
        </svg>
    )
}

export default OptionsLabel;