import React from 'react';
import styles from './index.module.css';
import logo from '../../../assets/AgroMartLogo.png'
import app from '../../../assets/pay/app.jpg';
import pay from '../../../assets/pay/pay.png';
import play from '../../../assets/pay/play.jpg';

export const FooterSection = () => {
  return (
    <>
      <footer className={styles.section}>
            <div className={styles.col}>
                <img className={styles.logo} src={logo} alt="" />
                <p><strong>Address:</strong> 6 Bono Lane, Tema, Greater Accra</p>
                <p><strong>Phone:</strong> +233 54 235 6778/ +233 20 323 7315</p>
                <p><strong>Hours:</strong> 10: 00 - 18:00, Mon - Sat</p>
                
                <div className={styles.follow}>
                    <h4>Follow Us</h4>
                    <div className={styles.icon}>
                        <i className="fab fa-facebook-f"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className={styles.col}>
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Contact Us</a>
            </div>
            <div className={styles.col}>
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>

            <div className={styles.install}>
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className={styles.row}>
                    <img src={app} alt="" />
                    <img src={play} alt="" />
                </div>
                <p>Secured Payment Gatways</p>
                <img src={pay} alt="" />
            </div>

            <div className={styles.copyright}>
                <p>© 2023, theMama Ecommerce</p>
            </div>
        </footer>
    </>
  )
}
