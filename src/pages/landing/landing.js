import React from 'react'
import {HeroSection} from './hero-section/index';
import {ProductsSection} from './products-section/index'
import {FooterSection} from './footer-section/index';


function Landing () {
  return (
    <section>
        <HeroSection />
        <ProductsSection />
        <FooterSection />
    </section>
  )
}
export default Landing;
