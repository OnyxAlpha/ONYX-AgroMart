/* Extension shortcut = rafc */
// import { Link } from 'react-router-dom';

import styles from "./index.module.css";
import React from 'react'

function Products() {
  return (
    <section className={styles.section}>
      <h3><span>Products</span></h3>

      <div className={styles.product_main}>
        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div className={styles.product_text_section}>
            <h4>Galactic Senate</h4>
            <p>Description</p>
            <p>GH&#8373; 500</p>
            <button className={styles.button}>Buy</button>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

        <div className={styles.product_card}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Galactic Senate</h4>
          </div>
        </div>

      </div>
    </section>
  )
}


/*  <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
    </div> */
export default Products;
