import React from 'react';
import { PRODUCTS } from '../../products';
import { ProductItem } from './product-item/product-item';
import styles from './index.module.css';
import Navbar from "../navbar";

function Products () {
  return (
    <>
    <Navbar />
    <section className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1>AgroMart Shop</h1>
      </div>

      <div className={styles.products}>
        {PRODUCTS.map((products) => <ProductItem data={products} index={products.id}/>)}
      </div>
    </section>
    </>
  )
}

export default Products;