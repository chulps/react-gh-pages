import React from 'react';

function Locked (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <rect height="20px" width="20px" fill="none" />
            <g transform="translate(5 4)">
                <g transform="translate(0 -2)">
                    <path 
                        fill="none"
                        d="M14.12 6.994V3.146a2.145 2.145 0 1 0-4.29 0v1.7" 
                        className="cls-2" 
                        stroke={props.color || "var(--navy0)"}
                        strokeMiterlimit="10" 
                        strokeWidth="2px" 
                        transform="translate(-7.084 2)"/>
                    <g>
                        <path 
                            d="M0 0h9.778v6.516H0z" 
                            className="cls-3" 
                            transform="translate(0 6.484)" 
                            fill={props.color || "var(--navy0)"} />
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Locked;