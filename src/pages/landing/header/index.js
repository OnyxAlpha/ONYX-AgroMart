import styles from "./index.module.css"
import logo from "../../../images/AgroMartLogo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={styles.topItems}>

                <div className={styles.logo}>
                    <img className={styles.appLogo} src={logo} alt="logo"/>
                </div>

                <div className={styles.navLinks}>
                    <ul>
                        <li><a>Home</a></li>
                        <li><Link to="../about">About Us</Link></li>
                        <li><a>Our Products</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>

                <div className={styles.signUp}>
                    <button><a>Sign Up</a></button>
                    <button><a>Sign In</a></button>
                </div>
            </div>
        </header>

    );
}

export default Header;