import React, { Component } from 'react'
import './dropdown.css'
import UpIcon from '../svg/CaretUp'
import DownIcon from '../svg/CaretDown'
import Favorite from '../svg/Favorite'
import Unfavorite from '../svg/Unfavorite'

// @params {String} value
// @params {Boolean} searchable
// @params {Boolean} disabled
// @params {Array} options
// @params {Function} selectOption
// @params {Function} onChange
// @params {Function} selectStar
// @params {Boolean} sorted
// @params {Boolean} star
// @params {Boolean} favorite
// @params {Object} style
// @params {Element} label
// @params {Boolean} displayLabel

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            placeholder: 'Please Select',
            options: [],
            filterResults: [],
            populatedSearch: null,
            open: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.value !== this.props.value) {
            this.setState({value: this.props.value})
        }
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) return
        else this.handleClickOutside()
    }

    handleClickOutside = (e) => {
        this.setState({open: false})
    }

    selectOption = (e) => {
        const value = e.currentTarget.dataset.value
        if(this.props.onChange) this.props.onChange(value)
        this.setState({value})
    }

    selectStar = (e) => {
        const value = e.currentTarget.dataset.value
        this.setState({star: value})
    }

    renderLabel() {
        // <label style={{position: 'relative', top: '-5px', left: '-10px'}}>{this.props.label || ''}</label>
        return (
            <label>{this.props.label || ''}</label>
        )
    }

    setPopulatedValue(e) {
        let val = e.target.value
        if(this.props.onChange) this.props.onChange(val)
        this.setState({populatedSearch: val}, () => {
            this.filterOptions({
                target: {
                    value: val
                }
            })
        })
    }

    filterOptions(e) {
		if(e.target.value.length > 0) {
			let sortedData = this.props.options.sort(this.compare);
			let newOptions = [];
			sortedData.forEach((option) => {
				if(option.name.toLowerCase().includes(e.target.value.toLowerCase())) {
					newOptions.push({...option})
				}
			})

			this.setState({
				renderFilterResults: true,
				filterResults: newOptions
			})
		} else {
			this.setState({
				renderFilterResults: false
			})
		}
    }

    compare(a, b) {
        let optA = a.name.toUpperCase();
        let optB = b.name.toUpperCase();
        let comparison = 0;
        if (optA > optB) {
            comparison = 1;
        } else if (optA < optB) {
            comparison = -1;
        }
        return comparison;
    }

    render() {
        let {
            value = this.state.value,
            searchable = false,
            disabled = false,
            options = this.state.options,
            selectOption = this.selectOption,
            selectStar = this.selectStar,
            sorted = false,
            star = false,
            favorite = false,
            style = {},
            className = ''
        } = this.props

        let sortedData = this.props.options
        if (sorted) sortedData = [...this.props.options].sort(this.compare)

        if (className === '') className = 'ui-dropdown'
        else className = className + ' ui-dropdown'

        return (
            <div
                className={className}
                style={style}
                ref={node => this.node = node}
                data-ctid={this.props['data-ctid'] || ''}
            >
                {this.props.label && this.renderLabel()}

                <div onClick={() => { if(!disabled) this.setState({open: true}) }} style={{cursor: 'pointer'}}>

                    {
                        (star || favorite) &&
                            <div className={this.state.open ? 'ui-dropdown-default-active' : 'ui-dropdown-default'}>
                                <div className='ui-dropdown-default-star flex-center'>
                                    {
                                        (options.find(el => el.value === value)) && (options.find(el => el.value === value).star)
                                            ? <Favorite color='var(--cyan0)' />
                                            : <Unfavorite />
                                    }
                                </div>
                                <div className='ui-dropdown-default-input'>
                                    {(options.find(el => el.value === value)) && (options.find(el => el.value === value).name || '')}

                                    <span className='ui-dropdown-caret-star'>
                                        {this.state.open ? <UpIcon /> : <DownIcon />}
                                    </span>
                                </div>
                            </div>
                    }


                    {
                        !(star || favorite) &&
                        <React.Fragment>
                            <input
                                value={
                                    (this.state.populatedSearch || this.state.populatedSearch === '')
                                    ? this.state.populatedSearch
                                    : (
                                        (options.find(el => el.value === value)) && (options.find(el => el.value === value).name || '')
                                    )
                                }
                                onChange={e => this.setPopulatedValue(e)}
                                style={searchable ? {} : {pointerEvents: 'none'}}
                                placeholder={this.state.placeholder}
                            />

                            <span className='ui-dropdown-caret'>
                                {this.state.open ? <UpIcon /> : <DownIcon />}
                            </span>
                        </React.Fragment>
                    }
                </div>

                <div
                    className='ui-dropdown-options'
                    style={this.state.open ? {} : {display: 'none'}}
                >
                        {/* filtered results */}
                        <div style={{display: (this.state.renderFilterResults) ? '' : 'none',}}>
                            {
                                this.state.filterResults.map((option, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={(star || favorite) ? 'ui-dropdown-option-star' : 'ui-dropdown-option'}
                                            data-value={option.value}
                                            onClick={(e) => {this.handleClickOutside(); selectOption(e)}}
                                        >
                                            {
                                                !(star || favorite)
                                                ? option.name
                                                : <React.Fragment>
                                                    <div
                                                        className='flex-center'
                                                        data-value={option.value}
                                                        onClick={
                                                            (e) => {
                                                                e.stopPropagation();
                                                                selectStar(e)
                                                                this.handleClickOutside()
                                                            }
                                                        }
                                                    >
                                                        {option.star ? <Favorite /> : <Unfavorite />}
                                                    </div>
                                                    <div>{option.name}</div>
                                                </React.Fragment>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* non-filtered */}
                        <div style={{display: (this.state.renderFilterResults) ? 'none' : '', border: 'none', padding: '0px'}}>
                            {
                                !this.props.options
                                    ? <div
                                        className='ui-dropdown-options'
                                        onClick={() => this.handleClickOutside()}
                                    >
                                        <div className='ui-dropdown-option'>
                                            No results found
                                        </div>
                                    </div>
                                    : sortedData.map((option, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={(star || favorite) ? 'ui-dropdown-option-star' : 'ui-dropdown-option'}
                                                data-value={option.value}
                                                data-ctid={`${this.props['data-ctid']}-${option.value}`}
                                                onClick={(e) => {this.handleClickOutside(); selectOption(e)}}
                                            >
                                                {
                                                    !(star || favorite)
                                                    ? option.name
                                                    : <React.Fragment>
                                                        <div
                                                            className='flex-center'
                                                            data-value={option.value}
                                                            onClick={
                                                                (e) => {
                                                                    e.stopPropagation();
                                                                    selectStar(e)
                                                                    this.handleClickOutside()
                                                                }
                                                            }
                                                        >
                                                            {option.star ? <Favorite /> : <Unfavorite />}
                                                        </div>
                                                        <div>{option.name}</div>
                                                    </React.Fragment>
                                                }
                                            </div>

                                        )
                                    })
                            }
                        </div>
                </div>
            </div>
        )
    }
}
