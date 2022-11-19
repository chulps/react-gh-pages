import React from "react"
import "./mcmodal.css"
import { Button, Input, Modal, OptionGroup } from "./../../ui"

// import axios from "axios"
// import { history } from '../../../../App.js';
// export const Root_URL = `${process.env.REACT_APP_SERVER_URL}`;

class McModal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            code: false,
            code1: "",
            code2: "",
            code3: "",
            code4: "",
            name: "",
            email: "",
            number: "",
            validCode: false,
            errorModal: false
        }
    }

    componentDidMount(){
        // window.fbq('init', '412098679441174');
        // window.fbq('track', 'PageView');
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.code1 !== this.state.code1 && this.state.code1){
            this.props.code1(this.state.code1)
            this.setState({
                code1: this.state.code1
            }, ()=>{
                document.getElementById("code-2").focus()
            })
        }
        else if (prevState.code1 !== this.state.code1 && !this.state.code1){
            this.props.code1(this.state.code1)
            this.setState({
                code1: this.state.code1
            }, ()=>{
                document.getElementById("code-1").focus()
            })
        }
        if(prevState.code2 !== this.state.code2 && this.state.code2){
            this.props.code2(this.state.code2)
            this.setState({
                code2: this.state.code2
            }, ()=>{
                document.getElementById("code-3").focus()
            })
        }
        else if (prevState.code2 !== this.state.code2 && !this.state.code2){
            this.props.code2(this.state.code2)
            this.setState({
                code2: this.state.code2
            }, ()=>{
                document.getElementById("code-2").focus()
            })
        }
        if(prevState.code3 !== this.state.code3 && this.state.code3){
            this.props.code3(this.state.code3)
            this.setState({
                code3: this.state.code3
            }, ()=>{
                document.getElementById("code-4").focus()
            })
        }
        else if (prevState.code3 !== this.state.code3 && !this.state.code3){
            this.props.code3(this.state.code3)
            this.setState({
                code3: this.state.code3
            }, ()=>{
                document.getElementById("code-3").focus()
            })
        }
        if(prevState.code4 !== this.state.code4 && this.state.code4){
            this.props.code4(this.state.code4)
        }
        else if (prevState.code4 !== this.state.code4 && !this.state.code4){
            this.props.code4(this.state.code4)
            this.setState({
                code4: this.state.code4
            }, ()=>{
                document.getElementById("code-4").focus()
            })
        }
        if(prevState.code !== this.state.code && this.state.code){
            this.setState({
                code1: this.state.code1
            }, ()=>{
                this.props.code(this.state.code)
                document.getElementById("code-1").focus()
            })
        }
    }

    handleCode1 = (e) => {
        if(parseInt(e.target.value, 10) >= 0 || parseInt(e.target.value, 10) <= 9){
            this.setState({
                code1: e.target.value
            })
        }
    }
    handleCode2 = (e) => {
        if(parseInt(e.target.value, 10) >= 0 || parseInt(e.target.value, 10) <= 9){
            this.setState({
                code2: e.target.value
            })
        }
    }
    handleCode3 = (e) => {
        if(parseInt(e.target.value, 10) >= 0 || parseInt(e.target.value, 10) <= 9){
            this.setState({
                code3: e.target.value
            })
        }
    }
    handleCode4 = (e) => {
        if(parseInt(e.target.value, 10) >= 0 || parseInt(e.target.value, 10) <= 9){
            this.setState({
                code4: e.target.value
            })
        }
    }

    renderContent(){
        if(this.state.code){
            return(
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <label style={{textAlign:"center", margin: 10, color: "var(--grey5"}}>enter code here</label>
                <div className="masterclass-invite-code-input-group">
                    <div className="flex-row flex-space-between whole">
                      <input className="masterclass-invite-code-input"
                        onKeyDown={(e) => {
                            if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode === 8) || (e.keyCode === 46)) {
                                this.setState({
                                    code1: ""
                                })
                            }
                        }}
                        id="code-1" value={this.state.code1}
                        onChange={(e)=>this.handleCode1(e)}
                        placeholder="•" type="text" maxLength="1"
                      />
                      <input className="masterclass-invite-code-input"
                        id="code-2" value={this.state.code2}
                        onKeyDown={(e) => {
                            if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode === 8) || (e.keyCode === 46)) {
                                this.setState({
                                    code2: ""
                                })
                            }
                        }}
                        onChange={(e)=>this.handleCode2(e)}
                        placeholder="•" type="text" maxLength="1"
                      />
                      <input className="masterclass-invite-code-input"
                        id="code-3" value={this.state.code3}
                        onKeyDown={(e) => {
                            if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode === 8) || (e.keyCode === 46)) {
                                this.setState({
                                    code3: ""
                                })
                            }
                        }}
                        onChange={(e)=>this.handleCode3(e)}
                        placeholder="•" type="text" maxLength="1"
                      />
                      <input className="masterclass-invite-code-input"
                        id="code-4" value={this.state.code4}
                        onKeyDown={(e) => {
                            if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode === 8) || (e.keyCode === 46)) {
                                this.setState({
                                    code4: ""
                                })
                            }
                        }}
                        onChange={(e)=>this.handleCode4(e)}
                        placeholder="•" type="text" maxLength="1"
                      />
                  </div>
                </div>
            </div>)
        }
        else {
            return(
            <div className="iDontHaveAnInviteCode">
                <div className="noCodeInput">
                    <Input label="name" hideIcon masterclass
                      value={this.props.name}
                      onChange={this.props.handleName}
                    />
                </div>
                <div className="noCodeInput">
                    <Input label="email" hideIcon masterclass
                      value={this.props.email}
                      onChange={this.props.handleEmail}
                    />
                </div>
                <div className="noCodeInput">
                    <Input label="phone number" hideIcon masterclass
                      value={this.props.number}
                      onChange={this.props.handleNumber}
                    />
                </div>
            </div>)
        }
    }

  render() {
      let options = [
          {name: "I need an invite code", value:false},
          {name: "I have an invite code", value:true}
        ]
    return (

      <React.Fragment>
          <div className="flex-column flex-center" style={{minHeight: 'calc(100vh - 140px)'}}>
            <div className="masterclass-modal-content">
              <p className="masterclass-modal-text">The CLICKTOOL Master Class is accessible by invite only. Please contact a representative for more information
              <br/> <strong>(312) 576-2247</strong></p>
              <div className="masterclass-modal-buttons">
                  <OptionGroup
                      whole
                      masterclass
                       options={options}
                       focused={this.state.code}
                       onClick={(event) => this.setState({code: event})}
                   />

                {this.renderContent()}
              </div>
            </div>


        </div>
        <Modal masterclass portals
          modalOpen={this.state.errorModal}
          handleClose={() => this.setState({errorModal: false})}
          mcContent={
            <React.Fragment>
              <div className="masterclass-modal-content">
                <p className="masterclass'modal-header">Error</p>
                <p className="masterclass-modal-message">
                  The code you provided is incorrect. Please try again or contact a representative now.
                </p>
              </div>

              <div className="masterclass-modal-buttons">
                <Button whole mcSecond margin
                  content="Close"
                  disabled={!this.state.code1 || !this.state.code2 || !this.state.code3 || !this.state.code4}
                  onClick={() => this.setState({errorModal: false, code1: "", code2: "", code3: "", code4: ""})}/>
              </div>
            </React.Fragment>
          }
        />


      </React.Fragment>
    )
  }

}

export default McModal
