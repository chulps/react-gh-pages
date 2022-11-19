import React from 'react';

// @params {String} viewBox
// @params {Function} onClick
// @params {String} className
// @params {String} color

function Close (props) {
    return (
        <svg 
            width="20" 
            height="20" 
            viewBox={props.viewBox || "0 0 20 20"}
            onClick={props.onClick}
            className={props.className}>
            <path 
                fill="none"
                d="M0 0h20v20H0z" 
                className="cls-1" />
            <g transform="translate(4 4)">
                <path 
                    fill={props.color || "var(--navy0)"}
                    d="M6 7.091L1.091 12 0 10.909 4.909 6 0 1.091 1.091 0 6 4.909 10.909 0 12 1.091 7.091 6 12 10.909 10.909 12z" 
                    className="cls-2" />
            </g>
        </svg>
    )
}

export default Close;