import React, { useState } from "react";
import styles from './index.module.css';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';

function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle the login logic here
    };

    return (
        <>
            <div className={styles.signForm}>
                <div className={styles.formContainer}>
                <div>
                    <button onClick={handleLogin}
                        className={styles.btn2}
                    >Log In</button> <span ></span>
                    <button onClick={handleLogin}
                        className={styles.btn2}
                    >Register</button>
                </div>
                <br></br>
                <p>Sign in with:</p>
                <div className={styles.signipIcons}>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>

                    </div>

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
                    className={styles.btn}
                >Sign In</button>
                    
                </div>
                
            </div>
        </>
    )
}

export default SignIn;
