import React from 'react';
import '../css_component/header.css';

import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<div className='header-wrapper'>
			<div className='Header_Title'>
				<h1>The Ultimate Challenge</h1>
			</div>


			<div className='Header_Navs'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/login'>Login</NavLink>
				<NavLink to='/logout'>Logout</NavLink>
				<NavLink to='/profile'>Profile</NavLink>
				<NavLink to='/search'>Search</NavLink>
			</div>
		</div>
	);
};