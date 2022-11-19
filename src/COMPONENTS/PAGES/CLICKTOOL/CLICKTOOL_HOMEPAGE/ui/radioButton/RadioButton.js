import React, { Component } from 'react'
import RadioChecked from '../svg/RadioChecked'
import UncheckedRadio from '../svg/RadioUnchecked'

// @params {Boolean} isOpen
// @params {Function} onClick

class RadioButton extends Component {

    render() {

        let { 
            checked, 
            onClick 
        } = this.props

        return (

            // radio button start
            <div onClick={() => onClick()}>
                {checked ? <RadioChecked /> : <UncheckedRadio />}
            </div>
            // radio button end

        )
    }
}

export default RadioButton