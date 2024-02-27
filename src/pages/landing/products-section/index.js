import React from "react";
import styles from "./index.module.css";
import pic from "../../../assets/canned-hero.png";
import apple from "../../../assets/crops/fruits/apples.png";
import cinnamon from "../../../assets/crops/spices/cinnamon.png";
import carrots from "../../../assets/crops/vegetables/carrots.png"

export const ProductsSection = () => {
  return (
    <>
     <section className={styles.products}>
      <h2>Featured Products</h2>
      <p>Our Popular Collection</p>
      <div className={styles.pro_container}>
        <div className={styles.pro}>
          <img width="150" src={apple} alt="" />
          <div className={styles.des}>
            <span>Product Name</span>
            <h5>Description</h5>
            <div className={styles.star_price_cart}>
              <div className={styles.star}>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>GHc $0.00</h4>
              </div>
              <button className={styles.button}> Buy Now</button>
              <a href="#" className={styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.pro}>
          <img width="150" src={cinnamon} alt="" />
          <div className={styles.des}>
            <span>Product Name</span>
            <h5>Description</h5>
            <div className={styles.star_price_cart}>
              <div className={styles.star}>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>GHc $0.00</h4>
              </div>
              <button className={styles.button}> Buy Now</button>
              <a href="#" className={styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.pro}>
          <img width="150" src={carrots} alt="" />
          <div className={styles.des}>
            <span>Product Name</span>
            <h5>Description</h5>
            <div className={styles.star_price_cart}>
              <div className={styles.star}>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>GHc $0.00</h4>
              </div>
              <button className={styles.button}> Buy Now</button>
              <a href="#" className={styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.pro}>
          <img width="150" src={pic} alt="" />
          <div className={styles.des}>
            <span>Product Name</span>
            <h5>Description</h5>
            <div className={styles.star_price_cart}>
              <div className={styles.star}>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>GHc $0.00</h4>
              </div>
              <button className={styles.button}> Buy Now</button>
              <a href="#" className={styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        {/* below Styling for main products page  */}
        {/* 
                <div className={styles.pro}>
                    <img width="150" src={pic} alt="" />
                    <div className={styles.des}>
                        <span>Product Name</span>
                        <h5>Description</h5>
                      <div className={styles.star_price_cart}>
                            <div className={styles.star}>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <h4>GHc $0.00</h4>
                          
                            </div>
                            <div className={styles.buttons}>
                            <i class="fa-solid fa-plus"></i>
                            <div >
                              <p className={styles.quantity}>0</p>
                            </div>
                        <i class="fa-solid fa-minus"></i>
                          </div>
                            <a href="#" className={styles.cart}>  <i className="fa-solid fa-cart-shopping"></i></a>
                            <div>
                            </div>     
                      </div>
                    </div> 
                </div>*/}
      </div>
    </section>
    </>
   
  );
};
