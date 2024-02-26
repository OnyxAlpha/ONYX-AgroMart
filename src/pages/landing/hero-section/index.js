import React from 'react'
import styles from './index.module.css';
import canned from '../../../assets/canned-hero.png'
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <>

    <section className={styles.carousel}>
       <div>
        <p>Text lorem50</p>
       </div>
    <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={canned} class="w-100" alt="..."/>
      <div className={styles.carousel_caption} class="carousel-caption d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={canned} class="w-100" alt="..." />
      <div  className={styles.carousel_caption} class="carousel-caption d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={canned} class="w-100" alt="..." />
      <div  className={styles.carousel_caption} class="carousel-caption d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>

       <section className={styles.center}>
           <div className={styles.text_div}>
           <h4>Trade-in-offer</h4>
            <h2>Great value deals</h2>
            <h1>On all Our Products</h1>
            <p>Save more with coupons and get up to 80% discount!</p>
            <button className={styles.button}> <Link className={styles.link} to='/products'> Shop Now</Link> <i class="fa-solid fa-cart-shopping"></i></button>
           </div>

        </section>

       
    </>
  )
}
