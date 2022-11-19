//  Props

//  toggleLoading - show/hide loading screen. e.g. toggleLoading={this.state.loading}
//  logoWidth - customize logo width e.g. logoWidth="100px" or logoWidth="30%". Default is 60px. ***OPTIONAL***
//  loadingMessages - array of customize loading messages e.g. loadingMessages={["message1", "message2", ...etc]} ***OPTIONAL***
//      For static message, set prop to array of 1 item. e.g. loadingMessages={["message1"]} ***OPTIONAL***
//      For no message, set prop to empty array. e.g. loadingMessages={['']} ***OPTIONAL***
//  contained - allows for a loading screen to be nest within a component.  e.g. contained={true}. Default is false. ***OPTIONAL***
//      Make sure parent component has position because loading screen will be position = absolute.
//

import React, { Component } from 'react';
import './loading.css'
import ClicktoolMarkAnimated from './../svg/ClicktoolMarkAnimated.js'

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randy : 0,
            msg : [
                "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
                "We're building the buildings as fast as we can.",
                "Kindly hold on as we convert this bug to a feature.",
                "Keep calm and npm install.",
                "Discovering new ways of making you wait.",
                "Hello IT, have you tried turning it off and on again?",
                "Where did all the internets go?",
                "Please hold on as the intern refills our coffee.",
                "Downloading more RAM..."]
        }
    }

    componentDidMount() {
        if(this.props.loadingMessages){
            this.setState({
                randy : Math.floor(Math.random() * this.props.loadingMessages.length )
            })
        }
        else {
            this.setState({
                randy : Math.floor(Math.random() * 9)
            })
        }

    }

    componentDidUpdate (prevProps, prevState) {
        let loadingMessages = this.props.loadingMessages || this.state.msg
        if(this.props.toggleLoading === true && loadingMessages[0] !== '' && !this.timer) {
            this.timer = setInterval(()=>{
                if(this.state.randy < loadingMessages.length - 1) {
                    this.setState({
                        randy : this.state.randy + 1
                    })
                }
                else {
                    this.setState({
                        randy : 0
                    })
                }
            }, 3500)
        }

        if(prevProps.toggleLoading === true && this.props.toggleLoading === false){
            clearInterval(this.timer)
        }
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render () {
        let loadingMessages = this.props.loadingMessages || this.state.msg
        let logoWidth = this.props.logoWidth || '60px'
        return (
            <div className={
                (this.props.contained)
                ? (this.props.toggleLoading)
                    ? "showContainedLoading"
                    : "hideLoading"
                : (this.props.toggleLoading)
                    ?"showLoading"
                    :"hideLoading"}>
                <div className={
                    (this.props.contained)
                    ? 'loadingContainedContainer'
                    : 'loadingContainer'}>
                    <div style={{width:`${logoWidth}`, margin: "0 auto"}}>
                        <ClicktoolMarkAnimated />
                    </div>
                    <div style={{fontSize: "var(--fontSizeH3)", textAlign: "center", padding: '0 20px'}}>
                        {(loadingMessages)
                            ?loadingMessages[this.state.randy]
                            :''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;
