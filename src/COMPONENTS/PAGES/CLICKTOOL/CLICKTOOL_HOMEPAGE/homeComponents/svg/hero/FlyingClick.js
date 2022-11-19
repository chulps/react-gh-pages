import React, { Component } from "react"

const style= {
    position: "absolute",
    top: '0',
    left: '0',
    minWidth: '800px',
    width: '200%'
}

class FlyingClick extends Component {
    render() {
        return (
            <svg style={style} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4053.6 1254.6">
                <g>
                    <animateTransform
                        id="fly"
                        attributeName="transform"
                        type="translate"
                        from="-875.6 1254.6"
                        to="4153.6 -199.1"
                        begin="0s"
                        dur="30s"
                        repeatCount="indefinite"
                    />
                    <line fill="none" strokeDasharray="10" stroke="var(--white)" strokeWidth="5" strokeMiterlimit="10" x1="798.4" y1="28.7" x2="7.2" y2="206.6">
                        <animate
                            attributeType="XML"
                            attributeName="stroke-dashoffset"
                            dur="0.15s"
                            repeatCount="indefinite"
                            from="20"
                            to="0"/>
                    </line>
                    <line fill="none" stroke="var(--white)" strokeDasharray="10" strokeWidth="5" strokeMiterlimit="10"  x1="0" y1="195.7" x2="793.9" y2="17.2">
                        <animate
                            attributeType="XML"
                            attributeName="stroke-dashoffset"
                            dur="0.15s"
                            repeatCount="indefinite"
                            from="0"
                            to="20"/>
                    </line>
                    <polygon fill="white" points="875,0.4 875.6,7.9 871.6,9 864.4,10 864.1,7.5 	"/>
                    <polygon fill="white" points="772,28.2 772.6,35.7 776.6,32.4 770.3,31.2 	"/>
                    <polygon fill="white" points="806.6,36.9 807.2,44.4 808.9,39.3 803.8,41.3 	"/>
                    <g>
                        <polygon fill="white" points="796.8,30.3 797.9,31 797.3,30.2 		"/>
                        <polygon fill="white" points="786.7,15 765.6,19.7 766.2,27.2 791.3,21.6 		"/>
                        <polygon fill="white" points="865.2,7.9 875,0.4 853.1,0.3 781.5,0 781.5,7.5 785.2,9.8 788.7,10 853.7,7.8 		"/>
                        <polygon  fill="var(--cyan0)" points="865.2,7.9 853.7,7.8 786.1,7.5 781.4,7.5 786.7,15 791.3,21.6 766.2,27.2 772.6,35.7 796.8,30.3
                            797.3,30.2 797.9,31 807.2,44.4 859.7,16.4 875.6,7.9 		"/>
                    </g>
                </g>
            </svg>
        )
    }
}

export default FlyingClick