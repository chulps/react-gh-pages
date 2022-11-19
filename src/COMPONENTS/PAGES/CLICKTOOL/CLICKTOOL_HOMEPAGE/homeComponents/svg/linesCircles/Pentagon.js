import React from 'react' 

export default function Pentagon() {
    return (
        <svg version="1.1" id="home-svg-pentagon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <title>PENTAGON</title>
            <polygon fill="var(--white)" stroke="var(--cyan0)" strokeMiterlimit="10" strokeDasharray="2.5 2.5" strokeWidth="0.5" points="50 5 2.68 39.38 20.76 95 79.24 95 97.32 39.38 50 5">
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
                    values="0;37.219;0"
                />
            </polygon>
        </svg>
    )
}