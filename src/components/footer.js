import React from 'react';
import '../css_component/footer.css';

export const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer-content-box'>
				<div className='footer-content'>
					<img
						className='footer-img'
						src={require('./images/logo_white.png')}
						alt='ultimate challenge small logo'></img>
				</div>

				<div className='footer-content'>
					<a
						href='http://ultimatechallenge.netlify.app'
						className='footer-link'>
						The Ultimate Challenge
					</a>
					<br />
					<a
						href='http://ultimatechallenge.netlify.app'
						className='footer-link'>
						Where the best of gamers compete for the world
					</a>
				</div>
			</div>
		</div>
	);
};
