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
				<NavLink className={'navLink'} to='/'>
					Home
				</NavLink>
				<NavLink className={'navLink'} to='/login'>
					Login
				</NavLink>
				<NavLink className={'navLink'} to='/logout'>
					Logout
				</NavLink>
				<NavLink className={'navLink'} to='/profile'>
					Profile
				</NavLink>
				<NavLink className={'navLink'} to='/search'>
					Search
				</NavLink>
			</div>
		</div>
	);
};
