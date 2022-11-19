import React, { Component } from 'react'
import './subnav.css'
import CaretUp from '../svg/CaretUp.js'
import CaretDown from '../svg/CaretDown.js'
// @param {Array} links
// @param {Number} subnavTabIndicator
// @param {Boolean} isLoading

class SubNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            navLinks: props.links,
            collapsed: true,
            subnavTabIndicator:  0,
            initialPosition: 0,
            itemPosition: 0
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleResize)
        window.addEventListener("beforeunload", this.handleOnUnload)
        let temp = localStorage.getItem('subnavindex')
        if (temp) {
            temp = parseInt(temp, 10)
        }
        else {
            temp = 0
        }
        switch (window.location.pathname.split("/")[2]) {
            case "tracker":
                this.setState({
                    initialPosition: 20.5,
                    subnavTabIndicator: temp
                })
            break
            case "settings":
                this.setState({
                    initialPosition: 29,
                    subnavTabIndicator: temp
                })
                break
            default:
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.links !== this.props.links){
            switch (window.location.pathname.split("/")[2]) {
                case "tracker":
                    if(window.location.pathname.split("/")[3] === 'onboarding') {
                        this.setState({
                            initialPosition: 11
                        })
                    } else {
                        this.setState({
                            initialPosition: 20.5
                        })
                    }

                break
                case "settings":
                    this.setState({
                        initialPosition: 29
                    })
                    break
                default:
            }
            let temp = localStorage.getItem('subnavindex')
            if(temp){
                this.setState({
                    navLinks: this.props.links,
                    subnavTabIndicator: temp
                }, ()=>{
                    localStorage.removeItem('subnavindex')
                })
            }
            else {
                this.setState({
                    navLinks: this.props.links,
                    subnavTabIndicator: this.props.subnavTabIndicator || 0
                })
            }

        }

        if(prevState.subnavTabIndicator !== this.state.subnavTabIndicator){
            let item = document.getElementById(`link${this.state.subnavTabIndicator}`)

            if(item){
                let spacing = 0
                for (let i = 0; i < this.state.subnavTabIndicator; i++) {
                    let additionalItem = document.getElementById(`link${i}`)
                    spacing = spacing + additionalItem.clientWidth
                }
                this.setState({
                    itemPosition: parseFloat(spacing) + ((parseFloat(item.clientWidth) - 50) / 2) - parseFloat(this.state.initialPosition)
                })
            }
        }

        if(prevProps.subnavTabIndicator !== this.props.subnavTabIndicator) {
            this.setState({
                subnavTabIndicator: this.props.subnavTabIndicator
            })
        }

    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize)
        window.removeEventListener("beforeunload", this.handleOnUnload)

    }
    handleOnUnload = (e) => {
        let index = this.state.subnavTabIndicator.toString()
        localStorage.setItem("subnavindex", index)
    }

    handleResize = () => {
        if(document.documentElement.clientWidth >= 768){
            this.setState({
                initialPosition: parseFloat(((document.getElementById(`link${0}`).clientWidth) - 50) / 2 )
            }, ()=>{
                let item = document.getElementById(`link${this.state.subnavTabIndicator}`)
                if(item){
                    let spacing = 0
                    for (let i = 0; i < this.state.subnavTabIndicator; i++) {
                        let additionalItem = document.getElementById(`link${i}`)
                        spacing = spacing + additionalItem.clientWidth
                    }
                    this.setState({
                        itemPosition: parseFloat(spacing) + ((parseFloat(item.clientWidth) - 50) / 2) - parseFloat(this.state.initialPosition)
                    })
                }
            })
        }
    }

    getClassName() {
        const {
            className = "",
            disabled = false
        } = this.props
        let classNames = [className]
        if (disabled) classNames.push("disabled")

        return classNames.join(" ")
    }

    render() {
        return (
            <div className={
                `${(this.props.scrollY > this.props.prevScrollY) && (this.props.scrollY > 49) ?'subNavShrink':"subNavShow"} subnav flex-center ${this.getClassName()}`
            }
                style={
                    (this.state.collapsed === true)
                    ? {maxHeight: '40px', transition: 'all 0.3s'}
                    : {maxHeight: '100vh', transition: 'all 0.3s'}
                }>
                {/* nav links start  */}
                <div className="subnav-links flex-center flex-column md-hidden" style={{flexGrow: '1'}}>
                    {
                        this.state.navLinks.map((link, index) => {
                            let camelCase = link.title.replace(" ", "")
                            return(
                                <div
                                    data-ctid={`subNav${camelCase}Mobile`}
                                    key={index}
                                    onClick={()=>{
                                        link.onClick()
                                        this.setState({
                                            subnavTabIndicator:index,
                                            collapsed:!this.state.collapsed
                                        })
                                    }}
                                    className={
                                        (this.state.collapsed)
                                            ? 'mobileSubNavCollapsed'
                                            : 'mobileSubNavExpanded'
                                        }>
                                    <div style={{position:"relative", lineHeight: '40px'}}>
                                        {link.title}
                                        {
                                            (index === this.state.subnavTabIndicator)
                                            ?   <div
                                                    style={{marginLeft: '10px'}}
                                                    className="mobileSubNavExpanded-subnav-mobile-button flex-center md-hidden">
                                                    <CaretUp/>
                                                </div>
                                            : ''
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        (this.state.collapsed && this.state.navLinks.length > 0)
                        ?   <div
                                data-ctid='subNavCaretDown'
                                onClick={() => this.setState({collapsed:!this.state.collapsed})}
                                className="mobileSubNavCollapsedSelected">
                                <div style={{position:"relative", lineHeight: '40px'}}>{this.state.navLinks[this.state.subnavTabIndicator].title}
                                    <div
                                        style={{marginLeft: '10px'}}
                                        className="mobileSubNavExpanded-subnav-mobile-button flex-center md-hidden">
                                        <CaretDown />
                                    </div>
                                </div>

                            </div>
                        :   ""
                    }
                </div>

                {/* desktop links start  */}
                <div className="subnav-links flex-center hidden md-flex">
                    {this.state.navLinks.map((link, index) => {
                        let camelCase = link.title.replace(" ", "")
                        return (
                            <div
                                data-ctid={`subNav${camelCase}Desktop`}
                                id={`link${index}`}
                                key={index}
                                onClick={() => {
                                    if(!this.props.isLoading) {
                                        link.onClick()
                                        this.setState({
                                            subnavTabIndicator: index
                                        })
                                    }
                                }}>
                                {link.title}
                            </div>
                        )
                    })}
                    <div
                        className="subnavTabIndicator"
                        style={{left:`${this.state.initialPosition}px`, transform:`translateX(${this.state.itemPosition}px)`}}>
                    </div>
                </div>
            </div>
        )
    }
}
export default SubNav
