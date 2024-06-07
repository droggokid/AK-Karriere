import React from 'react';
import Button from './Button';
import './ServiceSection.css';
import '../App.css';
import { LuMusic2 } from "react-icons/lu";
import { MdWork } from "react-icons/md";

function ServiceSection() {
    return (
        <div className='service-container'>
            <img src="/images/section6.webp" alt="Section Image" className="service-image" />
            <div className='title-container'>
                <div className='title-left-container'>
                    <h1 className='title-left'>Leverum (Karrierevejledning)</h1>
                    <div className='service-btns'>
                        <Button className='btns' 
                        buttonStyle='btn--noderum'
                        buttonSize='btn--large'
                        link='/leverum'>
                            <span style={{ marginRight: '3px' }}>Leverum</span> <MdWork />
                        </Button>
                    </div>
                </div>
                <p className='slogan'>Til dig der har brug for at spille på andre strenge i dit liv</p>
                <div className='title-right-container'>
                    <h1 className='title-right'>Noderum (Musikundervisning)</h1>
                    <div className='service-btns'>
                        <Button className='btns' 
                        buttonStyle='btn--noderum'
                        buttonSize='btn--large'
                        link='/noderum'>
                            <span style={{ marginRight: '3px' }}>Noderum</span> <LuMusic2 />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;