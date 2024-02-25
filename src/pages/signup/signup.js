// import email_icon from '../assets/email.png';
// import password_icon from '../assets/password.png';
import "./signup.css"

const Signup =()=>{
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    {/* <img src={} alt="" /> */}
                    <input type="text" placeholder="Name"/>
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    {/* <img src={} alt="" /> */}
                    <input type="email" placeholder="Email"/>
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    {/* <img src={} alt="" /> */}
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

              <div className="inputs">
                <div className="input">
                    {/* { <img src={} alt="" />}  */}
                    <input type=" confirm password" placeholder="confirm password"/>
                </div>
            </div>


            {/* <div className="inputs">
                <div className="input">
                <select ></select>
                <option></option>
                    
                </div>
            </div> */}
             <div className="submit">Sign Up</div> 
        </div>
    )
}

export default Signup;