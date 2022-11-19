import React from 'react';

function Add (props) {
    return (
            <svg width="48" height="48" viewBox="0 0 48 48">
                <defs>
                    <filter id="Rectangle_2634" width="48" height="48" x="0" y="0" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur result="blur" stdDeviation="3"/>
                        <feFlood floodColor="var(--navy0)" floodOpacity=".2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g transform="translate(9.059 6)">
                    <g 
                        filter="url(#Rectangle_2634)"
                        transform="translate(-9.06 -6)">
                        <rect 
                            width="30" 
                            height="30" 
                            fill="var(--navy0)"
                            rx="15" 
                            transform="translate(9 6)"/>
                    </g>
                    <g transform="rotate(45 -.364 21.364)">
                        <path 
                            d="M0 0h15.428v1.543H0z" 
                            fill="var(--white)"
                            stroke="var(--white)"
                            transform="rotate(45 .545 1.317)"/>
                        <path 
                            d="M0 0h15.428v1.543H0z" 
                            fill="var(--white)"
                            stroke="var(--white)"
                            transform="rotate(-45 13.168 5.455)"/>
                    </g>
                </g>
            </svg>
    )
}

export default Add;