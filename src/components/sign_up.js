import React from "react";

import './sign_up.css'

export const SignUp = ({signingHandler, set_username, set_email, set_password}) => {
    return(
        <div>
            <h1>Register now below</h1>
            <br/>
            <form className="Reg_Form" onSubmit={signingHandler}>
                <input
                onChange={(e) => set_username(e.target.value)}
                placeholder="Username"
                />
                <input
                onChange={(e) => set_email(e.target.value)}
                placeholder="Email"
                />
                <input
                onChange={(e) => set_password(e.target.value)}
                placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};