import React from 'react'
import {HeroSection} from './hero-section/index';
import {ProductsSection} from './products-section/index'
import {FooterSection} from './footer-section/index';
import { ServiceSection } from './service-section';
import { NewsLetterSection } from './newsletter-section';
import Navbar from "../../pages/navbar";


function Landing () {
  return (
    <section>
        <Navbar/>
        <HeroSection />
        <ServiceSection />
        <ProductsSection />
        <NewsLetterSection />
        <FooterSection />
    </section>
  )
}
export default Landing;
