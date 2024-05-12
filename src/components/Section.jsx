import React from 'react';
import Button from './Button';
import './Section.css';
import '../App.css';
import { LuMusic2 } from "react-icons/lu";
import { MdWork } from "react-icons/md";

function Section() {
    return (
        <div className='hero-container'>
            <img src="/images/img-1.jpg" alt="Client Photo" className="client-photo" />
            <img src="/images/section6.webp" alt="Section Image" class="hero-image" />
            {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
            <div className='TextTopContainer'> 
                <p className='TextTop'>Your text here</p>
            </div>
            <div className='TitleContainer'>
            <div className='TitleLeftContainer'>
                <h1 className='TitleLeft'>Leverum (Karrierevejledning)</h1>
                <div className='hero-btns'>
                    <Button className='btns' 
                    buttonStyle='btn--noderum'
                    buttonSize='btn--large'
                    link='/leverum' >
                        <span style={{ marginRight: '3px' }}>Leverum</span> <MdWork />
                    </Button>
                </div>
            </div>
            <p className='Slogan'>Til dig der har brug for at spille på andre strenge i dit liv</p>
            <div className='TitleRightContainer'>
                <h1 className='TitleRight'>Noderum (Musikundervisning)</h1>
                <div className='hero-btns'>
                    <Button className='btns' 
                    buttonStyle='btn--noderum'
                    buttonSize='btn--large'
                    link='/noderum' >
                        <span style={{ marginRight: '3px' }}>Noderum</span> <MdWork />
                    </Button>
                </div>
            </div>
        </div>
            
            
            
        </div>
    );
}

export default Section;