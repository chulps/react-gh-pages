import React, { Component } from 'react'
import './button.css'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getClassName() {
        const {
            className = "",
            secondary = false,
            cta = false,
            disabled = false,
            add = false,
            help = false,
            cancel = false,
            remove = false,
            option = false,
            focused = false,
            large = false,
            margin = false,
            whole = false,
            agency = false,
        } = this.props
        let classNames = [className]
        if (disabled) classNames.push("disabled")
        if (secondary) classNames.push("secondary")
        if (cta) classNames.push("cta")
        if (add) classNames.push("add")
        if (help) classNames.push("help")
        if (cancel) classNames.push("cancel")
        if (remove) classNames.push("delete")
        if (option) classNames.push("option")
        if (focused) classNames.push("option-focused")
        if (large) classNames.push("btn-lg")
        if (margin) classNames.push("margin-top")
        if (whole) classNames.push("whole")
        if (agency) classNames.push("btn-agency")

        return classNames.join(" ")
    }

    render() {
        let {
            content = this.state.content,
            onClick,
            id = "",
            style = {}
        } = this.props
        return (
            <button
                onClick={onClick}
                className={this.getClassName()}
                id={id}
                data-ctid={this.props['data-ctid'] || ''}
                style={style}
            >
                {content}
            </button>
        )
    }
}

export default Button
