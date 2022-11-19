import React, { Component } from 'react'
import Button from '../button/Button'
import CaretUp from '../svg/CaretUp'
import CaretDown from '../svg/CaretDown'
const d3 = window.d3;

// @params {Boolean} isOpen
// @params {String} title
// @params {HTML} content
// @params {Object} style

class Popover extends Component {

    state = {
        isOpen: false
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {
            // handle outside click
            if(((e.target.parentElement.className !== 'popover flex flex-center') && (e.target.parentElement.className !== 'popover-container')) && this.state.isOpen) this.toggle()

            // handle onClick
            if(((e.target.parentElement.className === 'popover flex flex-center') || (e.target.parentElement.className === 'popover-container'))) this.toggle()
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.isOpen !== this.props.isOpen) {
            this.setState({isOpen: this.props.isOpen})
        }
    }

    toggle() {
        let styles = {
            position: 'fixed',
            zIndex: '1000',
            backgroundColor: 'var(--white)',
            minWidth: `${d3.select('.popover-container')._groups[0][0].clientWidth}px`
        }

        this.setState({
            styles: styles,
            isOpen: !this.state.isOpen
        })
    }

    render() {

        let { 
            title, 
            content, 
            style = null
        } = this.props

        let { isOpen } = this.state

        return (

            // popover start
            <div className="popover-container">
                <Button 
                    option
                    style={style}
                    content={
                        <div 
                            className="popover flex flex-center">
                            <div>{title}</div>
                            <CaretUp className={(!isOpen) ? "hidden" : null} />
                            <CaretDown className={(isOpen) ? "hidden" : null} />
                        </div>
                    }
                />
                <div style={this.state.styles} className={(isOpen) ? null : 'hidden'}>
                    {content}
                </div>
            </div>
            // popover start

        )
    }
}

export default Popover