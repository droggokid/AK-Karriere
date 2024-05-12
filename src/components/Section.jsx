import React from 'react';
import Button from './Button';
import './Section.css';
import '../App.css';
import { LuMusic2 } from "react-icons/lu";
import { MdWork } from "react-icons/md";

function Section() {
    return (
        <div className='hero-container'>
            {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
            <div className='TitleContainer'>
                <div className='TitleLeftContainer'>
                    <h1 className='TitleLeft'>Leverum (Karrierevejledning)</h1>
                    <div className='hero-btns'>
                        <Button className='btns' 
                        buttonStyle='btn--noderum' 
                        buttonSize='btn--large'>
                            <span style={{ marginRight: '3px' }}>Leverum</span> <MdWork />
                        </Button>
                    </div>
                </div>
                <div className='TitleRightContainer'>
                    <h1 className='TitleRight'>Noderum (Musikundervisning)</h1>
                    <div className='hero-btns'>
                        <Button className='btns' 
                        buttonStyle='btn--noderum' 
                        buttonSize='btn--large'>
                            <span style={{ marginRight: '3px' }}>Noderum</span> <LuMusic2 />
                        </Button>
                    </div>
                </div>
            </div>
            <p className='Slogan'>Til dig der har brug for at spille på andre strenge i dit liv</p>
            
            
        </div>
    );
}

export default Section;