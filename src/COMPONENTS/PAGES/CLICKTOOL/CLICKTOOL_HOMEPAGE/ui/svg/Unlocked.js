import React from 'react';

function Unlocked (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M0 0h20v20H0z" className="cls-1" fill="none" />
            <g transform="translate(4 3)">
                <g className="cls-2" fill="none">
                    <path 
                        stroke="none"
                        d="M0 0h9.778v6.516H0z" 
                        className="cls-4" 
                        transform="translate(0 6.484)"/>
                    <path 
                        stroke="none"
                        fill={props.color || "var(--navy0)"}
                        d="M2 2v2.516h5.778V2H2M0 0h9.778v6.516H0V0z" 
                        className="cls-5" 
                        transform="translate(0 6.484)"/>
                </g>
                <path 
                    fill="none"
                    stroke={props.color || "var(--navy0)"}
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                    d="M9.83 6.994V3.146a2.146 2.146 0 0 1 4.292 0v1.7" 
                    className="cls-3" 
                    transform="translate(-2.799)"/>
            </g>
        </svg>
    )
}

export default Unlocked;