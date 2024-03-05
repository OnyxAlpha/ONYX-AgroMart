import React from 'react'
import styles from './index.module.css'
import f1 from '../../../assets/features/f1.png'
import f2 from '../../../assets/features/f2.png'
import f3 from '../../../assets/features/f3.png'
import f4 from '../../../assets/features/f4.png'
import f5 from '../../../assets/features/f5.png'
import f6 from '../../../assets/features/f6.png'


export const ServiceSection = () => {
  return (
    <>
    <section className={styles.section}>
        <div >
        <h2>Our Services</h2>
        </div>
       <div className={styles.services}>
       <div className={styles.fe_box}>
            <img src={f1} alt="" />
            <h6>Free Shipping</h6>
        </div>
        <div className={styles.fe_box}>
            <img src={f2} alt="" />
            <h6>Online Order</h6>
        </div>
        <div className={styles.fe_box}>
            <img src={f3} alt="" />
            <h6>Save Money</h6>
        </div>
        <div className={styles.fe_box}>
            <img src={f4} alt="" />
            <h6>Promotions</h6>
        </div>
        <div className={styles.fe_box}>
            <img src={f5} alt="" />
            <h6>Happily Sell</h6>
        </div>
        <div className={styles.fe_box}>
            <img src={f6} alt="" />
            <h6>24/7 Support</h6>
        </div>
       </div>

    </section>
    <div className={styles.border}></div>
    </>
  )
}
