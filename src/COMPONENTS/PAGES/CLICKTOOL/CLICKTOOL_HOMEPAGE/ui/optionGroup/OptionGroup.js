import React, { Component } from 'react'
import Button from '../button/Button'
import './option.css'

// @params {Array} options
// @params {String} className
// @params {Boolean} whole
// @params {Boolean} flex
// @params {String} focused
// @params {Function} onClick

export default class OptionGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options || [ {name: "On", value: true}, {name: "Off", value: false} ],
        }
    }

    render() {
        let {
            options = this.state.options,
            className = "",
            whole = false,
            flex = false,
        } = this.props

        return (
            <div className="ui-optionGroup">
                {options.map((option, i) =>
                    <Button
                        key={i}
                        option
                        className={flex ? `${className} flex-grow flex-center` : className}
                        whole={whole}
                        content={option.name}
                        onClick={e => {e.preventDefault(); this.props.onClick(option.value)}}
                        disabled={option.disabled}
                        focused={this.props.focused === option.value}
                        data-ctid={`optionGroup${option.name}`}
                    />
                )}
            </div>
        )
    }
}
