import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import {
	deleteTournamentFetch,
	removePlayerFetch,
	searchTournamentFetch,
} from '../utils/tournament';
import { List } from './list';
import '../css_component/profile.css';

export const Profile = ({ user }) => {
	const [created, setCreated] = useState();
	const [joined, setJoined] = useState();

	const createdHandler = useCallback(() => {
		if (user) {
			searchTournamentFetch('creator', user._id, setCreated);
		}
	}, [user]);

	const joinedHandler = useCallback(() => {
		if (user) {
			searchTournamentFetch('players', user._id, setJoined);
		}
	}, [user]);

	useEffect(() => {
		const fetchHandler = async () => {
			await createdHandler();
			await joinedHandler();
		};
		fetchHandler();
	}, [createdHandler, joinedHandler]);

	const deleteHandler = async (tournamentName) => {
		await deleteTournamentFetch(tournamentName, user._id);
		await createdHandler();
	};

	const leaveHandler = async (tournamentName) => {
		await removePlayerFetch(tournamentName, user._id);
		await joinedHandler();
	};

	return (
		<div>
			{!user ? (
				<div className='around'>
					<h2 className='please2'>Please log in</h2>
					<button className='btnLogout'><Link className='link' to="/login">Login</Link></button>
				</div>
			) : (
				<div className='form-signin'>
					<h2>{user.username}'s Profile</h2>
					<div >
						<h2>Your tournaments</h2>
						{created && created.length > 0 && (
							<List
								items={created}
								buttonName={'Delete'}
								handler={deleteHandler}
							/>
						)}
					</div>
					<div>
						<h2>Joined tournaments</h2>
						{joined && joined.length > 0 && (
							<List
								items={joined}
								buttonName={'Leave'}
								handler={leaveHandler}
							/>
						)}
					</div>
					<p>{<button><Link to='/createTournament' className='link'>Create a new tournament</Link></button>}</p>
				</div>
			)}
		</div>
	);
};
