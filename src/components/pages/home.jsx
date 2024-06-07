import React from 'react';

import ServiceSection from '../ServiceSection';
import Cards from '../Cards';
import Footer from '../Footer';
import IntroSection from '../IntroSection';
import AboutSection from '../AboutSection';

function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ServiceSection />
      <Cards />
      <Footer />
    </>
  )
}

export default Home;