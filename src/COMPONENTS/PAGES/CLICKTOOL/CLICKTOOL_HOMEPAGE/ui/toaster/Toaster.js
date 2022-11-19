import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './toaster.css'

// @params {Boolean} isOpen
// @params {String} className
// @params {String} message
// @params {Function} handleClose

class Toaster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }

        this.el = document.createElement('div')
    }

    componentDidMount() {
        const { handleClose = this.handleClose } = this.props
        if(this.props.isOpen) {
            // on toaster open, close after 5 seconds
            this.timerOnMount = setTimeout(() => {
                handleClose()
                document.removeEventListener('click', this.handleClick, false)
                document.body.removeChild(this.el)
            }, 5000)
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.isOpen !== this.props.isOpen) {
            const { handleClose = this.handleClose } = this.props
            if(this.props.isOpen) {
                // on toaster open, close after 5 seconds
                this.timerOnUpdate = setTimeout(() => {
                    handleClose()
                    document.removeEventListener('click', this.handleClick, false)
                    document.body.removeChild(this.el)
                }, 5000)
            }
        }
    }

    componentWillUnmount() {
        if (this.props.portals && document.body.contains(this.el)) document.body.removeChild(this.el)
        document.removeEventListener("click", this.handleClick, false);
        clearTimeout(this.timerOnMount)
        clearTimeout(this.timerOnUpdate)
    }

    handleClick = (e) => {
        const {
            handleClose = this.handleClose
        } = this.props

        if (this.modal && this.modal.contains(e.target)) return
        if (this.props.dontClose) return

        handleClose()
        clearTimeout(this.timerOnMount)
        clearTimeout(this.timerOnUpdate)
        document.removeEventListener('click', this.handleClick, false)
        document.body.removeChild(this.el)
    }

    handleClose = (e) => {
        this.setState({isOpen: false})
    }

    handleOpen = (e) => {
        this.setState({isOpen: true})
    }

    renderToaster() {
        document.body.appendChild(this.el)
        document.addEventListener('click', this.handleClick, false)

        return (
            <div
                className="toaster"
                ref={modal => this.modal = modal}>
                <div className={this.props.className}>{this.props.message}</div>
            </div>
        )
    }

    render() {
        const {
            isOpen = false
        } = this.props

        // toaster start
        return ReactDOM.createPortal(
            <div>
                {isOpen && this.renderToaster()}
            </div>,
            this.el
        )
        // toaster end
    }
}

export default Toaster
