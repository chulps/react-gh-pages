import React from 'react'
import './refresh.css'

export default class Refresh extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    render() {
        
        const {
            opposite = false,
            handleRefresh,
            className
        } = this.props
        let background = "var(--navy0)"
        if (opposite) background = "white"
        return (
            <svg className={opposite ? `ui-refresh-opposite ${className || ''}` : `ui-refresh ${className || ''}`}
                id="refreshTable"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px" y="0px"
		        viewBox="0 0 30 30"
    		    onClick={handleRefresh}
				xmlSpace="preserve"
            >
                <g id="ui-refresh-cover">
                    <rect
                        style={{width: "30px", height: "30px", fill: background}}
                        id="ui-refresh-gold-square"
                    >
                        <animate
                            attributeName="fill"
                            from="var(--navy2)"
                            to="var(--navy2)"
                            keySplines="0.5 0 0.5 1"
                            keyTimes="0;1"
                            calcMode="spline"
                            dur="1s"
                            begin="refreshTable.click"
                            repeatCount="1"
                        />
                    </rect>
                    <g>

                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            id="ui-refresh-click"
                            type="rotate"
                            from="0 15 15"
                            to="-360 15 15"
                            keySplines="0 0.5 0.5 1"
                            keyTimes="0;1"
                            calcMode="spline"
                            dur="0.5s"
                            begin="refreshTable.click"
                            fill="freeze"
                        />
                        <path style={opposite ? {fill: "var(--navy0)"} : {fill: "white"}} className="ui-refresh-arrow" d="M22.7,6.5H26v-3h-9v9h3V8.2c2.2,1.6,3.5,4.1,3.5,6.8c0,4.7-3.8,8.5-8.5,8.5v3c6.3,0,11.5-5.2,11.5-11.5 C26.5,11.7,25.1,8.6,22.7,6.5z"/>
                        <path style={opposite ? {fill: "var(--navy0)"} : {fill: "white"}} className="ui-refresh-arrow" d="M10,21.8c-2.2-1.6-3.5-4.1-3.5-6.8c0-4.7,3.8-8.5,8.5-8.5v-3C8.7,3.5,3.5,8.7,3.5,15c0,3.3,1.4,6.4,3.8,8.5H4 v3h9v-9h-3V21.8z"/>
                    </g>
                </g>
            </svg>
        )
    }
}
