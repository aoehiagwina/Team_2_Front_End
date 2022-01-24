import "../App.css";
import React, { useState, useEffect } from "react";
import { signUpFetch, tokenCheck , logInFetch} from "../utils";
import '../css_component/login.css';

import '../css_component/sign_up.css';

export const Login =({user, setUser}) =>{
    //const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logBool, setLogBool] = useState(true);


    // useEffect(() => {
    //   tokenCheck(setUser);
    // }, []);
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (email) {
          signUpFetch(username, email, password, setUser);
        } else {
          logInFetch(username, password, setUser);
        }
      };

      return(
        <div className="Login">
          
        {!user ? (
          <div >
             <div>Join us today</div>
            <form onSubmit={submitHandler}>
              <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              {logBool && (
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" type="email"
                />
              )}
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" type="password"
              />
              <button  type="submit"><span>Register</span></button>
            </form>
            <button  onClick={() => setLogBool(!logBool)}><span>
                {logBool ? "Do you want to log in?" : "Do you want to sign up?"}
              </span></button>
             
          </div>) : (<div >
                    <h2  >Welcome {user.username}</h2>
                
                    </div>
                  )}
                </div>
                
              )}
    
    export default Login;



//   return(
//         <div>
//             <h4>Log in to compete for the ultimate gammers title</h4>
//             <br/>
//             <form onSubmit={login_Handler}>
//                 <input
//                 onChange={(e) => set_Username(e.target.value)}
//                 placeholder="Enter Username"
//                 />
//                 <input
//                 onChange={(e) => set_Password(e.target.value)}
//                 placeholder="Enter password"
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             <br/>
//             <h5>Or {<Link to='/sign_up'>Sign Up </Link>}to begin your challenge</h5>
//         </div>
//     );
// }