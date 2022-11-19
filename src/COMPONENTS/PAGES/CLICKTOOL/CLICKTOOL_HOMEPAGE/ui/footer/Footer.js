import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './footer.css'
import Button from '../button/Button.js'
import Input from '../input/Input.js'
import Modal from '../modal/Modal'
import Facebook from '../svg/Facebook.js'
import Logo from '../svg/ClicktoolNavLogo.js'
import Instagram from '../svg/Instagram.js'
import Twitter from '../svg/Twitter.js'
import Medium from '../svg/Medium.js'
import Linkedin from '../svg/Linkedin.js'
import Contact from '../../screens/site/siteComponents/contact/Contact'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    handleSubmitContact() {
        // for contact form submit
    }

    scrollToTop() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <footer className="flex-column flex-center" style={this.props.auth.authenticated || this.props.userLoggedIn ? {display:"none"}:{}}>
                <div className="footerContainer one-column md-two-columns">
                    <div className="footerSectionOne">
                        <div className="footerConnect">
                            <label className='flex' style={{marginBottom: '20px'}}>
                                Stay Connected
                            </label>
                            <div style={{paddingBottom: '10px'}}>
                                Sign up for our newsletter to receive the latest news about our products and services
                            </div>
                            <label className="flex" style={{marginBottom: "5px"}}>
                                Email
                            </label>
                            <div className="flex">
                                <Input placeholder="your@email.com" onChange={this.props.handleMailingList} value={this.props.mailingListInput}/>
                                <Button cta content="Submit" onClick={this.props.handleMailingListSubmit}></Button>
                            </div>
                        </div>
                        <div className="footerSocialIcons flex-space-around" style={{marginTop: '25px'}}>
                            <a href="https://www.linkedin.com/company/clicktool" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                            <a href="https://www.instagram.com/clicktool/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            <a href="https://twitter.com/clicktoolcom" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                            <a href="https://medium.com/@clicktool" target="_blank" rel="noopener noreferrer"><Medium /></a>
                            <a href="https://www.facebook.com/clicktoolofficial/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                        </div>
                    </div>
                    <div className="footerSectionTwo two-columns">

                        <div className="footerReach flex-column">
                            <label className='flex' style={{marginBottom:'20px'}}>
                                Reach Out
                            </label>
                            <div className="footerReachContent">
                                <div><a href="mailto:info@clicktool.com" style={{color:"var(--white)"}}>info@clicktool.com</a></div>
                                <div>+1 (323) 676-0207</div>
                                <div>
                                    8383 Wilshire Blvd<br/>
                                    Suite 412<br/>
                                    Beverly Hills, CA 90211
                                </div>
                            </div>
                        </div>
                        <div className="footerLinks flex-column">
                            <label className='flex' style={{marginBottom:'20px'}}>
                                Links
                            </label>
                            <div className='footerLinkContent'>
                                <div><Link to="/terms-conditions" onClick={() => {
                                        this.props.handleNavigation('home')
                                        this.scrollToTop()
                                    }}>Terms & Conditions</Link></div>
                                <div><Link to="/affiliate-program" onClick={() => {
                                        this.props.handleNavigation('home')
                                        this.scrollToTop()
                                    }}>Affiliate Program</Link></div>
                                <div><Link to="/privacy-policy" onClick={() => {
                                        this.props.handleNavigation('home')
                                        this.scrollToTop()
                                    }}>Privacy Policy</Link></div>
                                <div><span style={{cursor: 'pointer'}} onClick={() => {
                                        this.props.handleNavigation('home')
                                        this.setState({modalOpen: true})
                                    }}>Contact</span></div>
                                <div><Link to="/jobs" onClick={() => {
                                        this.props.handleNavigation('home')
                                        this.scrollToTop()
                                    }}>Jobs</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '40px'}} className="footerCopyright flex-justify-center flex-column">
                    <Logo />
                    <div style={{marginTop: '20px'}}>© 2019 Clicktool.com All Rights Reserved.</div>
                </div>

                <Modal
                    content={<Contact handleClose={() => this.setState({modalOpen: false})} />}
                    modalOpen={this.state.modalOpen}
                    handleClose={() => this.setState({modalOpen: false})}
                    header='Contact Us'
                    form
                    noControls
                />
            </footer>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Footer)
