import React from 'react'

export default function Line5R() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545.963 326.211" id="home-svg-line5r">
            {/* <path id="Path_1486" d="M0 0l-285.324-545.5" fill="none" stroke="var(--cyan0)" strokeDasharray="7 7" strokeWidth="1.1" data-name="Path 1486" transform="rotate(-90 273.087 -272.644)">
                <animate
                    attributeType="XML"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    repeatCount="indefinite"
                    from="0"
                    to="-12.6" />
            </path> */}

            <line x1="0" y1="100%" x2="100%" y2="0" fill="none" stroke="var(--cyan0)" strokeDasharray="7 7" strokeWidth="1.1">
                <animate
                    attributeType="XML"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    repeatCount="indefinite"
                    from="0"
                    to="-12.6" />
            </line>
        </svg>
    )
}