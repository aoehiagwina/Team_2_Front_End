import React, { useState, useEffect } from 'react';
import { Header } from './components/header';
import { SignUp } from './components/sign_up';
// import {SignIn} from './components/signin';
import { Login } from './components/login';
import { Home } from './components/home';
// import { About } from './components/about';
import { Logout } from './components/logout';
import { Profile } from './components/profile';
import { CreateTournament } from './components/createTournament';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { signUpFetch } from './utils/index';
import { readUserFetch } from './utils/index';
import { updateUserFetch } from './utils/index';
import { tokenCheck } from './utils';

const App = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		tokenCheck(setUser);
	}, []);

	return (
		<Router className='App'>
			<div className='site-wrapper'>
				<Header className='heading' />
				<main className='main-wrapper'>
					{/* <HeroBanner /> */}
					<Routes>
						<Route
							exact
							path='/sign_up'
							element={<SignUp user={user} setUser={setUser} />}></Route>
						<Route exact path='/' element={<Home />} />
						<Route
							path='/login'
							element={<Login user={user} setUser={setUser} />}
						/>
						<Route
							path='/logout'
							element={<Logout user={user} setUser={setUser} />}
						/>
						<Route path='/profile' element={<Profile user={user} />} />
						<Route
							path='/createTournament'
							element={<CreateTournament user={user} />}
						/>
						<Route path='/search' element={<Search user={user} />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
