import React, { Component } from 'react';
import './progressBar.css'
// @params {String} value
// @params {Object} style
// @params {String} startLabel
// @params {String} endLabel
// @params {Boolean} strength

class ProgressBar extends Component {
    render() {
        let { 
            value,
            max,
            style,
            startLabel,
            endLabel,
            strength
        } = this.props

        let val = parseInt(value)
        let className
        
        if(strength) {
            if(val > 0 && val <= 25) className = "strength-weak"
            if(val > 25 && val <= 50) className = "strength-fair"
            if(val > 50 && val <= 75) className = "strength-good"
            if(val > 75 && val <= 100) className = "strength-strong"
        } else {
            className = "strength-strong"
        }
        
        return (
            <div className="progress-bar">
                <div className="flex-space-between">
                    <label>{startLabel || null}</label>
                    <label>{endLabel || null}</label>
                </div>
                <progress 
                    style={style || null}
                    className={className || null}
                    value={value || "0"} 
                    max={max || "100"} 
                />
            </div>
        )
    }
}

export default ProgressBar