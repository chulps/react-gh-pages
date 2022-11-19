import React from 'react'
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../../actions/authentication'

import Logo from '../svg/ClicktoolNavLogo.js'
import './nav.css'
import Button from '../button/Button.js'
import CloseIcon from '../svg/CloseIcon.js'

class Navbar extends React.Component {
    state = {
        displaymobileNav: false
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.displaymobileNav !== this.state.displaymobileNav){
            if(this.state.displaymobileNav){
                document.getElementsByClassName('ctContainer')[0].style.pointerEvents = "none"
                document.getElementsByTagName('footer')[0].style.pointerEvents = "none"
                document.body.style.overflow = "hidden"
            }
            else {
                document.getElementsByTagName('footer')[0].style.removeProperty('pointer-events')
                document.getElementsByClassName('ctContainer')[0].style.removeProperty('pointer-events')
                document.body.style.removeProperty("overflow")
            }
        }
    }

    handleMobileNavigation = (navigation) => {
        this.setState({
            displaymobileNav: false
        }, ()=>{
            this.props.handleNavigation(navigation)
        })
    }

    handleMobileLogout = () => {
        this.setState({
            displaymobileNav: false
        }, ()=>{
            this.props.handleLogout()
            this.props.logoutUser()
        })
    }

    render() {        
        return (
            <nav
                className={`${
                    (this.props.scrollY > this.props.prevScrollY) && this.props.scrollY > 49 && this.props.prevScrollY
                        ?   'navbarShrink'
                        :   (this.props.academyCodeModalOpen)
                            ? "navbarShow navBarModal"
                            : "navbarShow"
                        }`}>
                <div className="bar"></div>
                <div className="menu">
                    {
                        (this.props.auth.authenticated || this.props.userLoggedIn)
                        ?   (this.props.user.campaignCount === 0)
                            ?
                                <div style={
                                    (this.state.displaymobileNav)
                                    ? {pointerEvents: "none"}
                                    : {}
                                }>
                                    <Link
                                        data-ctid="navbarLogoOnboardDesktop"
                                        to="/auth/tracker/onboarding"
                                        className={"hidden md-flex"}
                                        onClick={()=>this.props.handleNavigation("auth/tracker/onboarding")}><Logo /></Link>
                                    <Link
                                        data-ctid="navbarLogoOnboardMobile"
                                        to="/auth/tracker/campaigns"
                                        className={"flex md-hidden mobileLogo"}
                                        onClick={()=>this.props.handleNavigation("auth/tracker/campaigns")}><Logo /></Link>
                                </div>
                            :   <div style={
                                    (this.state.displaymobileNav)
                                    ? {pointerEvents: "none"}
                                    : {}
                                }>
                                    <Link
                                        data-ctid="navbarLogoCampaignsDesktop"
                                        to="/auth/tracker/campaigns"
                                        className={"hidden md-flex"}
                                        onClick={()=>this.props.handleNavigation("auth/tracker/campaigns")}><Logo /></Link>
                                    <Link
                                        data-ctid="navbarLogoCampaignsMobile"
                                        to="/auth/tracker/campaigns"
                                        className={"flex md-hidden mobileLogo"}
                                        onClick={()=>this.props.handleNavigation("auth/tracker/campaigns")}><Logo /></Link>
                                    </div>
                        :   <div
                                style={
                                    (this.state.displaymobileNav)
                                    ? {pointerEvents: "none"}
                                    : {}
                                }>
                                <Link
                                        data-ctid="navbarLogoHomeDesktop"
                                        to="/"
                                        className={"hidden md-flex"}
                                        onClick={()=>this.props.handleNavigation("home")}><Logo /></Link>

                                <Link
                                        data-ctid="navbarLogoHomeDesktop"
                                        to="/"
                                        className={"flex md-hidden mobileLogo"}
                                        onClick={()=>this.props.handleNavigation("home")}><Logo /></Link>
                            </div>
                    }

                    {/* mobile menu */}
                    <div className = {
                            (this.state.displaymobileNav)
                            ? "mobileNav mobileNav-show mobile-menu-overlay flex-center"
                            : "mobileNav mobileNav-hide mobile-menu-overlay"
                        }
                        style={
                            (this.state.displaymobileNav)
                            ? {}
                            : {display: 'none'}
                        }>
                        {

                            (this.props.auth.authenticated || this.props.userLoggedIn)
                            ?      <div className="mobile-nav-links flex-column">
                                        <Link
                                            data-ctid="navbarTrackerMobile"
                                            to="/auth/tracker/campaigns"
                                            onClick={()=>this.handleMobileNavigation("auth/tracker/campaigns")}>Tracker</Link>
                                        <Link
                                            data-ctid="navbarYesCampaignAcademyAuthMobile"
                                            to="/auth/academy"
                                            onClick={()=>this.handleMobileNavigation("auth/academy")}>Academy</Link>
                                        <Link
                                            data-ctid="navbarYesCampaignHelpMobile"
                                            to="/auth/help"
                                            onClick={()=>this.handleMobileNavigation("auth/help")}>Help</Link>
                                        <Link
                                            data-ctid="navbarYesCampaignUpdatesMobile"
                                            to="/auth/updates"
                                            onClick={()=>this.handleMobileNavigation("auth/updates")}>What's New?</Link>
                                        <Link
                                            data-ctid="navbarYesCampaignFeedbackMobile"
                                            to="/auth/feedback"
                                            onClick={()=>this.handleMobileNavigation("auth/feedback")}>Feedback</Link>
                                        <Link
                                            data-ctid="navbarYesCampaignSettingsMobile"
                                            to="/auth/settings/trackingUrls"
                                            onClick={()=>this.handleMobileNavigation("auth/settings")}>Settings</Link>
                                        <Button
                                            data-ctid="navbarYesCampaignLogOutMobile"
                                            className="btn-lg"
                                            secondary
                                            content="Log Out"
                                            onClick={this.handleMobileLogout}></Button>
                                    </div>
                            :
                                    <div className="mobile-nav-links flex-column">
                                        <Link
                                            data-ctid="navbarHomeMobile"
                                            to="/"
                                            onClick={()=>this.handleMobileNavigation("home")}>Home</Link>
                                        <Link
                                            data-ctid="navbarPricingMobile"
                                            to="/pricing"
                                            onClick={()=>this.handleMobileNavigation("pricing")}>Pricing</Link>
                                        <Link
                                            data-ctid="navbarAcademyMobile"
                                            to={"/academy"}
                                            onClick={()=>this.handleMobileNavigation("academy")}>Academy</Link>
                                        <Link
                                            data-ctid="navbarAgencyMobile"
                                            to="/agency"
                                            onClick={()=>this.handleMobileNavigation("agency")}>Agency</Link>
                                        <Link to="/login" className="navbar-button" style={{border: "none", height: '100%'}}>
                                            <Button
                                                data-ctid="navbarLogInMobile"
                                                className="btn-lg"
                                                secondary
                                                content="Log In"
                                                onClick={
                                                    ()=>{this.setState({
                                                        displaymobileNav: false
                                                    }, ()=>{
                                                        window.scrollTo(0, 0)
                                                    })}
                                                }
                                            />
                                        </Link>
                                        <Link to="/signup" className="navbar-button" style={{border: "none"}}>
                                            <Button
                                                style={{marginTop: "20px"}}
                                                data-ctid="navbarSignUpMobile"
                                                className="btn-lg"
                                                cta
                                                content={"Sign Up"}
                                                onClick={
                                                    ()=>{this.setState({
                                                        displaymobileNav: false
                                                    }, ()=>{
                                                        window.scrollTo(0, 0)
                                                    })}
                                                }>
                                            </Button>
                                        </Link>
                                    </div>


                        }
                    </div>
                    <div
                        data-ctid="navbarMenuMobile"
                        className="mobile-menu-button flex md-hidden"
                        style={this.state.displaymobileNav === false ? {}: {padding: "8px 12px"}}
                        onClick = {
                            () => {
                                this.setState({
                                    displaymobileNav: !this.state.displaymobileNav
                                })
                            }
                        }>
                        {this.state.displaymobileNav === false ? "Menu": <CloseIcon />}
                    </div>

                    {/* desktop menu */}
                    <div className="desktop-menu hidden md-flex">
                        <div
                            className={
                                `navigationSelector ${
                                    (this.props.navigation.split('/')[1])
                                    ?   (this.props.navigation.split('/')[0] === "auth" && this.props.navigation.split('/')[1] === "academy")
                                        ?   "academy-auth"
                                        :   this.props.navigation.split('/')[1]
                                    :   this.props.navigation} ${
                                        (this.props.user.campaignCount === 0 && this.props.navigation === "auth/tracker/onboarding")
                                        ? "navigationSelectorAdjustment"
                                        : (this.props.user.campaignCount === 0 && (this.props.navigation === "auth/academy" || this.props.navigation === "auth/help"))
                                            ? "navigationSelectorAdjustmentLevel2"
                                            : ""} hidden md-flex`}>
                        </div>
                        {
                            (this.props.auth.authenticated || this.props.userLoggedIn)
                            ?
                                <div className="desktop-menu-left hidden md-flex">
                                    {
                                        (this.props.user.campaignCount !== 0)
                                        ? <Link
                                            data-ctid="navbarTrackerDesktop"
                                            to="/auth/tracker/campaigns"
                                            onClick={()=>this.props.handleNavigation("auth/tracker/campaigns")}>Tracker</Link>
                                        : <Link
                                            data-ctid="navbarOnboardDesktop"
                                            to="/auth/tracker/onboarding"
                                            onClick={()=>this.props.handleNavigation("auth/tracker/onboarding")}>Build a Campaign</Link>
                                    }
                                    <Link
                                        data-ctid="navbarLoggedInAcademyDesktop"
                                        to="/auth/academy"
                                        onClick={()=>this.props.handleNavigation("auth/academy")}>Academy</Link>
                                    <Link
                                        data-ctid="navbarLoggedInHelpDesktop"
                                        to="/auth/help"
                                        onClick={()=>this.props.handleNavigation("auth/help")}>Help</Link>
                                </div>

                            :
                                <div className="desktop-menu-left hidden md-flex">
                                    <Link
                                        data-ctid="navbarPricingDesktop"
                                        to="/pricing"
                                        onClick={()=>this.props.handleNavigation("pricing")}>Pricing</Link>
                                    <Link
                                        data-ctid="navbarAcademyDesktop"
                                        to={"/academy"}
                                        onClick={()=>this.handleMobileNavigation("academy")}>Academy</Link>
                                    <Link
                                        data-ctid="navbarAgencyDesktop"
                                        to="/agency"
                                        onClick={()=>this.props.handleNavigation("agency")}>Agency</Link>
                                </div>
                        }

                        <div className="desktop-menu-right hidden md-flex">
                            {
                                (this.props.auth.authenticated || this.props.userLoggedIn)
                                    ? ''
                                    :   <React.Fragment>
                                            <Link to="/login" className="navbar-button">
                                                <Button
                                                    data-ctid="navbarLogInDesktop"
                                                    secondary
                                                    content="Log In"
                                                />
                                            </Link>
                                        </React.Fragment>
                            }

                            {
                                (this.props.auth.authenticated || this.props.userLoggedIn)
                                    ?
                                        <div>
                                            <Link
                                                data-ctid="navbarLoggedInUpdatesDesktop"
                                                to="/auth/updates"
                                                onClick={()=>this.props.handleNavigation("auth/updates")}>What's New?</Link>
                                            <Link
                                                data-ctid="navbarLoggedInFeedbackDesktop"
                                                to="/auth/feedback"
                                                onClick={()=>this.props.handleNavigation("auth/feedback")}>Feedback</Link>
                                            <Link
                                                data-ctid="navbarLoggedInSettingsDesktop"
                                                to="/auth/settings/tracking-urls"
                                                onClick={()=>this.props.handleNavigation("auth/settings")}>Settings</Link>
                                            <div
                                                data-ctid="navbarLoggedInLogOutDesktop"
                                                style={{margin: "0 5px 0 15px", lineHeight: "40px"}}
                                                onClick={() => {
                                                    this.props.handleLogout()
                                                    this.props.logoutUser()
                                                }}>Log Out</div>
                                        </div>
                                    :
                                        <Link to="/signup" className="navbar-button">
                                            <Button
                                                data-ctid="navbarNotLoggedInSignUpDesktop"
                                                cta
                                                content={"Sign Up"}
                                            />
                                        </Link>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        )
    }}

function mapStateToProps(state) {
    return {
        user: state.user,
        auth: state.auth,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
