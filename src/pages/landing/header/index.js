import styles from "./index.module.css"

function Header() {
    return (
        <header>
            <div className={styles.topItems}>
                <div className={styles.logo}><h1>X</h1></div>

                <div className={styles.navLinks}>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
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