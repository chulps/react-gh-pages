import React, { Component } from 'react'
import './input.css'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidUpdate(prevProps) {
        if(prevProps.value !== this.props.value) {
            this.input.focus()
        }
    }

    render() {
        const {
            readOnly = false,
            disabled = false,
            error = false,
            whole = true,
            value = '',
            name = '',
            type= '',
            id = '',
            className = '',
            placeholder,
            onClick,
            onChange,
            onKeyPress,
            onBlur,
            style = {}
        } = this.props

        let classNames = className
        if (error) classNames += ' error'
        if (disabled) classNames += '  disabled'
        if (whole) classNames += ' whole'

        return (
            <div className='ui-input'>
                {this.props.label && <label>{this.props.label}</label>}
                {this.props.label && <br />}

                <input
                    ref={(input) => {this.input = input}}
                    readOnly={readOnly}
                    style={style}
                    className={classNames}
                    name={name}
                    type={type}
                    value={value}
                    id={id}
                    data-ctid={this.props['data-ctid'] || ''}
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    onBlur={onBlur}
                    onClick={onClick}
                />

                {this.props.error && <p className='ui-input-error-message'>Error: {this.props.error}</p>}
            </div>
        )
    }
}
