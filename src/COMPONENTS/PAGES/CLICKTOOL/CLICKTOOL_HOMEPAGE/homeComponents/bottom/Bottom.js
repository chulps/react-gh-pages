import React from 'react' 
import './bottom.css'
import { Link } from 'react-router-dom'
import Button from '../../ui/button/Button'
import Ico from '../svg/ClicktoolIco'
import Logo from '../../ui/svg/ClicktoolMarkAnimated'
import City from '../../ui/svg/ClicktoolCity'

export default function Bottom() {
    return (
        <div className='home-bottom'>
            <div><Ico /></div>
            <div>
                <Link to='/signup' onClick={() => window.scrollTo(0, 0)}>
                    <Button cta large content="Sign Up Free" />
                </Link>
            </div>
            <div><Logo /></div>

            <div id='home-bottom-cityA'><City /></div>
            <div id='home-bottom-cityB'><City /></div>
        </div>
    )
}