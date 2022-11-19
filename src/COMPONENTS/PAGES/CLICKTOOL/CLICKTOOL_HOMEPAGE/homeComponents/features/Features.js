import React from 'react'
import './features.css'

import CircleCoral from '../svg/linesCircles/CircleCoral'
import CircleGold from '../svg/linesCircles/CircleGold'
import CircleNavy from '../svg/linesCircles/CircleNavy'
import CircleWhite from '../svg/linesCircles/CircleWhite'

import MagnifyingGlass from '../svg/linesCircles/MagnifyingGlass'
import Hexagon from '../svg/linesCircles/Hexagon'
import Line1L from '../svg/linesCircles/Line1L'
import Line1R from '../svg/linesCircles/Line1R'

import onePlace from '../svg/linesCircles/onePlace.svg'
import Hexagon2 from '../svg/linesCircles/Hexagon2'
import Line2L from '../svg/linesCircles/Line2L'
import Line2R from '../svg/linesCircles/Line2R'


import nonRedirect from '../svg/linesCircles/nonredirect.svg'
import Square from '../svg/linesCircles/Square'
import Line3R from '../svg/linesCircles/Line3R'
import Line3L from '../svg/linesCircles/Line3L'

import rotatePages from '../svg/linesCircles/rotatePages.svg'
import Triangle from '../svg/linesCircles/Triangle'
import Line4L from '../svg/linesCircles/Line4L'
import Line4R from '../svg/linesCircles/Line4R'

import TrackPhoneCalls from './trackPhoneCalls/TrackPhoneCalls'
import Pentagon from '../svg/linesCircles/Pentagon'
import Line5R from '../svg/linesCircles/Line5R'
import Line5L from '../svg/linesCircles/Line5L'
import Line5D from '../svg/linesCircles/Line5D'

function Features() {
    return (
        <div className='home-features'>

            <div>
                <div>
                    <Hexagon />
                    <MagnifyingGlass />
                    <Line1L />
                    <Line1R />

                    <span id='home-svg-circle1u'><CircleGold /></span>
                    <span id='home-svg-circle1l'><CircleGold /></span>
                    <span id='home-svg-circle1d'><CircleGold /></span>
                </div>
                <div id='home-features-magnifyingglass'>
                    <h2>Easily identify your most profitable campaigns</h2>
                    <p>Turn unprofitable campaigns into profitable ones. Uncover the real value of your traffic. Easily identify where you should be spending your traffic.</p>
                </div>
            </div>

            <div>
                <div>
                    <Hexagon2 />
                    <img src={onePlace} id='home-svg-oneplace' alt='one place' />
                    <Line2L />
                    <Line2R />

                    <span id='home-svg-circle2l'><CircleCoral /></span>
                    <span id='home-svg-circle2r'><CircleCoral /></span>
                    <span id='home-svg-circle2d'><CircleCoral /></span>
                </div>
                <div id='home-features-oneplace'>
                    <h2>Everything in one place</h2>
                    <p>Track all of your sales in one single place. Link all of your traffic sources, web pages, and offers through one convenient and organized system.</p>
                </div>
            </div>

            <div>
                <div>
                    <Square />
                    <img src={nonRedirect} id='home-svg-nonredirect' alt='nonredirect' />
                    <Line3R />
                    <Line3L />

                    <span id='home-svg-circle3l'><CircleNavy /></span>
                    <span id='home-svg-circle3u'><CircleNavy /></span>
                    <span id='home-svg-circle3r'><CircleNavy /></span>
                </div>
                <div id='home-features-nonredirect'>
                    <h2>Cutting edge non-redirect tracking</h2>
                    <p>The only non-redirect tracking of its kind. You can now create campaigns that stay compliant with all the major traffic sources. The campaign link you use will rotate different landing pages without the need to change your url.</p>
                </div>
            </div>

            <div>
                <div>
                    <Triangle />
                    <img src={rotatePages} id='home-svg-rotatepages' alt='rotate pages' />
                    <Line4L />
                    <Line4R />

                    <span id='home-svg-circle4l'><CircleWhite /></span>
                    <span id='home-svg-circle4u'><CircleWhite /></span>
                    <span id='home-svg-circle4d'><CircleWhite /></span>
                </div>
                <div id='home-features-rotate'>
                    <h2>Rotate landing pages with precision</h2>
                    <p>With Clicktool, you can divide your traffic up in any way you want. Whether it's 90% to one landing page and 10% to another, or an even split between five different pages, distribute your traffic with ease. Through more precise traffic, you can monitor and optimize your campaigns with speed and efficiency.</p>
                </div>
            </div>

            <div>
                <div className="home-features-call-tracking">
                    <Pentagon />
                    <Line5R />
                    <Line5L />
                    <Line5D />
                    <span id='home-svg-circle5u'><CircleGold /></span>
                    <span id='home-svg-circle5l'><CircleGold /></span>
                    <span id='home-svg-circle5d'><CircleGold /></span>
                    <TrackPhoneCalls />

                </div>
                <div id='home-features-track'>
                    <h2>Track Phone Calls</h2>
                    <p>Easily integrate Clicktool's state-of-the-art Phone Tracking into any campaign. Clearly and effectively monitor your phone calls so you can perfect your lead generation funnels and ensure every call is a high quality lead.</p>
                </div>
            </div>


        </div>
    )
}

export default Features
