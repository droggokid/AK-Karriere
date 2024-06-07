import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className='intro-section'>
      <div className='intro-text'>
        <h1>Udforsk nye perspektiver. Åbn nye muligheder.</h1>
        <p>Til dig der har brug for at spille på andre strenge i dit liv</p>
      </div>
      <div className='intro-image'>
        <img src='/images/logo1.webp' alt='Client Discussing Strategy' />
      </div>
    </div>
  );
}

export default IntroSection;
