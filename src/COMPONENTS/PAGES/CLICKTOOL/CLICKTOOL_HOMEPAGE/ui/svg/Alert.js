import React from 'react';

function Alert (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <g>
                <g transform="translate(-1061.513 202.483)">
                    <path 
                        fill={props.color || "var(--coral0)"}
                        d="M1071.513-202.483a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm1.364 17.06h-2.728v-2.611h2.728zm0-9.533l-.375 5.6h-1.978l-.375-5.6v-4.588h2.728z" 
                        className="cls-1" />
                    <path
                        fill="var(--white)"
                        d="M1070.149-194.956l.375 5.6h1.978l.375-5.6v-4.588h-2.728z" 
                        className="cls-2" />
                    <path 
                        fill="var(--white)"
                        d="M0 0h2.728v2.61H0z" 
                        className="cls-2" 
                        transform="translate(1070.149 -188.034)"/>
                </g>
            </g>
        </svg>
    )
}

export default Alert;