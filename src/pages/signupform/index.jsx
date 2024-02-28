// import email_icon from '../assets/email.png';
// import Email_icon from '../assets/Email.png';
//import styles from "./index.module.css"
import React, {useState} from "react";
import styles from "./index.module.css";
import {FormControl,FormControlLabel,FormGroup} from "@mui/material";
import {Checkbox} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope,faKey,faLock} from '@fortawesome/free-solid-svg-icons';


function SignUpForm() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [Passwords, setRepeatPasswords] = useState('');

    const handleLogin = () => {
        // Handle the login logic here
    };

    

    return (
        <div className={styles.signUpForm}>

            <p>Sign up with:</p>
            {/* //Icons of social media handles// */}
        
           {/*  <div>
            </* FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            
            </div> */}
           
            <br></br>

            <p>or:</p>
             
             <div>
            <FontAwesomeIcon icon={faUser} size="2x" className="icons" />
            <input
                type="text"
                value={Name}
                onChange={event => setName(event.target.value)}
                className={styles.upInput1}
                placeholder=" Your full Name"
            /></div>
            
            <br />
            <div className={styles.fontIcon}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="icons" />
            <input
                type="text"
                value={Email}
                onChange={event => setEmail(event.target.value)}
                className={styles.upInput2} placeholder=" Enter your email"
            /> </div>
            
            <br />
            <div> 
            <FontAwesomeIcon icon={faLock} size="2x" className="icons"/>
            <input
                type="text"
                value={Password}
                onChange={event => setPassword(event.target.value)}
                className={styles.upInput3}
                placeholder="Set Password"
            /></div>
           
            <br></br>
             
             <div>
            <FontAwesomeIcon icon={faKey} size="2x" className="icons" />
            <input
                type="text"
                value={Passwords}
                onChange={event => setRepeatPasswords(event.target.value)}
                className={styles.upInput4}
                placeholder="Repeat Password"
            />
             </div>
            
            <div className={styles.formBox}>
            <div>
            <FormControl>
            <FormGroup>
            <FormControlLabel
                 value="Terms"
                 control={<Checkbox />}
                 label="I have agreed with all"
                 labelPlacement="I have agreed with all"
            />
             </FormGroup>
             </FormControl>  
            </div>   
            <div>
            <a href="!#">Terms of Services</a>  
            </div>

            </div>
            



            <br />
            <button onClick={handleLogin}
                className={`btn ${styles.btnup} `}
            >Register</button>
            <br></br>
            <p className="text-center">Already have an account? <span></span>
                <a href="#!">Log In</a></p>

        </div>
    );
}

export default SignUpForm;