import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import {
	deleteTournamentFetch,
	removePlayerFetch,
	searchTournamentFetch,
} from '../utils/tournament';
import { List } from './list';

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
		<div className='profile-page'>
			{!user ? (
				<div>
					<h2>Please log in</h2>
				</div>
			) : (
				<div>
					<h2>{user.username}'s Profile</h2>
					<div>
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
					<p>{<Link to='/createTournament'>Create a new tournament</Link>}</p>
				</div>
			)}
		</div>
	);
};
