import React from 'react' 

export default function Triangle() {
    return (
        <svg id="home-svg-triangle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <title>TRIANGLE</title>
            <polygon fill="white" stroke="var(--cyan0)" strokeMiterlimit="10" strokeDasharray="2.5 2.5" strokeWidth="0.5" points="7.99 50 92.01 98.5 92.01 1.5 7.99 50">
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