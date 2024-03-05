import React from 'react';
import { PRODUCTS } from '../../products';
import { ProductItem } from './product-item/product-item';
import styles from './index.module.css';
import Navbar from "../navbar";

function Products () {
  return (
    <>
    <Navbar />
    <div class="container text-left">
  <div class="row">
  <div class="col border-end">
    <div className={styles.filterrSection} class="mt-5">
     <h3>
      Categories
     </h3>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Fruits
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Processed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   livestock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   Seafood
  </label>
</div>  
    </div> 
 
    <div class="col"><div className={styles.filterrSection}>
     <h3>
      Categories
     </h3>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Fruits
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Processed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   livestock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   Seafood
  </label>
</div>  
    </div> </div>
    <div class="col"><div className={styles.filterrSection}>
     <h3>
      Categories
     </h3>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Fruits
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Processed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   livestock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   Seafood
  </label>
</div>  
    </div> </div>
    <div class="col"><div className={styles.filterrSection}>
     <h3>
      Categories
     </h3>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Fruits
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Processed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   livestock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
   Seafood
  </label>
</div>  
    </div> </div>
  </div>

    <div class="col-10">
      <section className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1>AgroMart Shop</h1>
      </div>

      <div className={styles.products}>
        {PRODUCTS.map((products) => <ProductItem data={products} key={products.id}/>)}
      </div>
    </section>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Products;