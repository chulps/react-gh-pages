import React from 'react';

function CaretRight (props) {
    return (
        <svg width="10" height="20" viewBox="0 0 10 20" className={props.className || null}>
            <g transform="translate(-4011 -326)">
                <path 
                    fill="none"
                    d="M0 0h10v20H0z" 
                    transform="matrix(0 -1 1 0 4011 346)"/>
                <g transform="matrix(0 -1 1 0 4018 341)">
                    <path 
                        fill={props.color || "var(--navy0"}
                        d="M6.7 8.1L2 3.4 3.4 2l3.3 3.3L10 2l1.4 1.4z" 
                        transform="translate(-2 -7)"/>
                </g>
            </g>
        </svg>
    )
}

export default CaretRight;