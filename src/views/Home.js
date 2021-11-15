import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Team from '../components/sections/Team';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
    
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider bottomDivider imageFill className="illustration-section-02" />
      <br/><br/><br/>
      <Team imageFill className="illustration-section-03"/>
    </>
  );
}

// <Testimonial topDivider />
//<Cta split />
export default Home;