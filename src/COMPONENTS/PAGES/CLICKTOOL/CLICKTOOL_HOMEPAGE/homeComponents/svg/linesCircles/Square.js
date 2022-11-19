import React from 'react' 

export default function Square() {
    return (
        <svg version="1.1" id="home-svg-square" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" xmlSpace="preserve">
            <rect x="12.36" y="12.36" transform="matrix(0.9397 -0.342 0.342 0.9397 -14.0856 20.1164)" fill="white" stroke="var(--cyan0)" strokeMiterlimit="10" strokeDasharray="2.5 2.5" strokeWidth="0.5" width="75.28" height="75.28">
                <animate
                    attributeType="XML"
                    attributeName="stroke-dashoffset"
                    dur="4s"
                    repeatCount="indefinite"
                    keySplines="
                    0.5 0 0.5 1;
                    0.5 0 0.5 1"
                    keyTimes="
                    0;0.5;1"
                    calcMode="spline"
                    begin="0s"
                    values="0;37.219;0"/>
            </rect>
        </svg>
    )
}