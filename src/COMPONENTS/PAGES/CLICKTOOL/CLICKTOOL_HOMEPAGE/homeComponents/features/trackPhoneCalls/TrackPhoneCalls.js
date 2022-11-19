import React from 'react'
import './trackPhoneCalls.css'
import AddCallIcon from './components/AddCallIcon'
import ContactsIcon from './components/ContactsIcon'
import FacetimeIcon from './components/FacetimeIcon'
import MicIcon from './components/MicIcon'
import NumberPadIcon from './components/NumberPadIcon'
import SpeakerIcon from './components/SpeakerIcon'
import BeginCallIcon from './components/BeginCallIcon'
import EndCallIcon from './components/EndCallIcon'
import CallerIcon from './components/CallerIcon'
import TrackingChart1 from './components/TrackingChart1'
import TrackingChart2 from './components/TrackingChart2'
import TrackingChart3 from './components/TrackingChart3'
import TrackingChart4 from './components/TrackingChart4'
import TrackingChart5 from './components/TrackingChart5'
import ClicktoolMarkAnimated from '../../../../CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoMark';

export default function TrackPhoneCalls() {
    return (
      <div className="track-phone-calls-animation">

        {/* charts, graphs, etc */}
        <div className="charts flex-center">
          <div className="paper">Tracking Report</div>
          <div className="clicktool-mark"><ClicktoolMarkAnimated /></div>
          <div className="chart1"><TrackingChart1 /></div>
          <div className="chart2"><TrackingChart2 /></div>
          <div className="chart3"><TrackingChart3 /></div>
          <div className="chart4"><TrackingChart4 /></div>
          <div className="chart5"><TrackingChart5 /></div>
        </div>

        {/* phone */}
        <div className="phone flex-center-x">
          <div className="camera1"></div>
          <div className="camera2"></div>
          <div className="speaker"></div>
          
          {/* phone screen and it's contents */}
          <div className="screen">
            <div className="screen-content">
              
              {/* scrolling part */}
              <div className="scrolling">

                {/* "navbar" */}
                <div className="nav flex-end flex-center-y">
                  <div className="hamburger flex-column flex-space-between">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                {/* "scrolling content section" */}
                <div className="content">

                  {/* top of scrolling section */}
                  <div className="headline"></div>

                  <div className="subheadline"></div>

                  <div className="flex-row flex-space-between" style={{background: 'var(--white)'}}>
                    <div className="square"></div>
                    <div className="square-text flex-column flex-space-between">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <div className="body-text">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                  <div className="ads">

                    {/* focused ad */}
                    <div className="ad focused-ad">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                        <div className="call-us">Call Us!</div>
                        <div className="phone-number">1-800-555-5555</div>
                        <div className="call-button flex-center"><BeginCallIcon /></div>
                      </div>
                    </div>

                    {/* all other ads */}
                    <div className="ad flex-row">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                       <div className="ad-text-block"></div>
                       <div className="ad-text-block"></div>
                      </div>
                    </div>

                    <div className="ad flex-row">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                       <div className="ad-text-block"></div>
                       <div className="ad-text-block"></div>
                      </div>
                    </div>

                    <div className="ad flex-row">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                       <div className="ad-text-block"></div>
                       <div className="ad-text-block"></div>
                      </div>
                    </div>

                    <div className="ad flex-row">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                       <div className="ad-text-block"></div>
                       <div className="ad-text-block"></div>
                      </div>
                    </div>
                   
                    <div className="ad flex-row">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                       <div className="ad-text-block"></div>
                       <div className="ad-text-block"></div>
                      </div>
                    </div>

                    <div className="ad flex-row">
                      <div className="ad-circle"></div>
                      <div className="flex-column">
                       <div className="ad-text-block"></div>
                       <div className="ad-text-block"></div>
                      </div>
                    </div>

                  </div>


                </div>

              </div>

              {/* this is the calling part */}
              <div className="calling flex-column flex-center-y">
                
                {/* top section of the "calling" animation */}
                <div className="flex-center-x">
                  <div className="contact-name">Calling...</div>
                  <div className="contact-profile-pic"><CallerIcon /></div>
                </div>
                
                {/* middle section of the "calling" animation */}
                <div className="call-options three-columns">
                  <div><MicIcon /></div>
                  <div><NumberPadIcon /></div>
                  <div><SpeakerIcon /></div>
                  <div><AddCallIcon /></div>
                  <div><FacetimeIcon /></div>
                  <div><ContactsIcon /></div>
                </div>

                {/* end call button in the "calling" animation */}
                <div className="end-call flex-center"><EndCallIcon /></div>
              </div>
            </div>
          </div>
          <div className="mic"></div>
        </div>
      </div>
    )
}