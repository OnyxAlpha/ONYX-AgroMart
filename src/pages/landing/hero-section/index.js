import React from 'react'
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import vegetables from '../../../assets/crops/vegetables/veges.png'
import berries from '../../../assets/crops/fruits/berries.png'
import mackerel from '../../../assets/processed/canned.png'
import bellpepper from '../../../assets/crops/vegetables/bellpepper.png'
import beef from '../../../assets/livestock/beef.png'
import spices from '../../../assets/crops/spices/spices.png'
import herossss from '../../../assets/Herossssss.png'


export const HeroSection = () => {
  return (
    <>


  <div className={styles.herosection} >
    <div >
    <div className={styles.text_div}>
           <h4>The best digital market</h4>
            <h2> For Agro Products.</h2>
            <p>Buy, sell and discover quality goods and amazing prizes.</p>
             
           <div className={styles.corouselBtn}>
           <button className={styles.button}> <Link className={styles.link} to='/products'> Sell Now</Link> <i class="fa-solid fa-cart-shopping"></i></button>
            <button className={styles.button}> <Link className={styles.link} to='/products'> Shop Now</Link> <i class="fa-solid fa-cart-shopping"></i></button>
           </div>
           </div>

    </div>
    <div>
  
 <img className={styles.heroBg} src={herossss} alt="..." />

    </div>
  </div>

<div  className={styles.center} >
    
  <div class="container text-center">
  <div class="row">
    <div class="col">
    <section >
           <div className={styles.text_div}>
           <h4>Trade-in-offer</h4>
            <h2>Great value deals</h2>
            <h1>On all Our Products</h1>
            <p>Save more with coupons and get up to 80% discount!</p>
            <button className={styles.button}> <Link className={styles.link} to='/products'> Shop Now</Link> <i class="fa-solid fa-cart-shopping"></i></button>
           </div>

    
        </section>

    </div>
    <div class="col">
 
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img className={styles.carouselIMG} src={berries}  alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img className={styles.carouselIMG} src={spices}  alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img className={styles.carouselIMG} src={beef}  alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img className={styles.carouselIMG} src={mackerel}  alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img className={styles.carouselIMG} src={bellpepper}  alt="..." />
    </div>
  </div>
</div>
    </div>
  </div>
</div>
      
  </div> 
       
    </>
  )
}
