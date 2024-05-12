import React from 'react';
import Button from './Button';
import './Section.css';
import '../App.css';

function Section() {
    return (
        <div className='hero-container'>
            {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
            <h1 className='Title'>Leverum (Karrierevejledning) & Noderum (Musikundervisning)</h1>
            <p className='Slogan'>Til dig der har brug for at spille på andre strenge i dit liv</p>
            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Section;