// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { signUpFetch, tokenCheck , logInFetch} from "../utils";

// import '../css_component/sign_up.css'

// export const SignIn = ({user, setUser}) => {
//     const container = HTMLDivElement.id

//     const [username, setUsername] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [logBool, setLogBool] = useState(true);
//     const [sign_up, setSignUp ] = useState(true)


//     // useEffect(() => {
//     //   tokenCheck(setUser);
//     // }, []);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (email) {
//             signUpFetch(username, email, password, setUser);
//         } else {
//             logInFetch(username, password, setUser);
//         } };
// //signing in or up

//     const signupchoice = (e) => {
//         e.preventDefault();
//         setSignUp(sign_up);
//         container.classList.add("right-panel-active"); }

//     const signinchoice = (e) => {
//         e.preventDefault();
//         setSignUp(!sign_up);
//         container.classList.remove("right-panel-active"); }


//     // const signinchoice = ({signup, onClick}) => {
//     //     const change_id = (sign_up ? "overlay-to-right" : "overlay-to-right" )}



//     return(
//         <div className="container" id="container">
//             {/* {!user ? ( */}
// 	        <div class="form-container sign-in-container">
//                 <form action="#">
//                     <h1>Sign in</h1>
//                     <div class="social-container">
//                         <Link to="#" class="social"/><i class="fab fa-facebook-f"></i>
//                         <Link to="#" class="social"/><i class="fab fa-google-plus-g"></i>
//                         <Link to="#" class="social"/><i class="fab fa-linkedin-in"></i>
//                     </div>
//                     <span>or use your account</span>
//                     <input
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"/>
//                     <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password" type="password" />
//                     <a href="#">Forgot your password?</a>
//                     <button onClick={() =>  setLogBool(!logBool)
//                         }>Sign In</button>
//                 </form>
//             </div>
//             <div className="form-container sign-up-container">
//                 <form action="#" onSubmit={submitHandler}>
//                     <h1>Create Account</h1>
//                     <div class="social-container">
//                         <Link to="#" class="social"/><i className="fab fa-facebook-f"/>
//                         <Link to="#" class="social"/><i className="fab fa-google-plus-g"></i>
//                         <Link to="#" class="social"/><i class="fab fa-linkedin-in"></i>
//                     </div>
//                     <span>or use your email for registration</span>
//                     <input type="text" onChange={(e) => setUsername(e.target.value)}
//                             placeholder="Username" />

//                     {logBool && (
//                         <input
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="Email" type="email"
//                             />)}
//                     <input type="password" placeholder="Password" 
//                         onChange={(e) => setPassword(e.target.value)}/>
//                     <button type="submit" onClick={() =>  setLogBool(!logBool)}>Sign Up</button>
//                 </form>
// 	        </div>
// 	        <div className="overlay-container">
//                 <div className="overlay">
//                     <div className="overlay-panel overlay-right">
//                         <h1>Hello, Friend!</h1>
//                         <p>Enter your personal details and start journey with us</p>
//                         <button  className="ghost" id="signUp">Sign Up</button>
//                     </div>
//                     <div className="overlay-panel overlay-left">
//                         <h1>Welcome Back!</h1>
//                         <p>To keep connected with us please login with your personal info</p>
//                         <button  className="ghost" id="signIn">Sign In</button>
//                     </div>
// 		        </div>
// 	        </div>







//             {/* <h1>Register now below</h1>
//             <br/>
//             <form className="Reg_Form" onSubmit={signingHandler}>
//                 <input
//                 onChange={(e) => set_username(e.target.value)}
//                 placeholder="Username"
//                 />
//                 <input
//                 onChange={(e) => set_email(e.target.value)}
//                 placeholder="Email"
//                 />
//                 <input
//                 onChange={(e) => set_password(e.target.value)}
//                 placeholder="Password"
//                 />
//                 <button type="submit">Submit</button>
//             </form> */}

//         </div>
//     );
// };