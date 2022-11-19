import React from 'react' 

export default function Hexagon2() {
    return (
        <svg version="1.1" id="home-svg-hexagon2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <polygon id="hexagon2" fill="none" stroke="var(--cyan0)" strokeMiterlimit="10" strokeDasharray="2.5 2.5" strokeWidth="0.5" points="90.7,73.5 90.7,26.5 50,3 9.3,26.5 9.3,73.5 50,97">
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
            </polygon>
        </svg>
    )
}