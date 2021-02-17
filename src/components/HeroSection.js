import React from 'react'
import {Button} from './Button'
import giffy from '../images/img-home.jpg'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <img src={giffy} alt="loading..."></img>
            {/* <video src="Video01" alt="loading..."></video> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize = 'btn--large'>GET STARTED</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize = 'btn--large'>WATCH TRAILER<i className="fas fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection
