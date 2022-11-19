//  props

//  retrieveStartDate, retrieveEndDate -- use these to retrieve the Start and End dates i.e. retrieveStartDate={this.retrieveStartDate}
//  i.e. in PARENT,
//  retrieveStartDate = (startDate) => {
//      this.setState({
//          startDate: startDate
//      })
//  }



import "./dateRangePicker.css"
import moment from "moment"
import React, { Component } from "react"
import CaretLeft from './../svg/CaretLeft.js'
import CaretRight from './../svg/CaretRight.js'
import OptionGroup from './../optionGroup/OptionGroup.js'
import Input from './../input/Input.js'


class RangePicker extends Component {
    state = {
        dates: [],
        spacers: [],
        today: "",
        startDate: "",
        endDate: "",
        focusOn: "startDate",
        year: '',
        month: '',
        preset : "today"
    }

    componentDidMount() {
        let today = moment().format("M-D")
        let year = moment().year()
        let month = moment().month() + 1
        let inputDate = `${year}-${month}`
        let days = moment(inputDate, "YYYY-MM").daysInMonth()
        let arr = []
        let dayof1st = moment(inputDate, "YYYY-MM").day()
        let spacerArr = []

        for (let index = 1; index < days + 1; index++) {
            arr.push(`${this.state.month}-${index}`)
        }

        for (let index = 0; index < dayof1st; index++) {
            spacerArr.push(index)
        }
        this.setState({
            today: today,
            dates: arr,
            spacers: spacerArr,
            startDate: moment().format("DD MMM YYYY"),
            endDate: moment().format("DD MMM YYYY"),
            focusOn: "startDate",
            preset: this.state.preset,
            year: year,
            month: month
        }, () => {
            this.props.retrieveEndDate({
                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.month !== this.state.month) {
            let year = moment().year()
            let month = this.state.month
            let inputDate = `${year}-${month}`
            let days = moment(inputDate, "YYYY-MM").daysInMonth()
            let arr = []
            let dayof1st = moment(inputDate, "YYYY-MM").day()
            let spacerArr = []

            for (let index = 1; index < days + 1; index++) {
                arr.push(`${this.state.month}-${index}`)
            }

            for (let index = 0; index < dayof1st; index++) {
                spacerArr.push(index)
            }

            this.setState({
                dates: arr,
                spacers: spacerArr,
            });
        }
    }

    componentWillUnmount(){
        // localStorage.setItem('previousStartDate', this.state.startDate)
        // localStorage.setItem('previousEndDate', this.state.endDate)
        // localStorage.setItem('previousPreset', this.state.preset)
    }

    handleSetStateDate = () => {
        this.setState({
            focusOn: "startDate"
        })
    }

    handleSetEndDate = () => {
        this.setState({
            focusOn: "endDate"
        })
    }

    handleDatePicker = (date) => {
        let start = moment(this.state.startDate, "DD MMM YYYY").format("M-D")
        let end = moment(this.state.endDate, "DD MMM YYYY").format("M-D")
        let selectedDate = moment(`${this.state.year}-${this.state.month}-${parseInt(date.split("-")[1],10)}`, "YYYY-MM-DD").format("DD MMM YYYY")
        if (this.state.preset !== "custom"){
            this.setState({
                preset: "custom"
            })
        }
        if (this.state.focusOn === "startDate"
            && this.state.preset === "custom"
            &&
            (
                ((this.state.year === parseInt(this.state.endDate.split(" ")[2], 10))
                &&
                (
                    parseInt(date.split("-")[0], 10) < parseInt(end.split("-")[0], 10)
                    ||
                    (
                        parseInt(date.split("-")[0], 10) === parseInt(end.split("-")[0], 10)
                        &&
                        parseInt(date.split("-")[1], 10) < parseInt(end.split("-")[1], 10)
                    )
                ))

                || (this.state.year === parseInt(this.state.endDate.split(" ")[2], 10) - 1
                    && (
                        parseInt(date.split("-")[0], 10) > parseInt(end.split("-")[0], 10)
                        ||
                        (parseInt(date.split("-")[0], 10) === parseInt(end.split("-")[0], 10)
                        &&
                        parseInt(date.split("-")[1], 10) > parseInt(end.split("-")[1], 10))
                    )
                    && this.state.preset === "1Y"
                )
            )
            ) {
                this.setState({
                    startDate: selectedDate,
                    focusOn: "endDate"
                },()=>{
                    this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                })
        }
        else if (this.state.focusOn === "endDate"
            &&
            (parseInt(date.split("-")[0], 10) > parseInt(start.split("-")[0], 10)
            ||
            (parseInt(date.split("-")[0], 10) === parseInt(start.split("-")[0], 10)
            &&
            parseInt(date.split("-")[1], 10) > parseInt(start.split("-")[1], 10))
            || (this.state.year === parseInt(this.state.startDate.split(" ")[2], 10) + 1
                && (
                    parseInt(date.split("-")[0], 10) < parseInt(start.split("-")[0], 10)
                    ||
                    (parseInt(date.split("-")[0], 10) === parseInt(start.split("-")[0], 10)
                    &&
                    parseInt(date.split("-")[1], 10) < parseInt(start.split("-")[1], 10) - 1)
                )
                && this.state.preset === "1Y"
            ) )
            ) {
                this.setState({
                    endDate: selectedDate,
                    focusOn: "startDate"
                }, ()=>{
                    this.props.retrieveEndDate({
                        startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                        endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                    })
                })
            }
            else {
                this.setState({
                    startDate: selectedDate,
                    endDate: "",
                    focusOn: "endDate"
                }, () => {
                    this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                    this.props.retrieveEndDate({
                        startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                        endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                    })
                })
            }
    }

    displayMonth = () => {
        switch (this.state.month) {
            case 1:
                return "January"
            case 2:
                return "February"
            case 3:
                return "March"
            case 4:
                return "April"
            case 5:
                return "May"
            case 6:
                return "June"
            case 7:
                return "July"
            case 8:
                return "August"
            case 9:
                return "September"
            case 10:
                return "October"
            case 11:
                return "November"
            case 12:
                return "December"
            default:
                return "Month"
        }
    }

    handleLessMonth = () => {
        if(this.state.month > 1) {
            let newMonth = this.state.month - 1
            this.setState({
                month: newMonth
            })
        }
        else {
            let newMonth = 12
            let newYear = this.state.year - 1
            this.setState({
                month: newMonth,
                year: newYear
            })
        }
    }

    handleMoreMonth = () => {
        if(this.state.month < 12) {
            let newMonth = this.state.month + 1
            this.setState({
                month: newMonth
            })
        }
        else {
            let newMonth = 1
            let newYear = this.state.year + 1
            this.setState({
                month: newMonth,
                year: newYear
            })
        }
    }

    handleDateClick = (date, e) => {
        switch (e.target.firstChild.className) {
            case "selected-range-start":
                this.setState({
                    focusOn: 'startDate'
                })
                break
            case "selected-range-end":
                this.setState({
                    focusOn: 'endDate'
                })
                break
            default:
                this.handleDatePicker(date)
        }
    }

    handlePreset = () => {
        if(!this.state.endDate){
            this.setState({
                endDate: moment(this.state.startDate, "DD MMM YYYY").endOf('day').format("DD MMM YYYY")
            }, ()=>{
                switch (this.state.preset) {
                    case "today":
                        this.setState({
                            startDate: moment().startOf("day").format("DD MMM YYYY"),
                            endDate: moment().format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                        break;
                    case "yesterday":
                        this.setState({
                            startDate: moment().subtract(1, "days").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, () => {
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                        break;
                    case "7D":
                        if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                            this.setState({
                                startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(7, "days").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        else {
                            this.setState({
                                startDate: moment().subtract(7, "days").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        break;
                    case "14D":
                        if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                            this.setState({
                                startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(14, "days").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        else {
                            this.setState({
                                startDate: moment().subtract(14, "days").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY"))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }

                        break;
                    case "1M":
                        if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                            this.setState({
                                startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(1, "months").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        else {
                            this.setState({
                                startDate: moment().subtract(1, "months").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        break;
                    case "3M":
                        if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                            this.setState({
                                startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(3, "months").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        else {
                            this.setState({
                                startDate: moment().subtract(3, "months").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        break;
                    case "1Y":
                        if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                            this.setState({
                                startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(1, "years").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        else {
                            this.setState({
                                startDate: moment().subtract(1, "years").startOf("day").format("DD MMM YYYY"),
                                endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                                focusOn: "startDate",
                                month: moment().month() + 1,
                                year: moment().year()
                            }, ()=>{
                                this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                                this.props.retrieveEndDate({
                                    startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                    endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                                })
                            })
                        }
                        break;
                    case "custom":
                        this.setState({
                            startDate: moment().startOf("day").format("DD MMM YYYY"),
                            endDate: moment().format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                        break;
                    default:
                        this.setState({
                            startDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            endDate: moment().format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })

                }
            })
        }
        else {
            switch (this.state.preset) {
                case "today":
                    this.setState({
                        startDate: moment().startOf("day").format("DD MMM YYYY"),
                        endDate: moment().format("DD MMM YYYY"),
                        focusOn: "startDate",
                        month: moment().month() + 1,
                        year: moment().year()
                    }, ()=>{
                        this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                        this.props.retrieveEndDate({
                            startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                            endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                        })
                    })
                    break;
                case "yesterday":
                    this.setState({
                        startDate: moment().subtract(1, "days").startOf("day").format("DD MMM YYYY"),
                        endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                        focusOn: "startDate",
                        month: moment().month() + 1,
                        year: moment().year()
                    }, ()=>{
                        this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                        this.props.retrieveEndDate({
                            startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                            endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                        })
                    })
                    break;
                case "7D":
                    if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                        this.setState({
                            startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(7, "days").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    else {
                        this.setState({
                            startDate: moment().subtract(7, "days").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    break;
                case "14D":
                    if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                        this.setState({
                            startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(14, "days").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    else {
                        this.setState({
                            startDate: moment().subtract(14, "days").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }

                    break;
                case "1M":
                    if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                        this.setState({
                            startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(1, "months").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    else {
                        this.setState({
                            startDate: moment().subtract(1, "months").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    break;
                case "3M":
                    if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                        this.setState({
                            startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(3, "months").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    else {
                        this.setState({
                            startDate: moment().subtract(3, "months").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    break;
                case "1Y":
                    if (moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days') > 0){
                        this.setState({
                            startDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').add(1, "days").subtract(1, "years").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(moment().diff(moment(this.state.endDate, "DD MMM YYYY"), 'days'), 'days').endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    else {
                        this.setState({
                            startDate: moment().subtract(1, "years").startOf("day").format("DD MMM YYYY"),
                            endDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                            focusOn: "startDate",
                            month: moment().month() + 1,
                            year: moment().year()
                        }, ()=>{
                            this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                            this.props.retrieveEndDate({
                                startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                                endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                            })
                        })
                    }
                    break;
                case "custom":
                    this.setState({
                        startDate: moment().startOf("day").format("DD MMM YYYY"),
                        endDate: moment().format("DD MMM YYYY"),
                        focusOn: "startDate",
                        month: moment().month() + 1,
                        year: moment().year()
                    }, ()=>{
                        this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                        this.props.retrieveEndDate({
                            startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                            endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                        })
                    })
                    break;
                default:
                    this.setState({
                        startDate: moment().subtract(1, "days").endOf("day").format("DD MMM YYYY"),
                        endDate: moment().format("DD MMM YYYY"),
                        focusOn: "startDate",
                        month: moment().month() + 1,
                        year: moment().year()
                    }, ()=>{
                        this.props.retrieveStartDate(moment(this.state.startDate, "DD MMM YYYY").startOf('day'))
                        this.props.retrieveEndDate({
                            startDate: moment(this.state.startDate, "DD MMM YYYY").startOf('day'),
                            endDate: moment(this.state.endDate, "DD MMM YYYY").endOf("day")
                        })
                    })

            }
        }

    }

    render() {
        let start = moment(this.state.startDate, "DD MMM YYYY").format("M-D")
        let end = moment(this.state.endDate, "DD MMM YYYY").format("M-D")

        return (
            <div className="date-range-picker">
                <label style={{lineHeight:'30px', padding: '0', color: 'var(--cyan0)'}}>CALENDAR</label>

                {/* preset ranges */}
                <div className={(this.props.noControls) ? 'hidden' : null}>
                    <OptionGroup
                        flex
                        options={[
                            {name: "Today", value: "today"},
                            {name: "Yesterday", value: "yesterday"}
                        ]}
                        focused={this.state.preset}
                        onClick={(event) => {
                            this.setState({preset: event},()=>
                            this.handlePreset())
                        }}
                    />
                    <OptionGroup
                        flex
                        options={[
                            {name: "7D", value: "7D"},
                            {name: "14D", value: "14D"},
                            {name: "1M", value: "1M"},
                            {name: "3M", value: "3M"},
                            {name: "1Y", value: "1Y"},
                            {name: "Custom", value: "custom"} ]}
                        focused={this.state.preset}
                        onClick={(event) => {
                            if(this.state.preset !== event){
                                this.setState({preset: event},()=>
                                this.handlePreset())
                            }
                        }}
                    />
                    {/* input container */}
                    <div className="date-range-input-container flex-row">
                        <div
                            data-ctid="dateRangePickerStartDate"
                            className="date-range-input-group"
                            onClick={this.handleSetStateDate}>
                            <label>FROM</label>
                            <Input
                                className={
                                    (this.state.focusOn === "startDate")
                                        ? "focus"
                                        : ""
                                }
                                value={this.state.startDate}
                                readOnly
                            />
                        </div>
                        <div className="input-spacer flex-center-y"></div>
                        <div
                            data-ctid="dateRangePickerEndDate"
                            className="date-range-input-group"
                            onClick={this.handleSetEndDate}>
                            <label>TO</label>
                            <Input
                                readOnly
                                className={
                                    (this.state.focusOn === "endDate")
                                        ? "focus"
                                        : ""
                                }
                                value={this.state.endDate}
                            />
                        </div>
                    </div>
                </div>

                {/* calendar navigation */}
                <div className="date-range-navigation flex-space-between">
                    <div
                        data-ctid="dateRangePickerCaretLeft"
                        className="left flex-center"
                        onClick={this.handleLessMonth}>
                            <CaretLeft />
                    </div>
                    <div
                        data-ctid="dateRangePickerCaretRight"
                        className="right flex-center"
                        onClick={this.handleMoreMonth}>
                            <CaretRight />
                    </div>
                </div>

                {/* month */}
                <label className="month">{this.displayMonth()} {this.state.year}</label>

                {/* days of the week */}
                <div className="days flex-row flex-space-between">
                    <label>SUN</label>
                    <label>MON</label>
                    <label>TUE</label>
                    <label>WED</label>
                    <label>THU</label>
                    <label>FRI</label>
                    <label>SAT</label>
                </div>

                {/* calendar grid */}
                <div className="calendar-grid">
                    {this.state.spacers.map((spacer, i) => {
                        return <div key={i} style={{ backgroundColor: "" }}></div>
                    })}

                {this.state.dates.map((date, i) => {
                    if ((moment().year() < this.state.year) || ((moment().year() === this.state.year) &&
                        (parseInt(date.split("-")[0], 10) > parseInt(this.state.today.split("-")[0], 10) ||
                        (parseInt(date.split("-")[0], 10) === parseInt(this.state.today.split("-")[0], 10) &&
                        parseInt(date.split("-")[1], 10) > parseInt(this.state.today.split("-")[1], 10))))) {
                        return (
                            <div
                                key={i}
                                className="calendar-cell"
                                style={{cursor: "pointer"}}
                                onClick={(e) => this.handleDateClick(date, e)}>
                                {this.state.month ? date.split("-")[1] : ""}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div
                                data-ctid="dateRangePickerDateClick" 
                                key={i}
                                style={{cursor:"pointer", position:"relative"}}
                                onClick={ (e) => this.handleDateClick(date, e) }
                                className='calendar-cell'>

                                <div className={
                                        (start !== end && end !== "Invalid date" && date === start && this.state.year === parseInt(this.state.startDate.split(" ")[2], 10))
                                        ? "selected-range-start"
                                        : start && end &&
                                            (parseInt(date.split("-")[0], 10) > parseInt(start.split("-")[0], 10)
                                            ||
                                            (parseInt(date.split("-")[0], 10) === parseInt(start.split("-")[0], 10)
                                            &&
                                            parseInt(date.split("-")[1], 10) > parseInt(start.split("-")[1], 10))
                                            || (this.state.year === parseInt(this.state.startDate.split(" ")[2], 10) + 1
                                                && (
                                                    parseInt(date.split("-")[0], 10) < parseInt(start.split("-")[0], 10)
                                                    ||
                                                    (parseInt(date.split("-")[0], 10) === parseInt(start.split("-")[0], 10)
                                                    &&
                                                    parseInt(date.split("-")[1], 10) < parseInt(start.split("-")[1], 10) - 1)
                                                )
                                                && this.state.preset === "1Y"
                                            ) )

                                            &&

                                            (
                                                ((this.state.year === parseInt(this.state.endDate.split(" ")[2], 10))
                                                &&
                                                (
                                                    parseInt(date.split("-")[0], 10) < parseInt(end.split("-")[0], 10)
                                                    ||
                                                    (
                                                        parseInt(date.split("-")[0], 10) === parseInt(end.split("-")[0], 10)
                                                        &&
                                                        parseInt(date.split("-")[1], 10) < parseInt(end.split("-")[1], 10)
                                                    )
                                                ))

                                                || (this.state.year === parseInt(this.state.endDate.split(" ")[2], 10) - 1
                                                    && (
                                                        parseInt(date.split("-")[0], 10) > parseInt(end.split("-")[0], 10)
                                                        ||
                                                        (parseInt(date.split("-")[0], 10) === parseInt(end.split("-")[0], 10)
                                                        &&
                                                        parseInt(date.split("-")[1], 10) > parseInt(end.split("-")[1], 10))
                                                    )
                                                    && this.state.preset === "1Y"
                                                )
                                            )
                                                    ? "selected-range"
                                                    : start !== end && date === end && this.state.year === parseInt(this.state.endDate.split(" ")[2], 10)
                                                        ? "selected-range-end"
                                                        : "hidden"}>
                                    </div>

                                    <div style={{pointerEvents: "none"}} className={`${
                                        (date === start && this.state.year === parseInt(this.state.startDate.split(" ")[2], 10)) ||
                                        (date === end && this.state.year === parseInt(this.state.endDate.split(" ")[2], 10))
                                            ? "flex-center selected"
                                            : "flex-center"
                                    }`}>
                                        
                                        <div className="calendar-date" style={{pointerEvents: "none"}}>
                                            {this.state.month ? date.split("-")[1] : ""}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default RangePicker
