import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { signUpFetch, tokenCheck , logInFetch} from "../utils";

import '../css_component/sign_up.css'

//These are for the social handles icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGooglePlusG,
    faFacebook,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";

export const SignUp = ({user, setUser}) => {


    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logBool, setLogBool] = useState(true);
    const [signing_in, setSigning] = useState(true);


    const container = document.getElementById('container');

    const to_signup = () => {
        container.classList.add("right-panel-active");
    };

    const to_signin = () => {
        container.classList.remove("right-panel-active");
    };


    // useEffect(() => {
    //   tokenCheck(setUser);
    // }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!signing_in) {
            signUpFetch(username, email, password, setUser);
            setLogBool(!logBool)
        } else {
            logInFetch(username, password, setUser);
            setLogBool(!logBool)
        } 
    };


    return(
        <div>
            {!user ? (
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={submitHandler}>
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <Link to="https://www.facebook.com/" class="social">
                                <FontAwesomeIcon icon={faFacebook} size="2x"  className="fab fa-facebook-f"/>
                                {/* <i className="fab fa-facebook-f"/> */}
                            </Link>
                            <Link to="https://www.googleplusg.com/" class="social">
                                <FontAwesomeIcon icon={faGooglePlusG} size="2x" className="fab fa-google-plus-g"/>
                                {/* <i className="fab fa-google-plus-g"></i> */}
                            </Link>   
                            <Link to="https://www.linkedin.com/" class="social">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="fab fa-linkedin-in"/>
                                {/* <i className="fab fa-linkedin-in"></i> */}
                            </Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username" />

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" type="email"
                            />
                        <input type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit" onClick={()=> setSigning(!signing_in)}>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form onSubmit={submitHandler}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <Link to="https://www.facebook.com/" class="social">
                                <FontAwesomeIcon icon={faFacebook} size="2x"  className="fab fa-facebook-f"/>
                                {/* <i className="fab fa-facebook-f"/> */}
                            </Link>
                            <Link to="https://www.googleplusg.com/" class="social">
                                <FontAwesomeIcon icon={faGooglePlusG} size="2x" className="fab fa-google-plus-g"/>
                                {/* <i className="fab fa-google-plus-g"></i> */}
                            </Link> 
                            <Link to="https://www.linkedin.com/" class="social">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="fab fa-linkedin-in"/>
                                {/* <i className="fab fa-linkedin-in"></i> */}
                            </Link>
                        </div>
                        <span>or use your account</span>
                        <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"/>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" type="password" />
                        <Link to="">Forgot your password?</Link>
                        <Link to="">
                            <button type="submit" onClick={()=> setSigning(signing_in)}>Sign In</button>
                        </Link>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={to_signin} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={() => to_signup()} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>


            </div>): 
            (<div >
                <h2  >Welcome {user.username}</h2>
            </div>)}

        </div>
    );
};