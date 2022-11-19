import React from 'react'
import './testimonial.css'
import Forbes from '../svg/Forbes'
import Entrepreneur from '../svg/Entrepreneur'
import TNW from '../svg/TNW'
import John from '../svg/John.svg'
import Jetset from '../svg/Jetset'

function Testimonial() {
    return (
        <div className='home-testimonial'>
            <span style={{color: 'var(--coral0)'}}>As Seen On</span>

            <div className='flex-column md-flex-row md-flex-center'>
                <a href='https://www.forbes.com/sites/jiawertz/2018/10/23/how-effective-data-management-can-help-scale-e-commerce-growth/#6df1e2ed6e07' target="_blank" rel="noopener noreferrer"><Forbes /></a>
                <div className='home-testimonial-divider' />
                <Entrepreneur />
                <div className='home-testimonial-divider' />
                <a href='https://thenextweb.com/contributors/2018/11/26/how-to-perfect-your-digital-copywriting' target="_blank" rel="noopener noreferrer"><TNW /></a>
            </div>

            <div className='home-testimonial-row'>
                <div className='home-testimonial-row-user'>
                    <img src={John} alt='John Crestani' />
                    <p>- John Crestani</p>
                    <Jetset />
                </div>

                <div className='home-testimonial-row-quote'>
                    <span>
                        "Clicktool is the best click tracking software out there and it's what we use for my in-house media buying team. What I like most about Clicktool is that there are no redirects, all parameters are passed automatically, and it has a very simple, user-friendly UI."
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Testimonial
