import React, { Component } from 'react'
import './home.css'
import Hero from './homeComponents/hero/Hero'
import Paths from './homeComponents/paths/Paths'
import Solution from './homeComponents/solution/Solution'
import Testimonial from './homeComponents/testimonial/Testimonial'
import Features from './homeComponents/features/Features'
import Bottom from './homeComponents/bottom/Bottom'

export default class Home extends Component {

    render() {
        return (
            <div className='home'>
                <Hero />
                <Paths />
                <Solution />
                <Testimonial />
                <Features />
                <Bottom />
            </div>
        )
    }
}
