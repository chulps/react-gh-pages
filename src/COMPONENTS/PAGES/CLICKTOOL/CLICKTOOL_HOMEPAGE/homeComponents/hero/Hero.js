import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
import LeftFront from '../svg/hero/CloudLeftFront'
import LeftBack from '../svg/hero/CloudLeftBack'
import LeftGear from '../svg/hero/CloudGearLeft'
import RightGear from '../svg/hero/CloudGearRight'
import RightBack from '../svg/hero/CloudRightBack'
import RightFront from '../svg/hero/CloudRightFront'
import FlyingClick from '../svg/hero/FlyingClick'
import Button from '../../ui/button/Button'


function Hero() {
    return (
        <div className='home-hero'>
            <div className='home-hero-background'>
                <div className='relative'>
                    <LeftBack />
                    <FlyingClick />
                    <LeftGear />
                    <LeftFront />
                </div>

                <div className='relative'>
                    <RightBack />
                    <RightGear />
                    <RightFront />
                </div>
            </div>

            <div className='home-hero-main'>
                <div className='home-hero-headline'>The All-In-One Platform for your Digital Marketing Needs</div>
                <div className='home-hero-subheadline'>Set Up An Account Today and Experience Our Vast Network of Services and Software for FREE!</div>
                <Link to='/signup'>
                    <Button 
                        cta 
                        whole 
                        large 
                        content="Start FREE no credit card required!" 
                        id='home-hero-button'    
                    />
                </Link>
            </div>
        </div>
    )
}

export default Hero
