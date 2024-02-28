import Navbar from "../navbar";

function About (){
    return (
        <>
        <Navbar/>
            <p>Something</p>
        </>
    )
}

export default About;

/* 
    import styles from "./index.module.css"
import trolley from "../../images/about-images/trolley.png"
import apples from "../../images/about-images/apples.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTruck, faPhone } from '@fortawesome/free-solid-svg-icons';


function About() {
    return (
       <main>
        <section className={styles.firstSection}>
            <h1>About Us</h1>
        </section>

        <section className={styles.secondSection}>
            <div className={styles.sec2text}>
                <h1>Welcome to AgroMart</h1>
                <p>Here, we bridge the gap between buyers and sellers, enabling reach and access to a wide range of high quality agricultural products delivered directly at your doorstep.</p>

                <h1>Our Mission</h1>
                <p>Our mission is to offer users the access to agricultural products by providing sellers a platform to showcase their products and expand their market, whiles offering buyers the freshest produce online.</p>
            </div>
            <div><img src={trolley} className={styles.about_img} alt="a trolley" /></div>
        </section>

        <section className={styles.thirdSection}>
            <h1>Why Choose us</h1>

            <div className={styles.points}>          
               <div>
                   <FontAwesomeIcon icon={faStar} className={styles.icon}/>
                   <h5>QUALITY ASSURANCE</h5>
                   <p>Only the freshest and highest quality products.</p>
               </div>

               <div>
                   <FontAwesomeIcon icon={faTruck} className={styles.icon}/>
                   <h5>CONVENIENCE</h5>
                   <p>Shop from the comfort of your home and have it delivered to your doorstep.</p>
               </div>

               <div>
                   <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                   <h5>SUPPORT</h5>
                   <p>24/7 support from our dedicated customer support team ensuring seamless shopping experience.</p>
               </div>
            </div>
        </section>

        <section className={styles.fourthSection}>
            <div><img src={apples} alt="bunch of apples" /></div>
            
            <div className={styles.subscribeSection}>
                <h1>Subscribe To Our Newsletter</h1>
                <p>Get e-mail updates about our latest shops and special offers</p>
                
                <div className={styles.inputSection}>
                   <div><input type="email" id="email" name="email" placeholder="Enter your email"></input></div>
                   <div><button>Subscribe</button></div>
                </div>
            </div>

            <div><h1>x</h1></div>          
        </section>

        <section className={styles.contactUs}>

            <div className={styles.contactSection}>
                <div>
                    <h1>Get In Touch</h1>
                    <p>Interested in knowing more about us? Fill the form, we love to hear from you</p>
                    <p>+233 55 222 2222</p>
                    <p>info@agromart.com</p>
                    <p>9:00am - 6:00pm, Mon - Sat</p>
                </div>

                <div>
                    <form>
                       <input type="text" id="name" name="name" placeholder="Enter name" className={styles.nameEmail}/>
                       <input type="email" id="email" name="email" placeholder="Enter email" className={styles.nameEmail}/><br/>

                       <input type="text" id="subject" name="subject" placeholder="Enter subject" className={styles.subject}/><br/>
                       {/* <input type="text" id="msg" name="msg" placeholder="Message" /> */
        //                <textarea name="" id=""
        //                placeholder="Your Message"
        //                className={styles.message}></textarea>
        //             </form>
        //             <button className={styles.sendBtn}>SEND</button>
        //         </div>
        //     </div>

        // </section>

        // <section className={styles.location}>
        //     <h1>Location</h1>
        //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.474003742265!2d-0.15429542603023783!3d5.6443429327571355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b550b4b1287%3A0x5bfe4abfd88d302b!2sMEST%20Africa!5e0!3m2!1sen!2sgh!4v1708957868601!5m2!1sen!2sgh" width="400" height="350" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        // </section>
//         </main>
//     );
// }