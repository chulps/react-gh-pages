import React, { Component } from 'react'

export default class Chuckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    toggleActive = (id) => {
        const { chuck } = this.props
        this.setState({
            active: !this.state.active,
        })
        if(this.props.onChange) this.props.onChange(id)
        if (this.props.chuck) chuck(id)
    }

    render() {
        const {
            active = this.state.active,
            toggleActive = this.toggleActive,
        } = this.props

        return (
            <div style={{display: 'flex', height: '20px', margin: '10px 0'}}>
                <svg
                    style={{height: '100%'}}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={()=>toggleActive(this.props.id)}
                    data-ctid={this.props['data-ctid']}
                >
                <g 
                    className="chuckboxHover" id={`box${this.props.id}`}
                    style={{'fill':'transparent',
                            'stroke':'var(--cyan0)',
                            'strokeWidth':3,
                            'strokeMiterlimit':10}}>
                    <rect className='chuckboxbg' fill='white' width='18px' height='18px' x='1' y='1'/>
                    <polyline id='check' style={{
                            'fill':'none',
                            'stroke':'var(--navy0)',
                            'strokeWidth':3,
                            'strokeMiterlimit':10,
                            'strokeDasharray': 16.081,
                            'strokeDashoffset': `${active?0:16.081}`
                        }} points="4.6,9.3 8.7,13.4 15.4,5.6 ">
                        <animate
                            id="checkAnimation"
                            attributeType="XML"
                            attributeName="stroke-dashoffset"
                            dur="0.2s"
                            fill="freeze"
                            keySplines="0.5 0 0.5 1"
                            keyTimes="0;1"
                            calcMode="spline"
                            begin={`box${this.props.id}.click`}
                        values={active?'16.081;0;':'0;16.081;'}/>
                    </polyline>
                    <path
                        d="M16.5,18.5h-13c-1.1,0-2-0.9-2-2v-13c0-1.1,0.9-2,2-2h13c1.1,0,2,0.9,2,2v13C18.5,17.6,17.6,18.5,16.5,18.5z" >
                    </path>
                </g>
            </svg>
            {this.props.label && <span style={{height: '20px', lineHeight: '20px', marginLeft: '5px', position: "relative"}}>{this.props.label}</span>}
        </div>
        )
    }
}
