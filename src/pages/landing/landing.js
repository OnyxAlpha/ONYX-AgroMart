import React from 'react'
import {HeroSection} from './hero-section/index';
import {ProductsSection} from './products-section/index'
import {FooterSection} from './footer-section/index';
import { ServiceSection } from './service-section';
import { NewsLetterSection } from './newsletter-section';


function Landing () {
  return (
    <section>
        <HeroSection />
        <ServiceSection />
        <ProductsSection />
        <NewsLetterSection />
        <FooterSection />
    </section>
  )
}
export default Landing;
