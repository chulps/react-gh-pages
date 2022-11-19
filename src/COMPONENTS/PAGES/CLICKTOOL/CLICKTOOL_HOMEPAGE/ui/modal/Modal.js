import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
import { Button } from '../index'
import CloseIcon from '../svg/CloseIcon'

// @params {Boolean} modalOpen 
// @params {String} header
// @params {HTML} content 
// @params {String} buttonContent 
// @params {Boolean} closeOnDimmerClick 
// @params {Function} handleClose
// @params {Function} onSubmit

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
        }

        this.el = document.createElement('div')
    }

    componentWillUnmount() {
        if (this.props.portals && document.body.contains(this.el)) document.body.removeChild(this.el)
        document.removeEventListener("click", this.handleClick, false)
    }

    handleClick = e => {
        const {
            handleClose = this.handleClose
        } = this.props

        if (this.modal && this.modal.contains(e.target)) return
        if (e.target.tagName === 'g' || e.target.tagName === 'circle') return
        if (this.props.dontClose) return

        handleClose(this.el)
        if(window.location.pathname !== '/auth/payments/activate-subscription') {
            document.removeEventListener('click', this.handleClick, false)
            document.body.removeChild(this.el)
        }
    }

    handleClose = e => {
        document.body.removeChild(this.el)
        this.setState({modalOpen: false})
    }

    renderOverlay() {
        return (
            <div className={
                    this.props.agency
                    ? 'ui-modal-overlay ui-modal-agency'
                    : this.props.masterclass
                        ? 'ui-modal-overlay ui-modal-masterclass'
                        : 'ui-modal-overlay'
                }
            />
        )
    }

    renderAgencyModal() {

    }

    renderMasterclassModal(){

    }

    renderModal() {
        let {
            closeOnDimmerClick = true,
            header = '',
            subheader = '',
            handleClose,
            onSubmit,
            controls = <React.Fragment>
                    <span />
                    <Button
                        content={this.props.buttonContent || 'OK'}
                        cta={this.props.masterclass || this.props.agency}
                        onClick={onSubmit || handleClose}
                        data-ctid='modal-button-ok'
                        style={{float: 'right', fontWeight: 'bold'}}
                    />
                </React.Fragment>,
            noControls = false,

        } = this.props

        if (closeOnDimmerClick) document.addEventListener('click', this.handleClick, false)
        if (this.props.form) {
            controls = <React.Fragment>
                <span 
                    className='link ui-modal-cancel' 
                    onClick={handleClose}
                    data-ctid='modal-button-cancel'
                >
                    Cancel
                </span>

                <div className="ui-modal-buttons">
                    {(this.props.newColumnPreset) && (
                        <Button
                            onClick={() => onSubmit((this.props.editColumnPreset) ? 'edit favorite' : 'new favorite')}
                            content="Save & Fav"
                            style={{float: 'right', marginLeft: '10px'}}
                        />
                    )}

                    <Button
                        secondary={(this.props.newColumnPreset) ? true : false}
                        onClick={() => ((this.props.editColumnPreset) ? onSubmit('edit') : onSubmit())}
                        content={(this.props.newColumnPreset) ? 'Save' : 'Submit'}
                        style={{float: 'right'}}
                        cta={this.props.agency || this.props.masterclass}
                        data-ctid='modal-button-submit'
                    />
                </div>


            </React.Fragment>
        }
        document.body.appendChild(this.el)

        return (
            <div
                className={
                    this.props.agency
                    ? 'ui-modal ui-modal-agency'
                    : this.props.masterclass
                    ? 'ui-modal ui-modal-masterclass'
                    : (this.props.form)
                    ? 'ui-modal ui-modal-mobile'
                    : 'ui-modal'
                }
                ref={modal => this.modal = modal}>

                {/* bar */}
                <div className="bar" />

                {/* header */}
                <div className='ui-modal-header'>
                    <h3>{header}</h3>
                    <span
                        className='ui-modal-close flex-center'
                        onClick={() => {
                            handleClose()
                            window.Intercom('update', {
                                "hide_default_launcher": false
                            })
                        }}
                        data-ctid='modal-close'
                    >
                        <CloseIcon />
                    </span>
                </div>

                {/* subheader */}
                <p className="p10">{subheader}</p>

                {/* content */}
                <div className='ui-modal-content'>
                    <div className='ui-modal-scroll-area'>
                        {/* list */}
                        <div className="ui-modal-list">
                            {this.props.content || this.props.body || this.props.render}
                        </div>
                        {/* controls */}
                        { !noControls && 
                            <div className={(this.props.newColumnPreset) ? 'ui-modal-controls-new-col-preset flex-center-y flex-space-between' : 'ui-modal-controls'}>
                                {controls}
                            </div>
                        }
                    </div>
                </div>



            </div>
        )
    }

    render() {
        const {
            modalOpen = false,
            displayOverlay = true,
        } = this.props

        return ReactDOM.createPortal(
            <div style={{
                position: 'fixed',
                boxSizing: 'border-box',
                top: 0,
                left: 0,
                zIndex: (modalOpen) ? 12 : 0,
                width: '100%',
                height: '100%',
                overflowY: 'scroll'}}>
                {modalOpen && displayOverlay && this.renderOverlay()}
                {modalOpen && this.renderModal()}
            </div>,
            this.el
        )
    }
}

export default Modal
