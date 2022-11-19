import React from 'react';

function Options (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" className={props.className || null}>
            <g>
                <g>
                    <path 
                        d="M0 0h20v20H0z" 
                        className="cls-1" 
                        fill="transparent" />
                    <g transform="translate(8 2.4)">
                        <circle 
                            fill={props.color || "var(--navy0)"}
                            cx="2" 
                            cy="2" 
                            r="2" 
                            className="cls-2" 
                            transform="translate(0 6)"/>
                        <circle
                            fill={props.color || "var(--navy0)"}
                            cx="2" 
                            cy="2" 
                            r="2" 
                            className="cls-2" />
                        <circle 
                            fill={props.color || "var(--navy0)"}
                            cx="2" 
                            cy="2" 
                            r="2" 
                            className="cls-2" 
                            transform="translate(0 12)"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Options;