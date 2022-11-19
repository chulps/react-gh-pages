import React from 'react'
import './solution.css'
import NoRedirect from '../svg/NoRedirect'
import DetailedAnalytics from '../svg/DetailedAnalytics'
import SSLDomain from '../svg/SSLDomain'
import TrafficData from '../svg/TrafficData'
import WebsiteBuilder from '../svg/WebsiteBuilder'

function Solution() {
    return (
        <div className='home-solution'>
            <span style={{color: 'var(--coral0)'}}>A Complete Solution:</span>

            <div className='home-solution-row xs-flex-column md-flex-row md-five-columns flex-center'>
                <div>
                    <NoRedirect />
                    <p>No Redirect Tracking</p>
                </div>

                <div>
                    <DetailedAnalytics />
                    <p>Detailed Analytics</p>
                </div>

                <div>
                    <SSLDomain />
                    <p>Included SSL Domain</p>
                </div>

                <div>
                    <TrafficData />
                    <p>In-Depth Traffic Data</p>
                </div>

                <div>
                    <WebsiteBuilder />
                    <p>Website Builder (Coming Soon)</p>
                </div>
            </div>

            <div className='home-solution-video'>
                <iframe 
                    title="video" 
                    src="https://www.youtube.com/embed/05VnJRHu29Q?enablejsapi=1" 
                    id="home-video-player" 
                    frameBorder="0" 
                    allowFullScreen 
                />
            </div>

        </div>
    )
}

export default Solution
