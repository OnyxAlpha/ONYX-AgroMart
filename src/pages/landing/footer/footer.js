import React from "react";
import "./footer.css";



const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="footer-link">
                    <div className="footer-link-div">
                        <h4>Customer Services </h4>
                        <a href="/account setting">
                            <p>Account Setting</p>
                        </a>
                        <a href="/connect wallet">
                            <p>Connect Wallet</p>
                        </a>
                        <a href="/help center">
                            <p>Help Center </p>
                        </a>
                        <a href="/subscribtion">
                            <p>Subscribtion</p>
                        </a>
                    </div>
                    <div className="footer-link-div">
                        <h4>About Us </h4>
                        <a href="/contact">
                            <p>Contact Us</p>
                        </a>
                        <a href="/sign up">
                            <p>Sign Up</p>
                        </a>
                        <a href="/sign in">
                            <p>Sign In</p>
                        </a>
                        <a href="/blog">
                            <p>Blog</p>
                        </a>
                    </div>
                    <div className="footer-link-div">
                        <h4>About Us </h4>
                        <a href="contact">
                            <p>Contact Us</p>
                        </a>
                        <a href="contact">
                            <p>Contact Us</p>
                        </a>
                        <a href="contact">
                            <p>Contact Us</p>
                        </a>
                        <a href="contact">
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div>
                        <h4>Find Us On</h4>
                <div class="socialicon">
                    <a href="q"><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-google-plus"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>    
                    </div>
                </div>

                <hr></hr>

                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                           Copyright {new Date().getFullYear()} AgroMart. All rights reserved.
                        </p>
                        <div className="footer-below-link">
                            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                            <a href="/privacy"><div><p>Privacy</p></div></a>
                            <a href="/security"><div><p>Security</p></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer; 