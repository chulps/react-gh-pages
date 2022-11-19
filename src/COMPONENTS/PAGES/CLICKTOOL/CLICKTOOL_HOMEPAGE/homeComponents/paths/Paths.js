import React from 'react'
import './paths.css'
import { Link } from 'react-router-dom'
import Button from '../../ui/button/Button'
import ClicktoolMarkAnimated from '../../ui/svg/ClicktoolMarkAnimated'
import MasterclassIconAnimated from '../svg/MasterclassIconAnimated'
import AgencyIconAnimated from '../svg/AgencyIconAnimated'

class Paths extends React.Component {

    scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <React.Fragment>
                <div style={{textAlign: "center"}}>
                    <h2>Our Three Paths to Marketing Success</h2>
                </div>

                <div className='home-paths one-column lg-three-columns'>
                    <div>
                        <ClicktoolMarkAnimated />
                        <h3>Do It Yourself</h3>
                        <p>Create an account and use our software to track and optimize campaigns on your own. If you get stuck, we offer live help to get your questions answered and your campaigns rolling.</p>
                        <Link to='/signup' onClick={this.scrollToTop}>
                            <Button large content='Create a Free Account' data-ctid='button-create-a-free-account'/>
                        </Link>
                    </div>
                    <div>
                        <MasterclassIconAnimated />
                        <h3>Learn From The Masters</h3>
                        <p>Enroll in the Clicktool Masterclass to join our growing community of student marketers with access to 200+ videos of premium content and one-on-one live mentorship.</p>
                        <Link to="/academy">
                            <Button 
                                large 
                                content='Enroll in the Master Class' 
                                data-ctid='button-enroll-in-the-masterclass' 
                                onClick={() => {
                                    this.scrollToTop();
                                }}
                            />
                        </Link>
                    </div>
                    <div>
                        <AgencyIconAnimated />
                        <h3>Hire Us!</h3>
                        <p>Whether it’s a killer ad campaign, custom software solution, or dazzling landing page, we can do it all for you! Hire our team of extremely talented individuals to make anything possible.</p>
                        <Link to='/agency' onClick={this.scrollToTop}>
                            <Button large content='Get a Proposal' data-ctid='button-get-a-proposal' />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Paths
