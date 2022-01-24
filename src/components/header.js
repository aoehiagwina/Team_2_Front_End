import React from 'react';
import '../css_component/header.css';

import { NavLink } from "react-router-dom"

export const Header = () => {

    return(
            <div className="Header_Navs">
                {/* <NavLink to='/home'>Home</NavLink> */}
                {/* <div>
                    
                    {/* <NavLink to='/sign_up'>Sign Up</NavLink> */}
                    {/* <NavLink to='/login'>Login</NavLink>
                </div> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
            </div>

    )
}