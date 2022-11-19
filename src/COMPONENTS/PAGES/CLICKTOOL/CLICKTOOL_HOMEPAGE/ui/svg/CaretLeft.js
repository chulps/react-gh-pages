import React from 'react';

function CaretLeft (props) {
    return (
        <svg width="10" height="20" viewBox="0 0 10 20" className={props.className || null}>
            <g transform="translate(-3991 -326)">
                <path 
                    fill="none"
                    d="M0 0h10v20H0z" 
                    transform="rotate(90 1842.5 2168.5)"/>
                <g transform="rotate(90 1836.5 2167.5)">
                    <path 
                        fill={props.color || "var(--navy0)"}
                        d="M6.7 8.1L2 3.4 3.4 2l3.3 3.3L10 2l1.4 1.4z" 
                        transform="translate(-2 3)"/>
                </g>
            </g>
        </svg>
    )
}

export default CaretLeft;