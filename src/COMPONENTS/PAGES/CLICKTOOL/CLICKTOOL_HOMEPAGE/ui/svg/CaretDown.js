import React from 'react';
function CaretDown (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 10 20" className={props.className || null}>
            <g transform="translate(-4001 -336)">
                <path
                    fill="none"
                    d="M0 0h10v20H0z"
                    className="cls-1"
                    transform="translate(4001 336)"/>
                <g transform="translate(4006 343)">
                    <path
                        fill={props.color || "var(--navy0)"}
                        d="M6.7 8.1L2 3.4 3.4 2l3.3 3.3L10 2l1.4 1.4z"
                        className="cls-2"
                        transform="translate(-7 -2)"/>
                </g>
            </g>
        </svg>
    )
}

export default CaretDown;
