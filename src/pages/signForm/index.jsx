import React, { useState } from 'react';
import styles from '../signForm/index.module.css';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import {Checkbox} from '@mui/material';


function SignForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle the login logic here
    };

    

    return (
        <div className={styles.signForm}>

            <div>
                <button onClick={handleLogin}
                    className={`btn ${styles.btn2} `}
                >Log In</button> <span ></span>
                <button onClick={handleLogin}
                    className={`btn ${styles.btn2} `}
                >Register</button>
            </div>
            <br></br>
            <p>Sign in with:</p>
            {/* //Icons of social media handles// */}

            <br></br>

            <p>or:</p>


            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={styles.signInput1}
                placeholder=" Username or Email"
            />
            <br />

            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.signInput2} placeholder=" Password"
            /> <br />
            <div className={styles.formCheck}>
            <div>
            <FormControl>
            <FormGroup>
            <FormControlLabel
                 value="Remember me"
                 control={<Checkbox />}
                 label="Remember me"
                 labelPlacement="Remember me"
            />
             </FormGroup>
             </FormControl>  
            </div>
             
             <div>
             <a href="!#">Forgot password?</a>
             </div>
            
            </div>
           
            
           
                 {/* {//I had a challenge of aligning the checkbox content left//} */}

            <br />
            <button onClick={handleLogin}
                className={`btn ${styles.btn} `}
            >Sign In</button>
            <br></br>
            <p className="text-center">Not a member? <span></span>
                <a href="#!">Register</a></p>

        </div>
    );
}

export default SignForm;