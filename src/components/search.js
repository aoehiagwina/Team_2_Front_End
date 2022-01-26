import { useState } from 'react';
import {
	searchTournamentFetch,
	addPlayerFetch,
	removePlayerFetch,
} from '../utils/tournament';
import { List } from './list';

export const Search = ({ user }) => {
	const [tournamentList, setTournamentList] = useState();
	const [searchKey, setSearchKey] = useState();
	const [searchValue, setSearchValue] = useState();

	const searchHandler = (e) => {
		e.preventDefault();
		searchTournamentFetch(searchKey, searchValue, setTournamentList);
	};

	const joinHandler = async (tournamentName, index) => {
		tournamentList[index].players.includes(user._id)
			? await removePlayerFetch(tournamentName, user._id)
			: await addPlayerFetch(tournamentName, user._id);
		searchTournamentFetch(searchKey, searchValue, setTournamentList);
	};

	return (
		<div className='search-page'>
			{user && <h2>{user.username}</h2>}
			<form id='searchForm' onSubmit={searchHandler}>
				<label>Search</label>
				<br />
				<input
					type='radio'
					id='tournamentName'
					name='searchKey'
					onClick={() => setSearchKey('tournamentName')}
				/>
				<label form='searchForm'>Tournament Name</label>
				<br />
				<input
					type='radio'
					id='game'
					name='searchKey'
					onClick={() => setSearchKey('game')}
				/>
				<label form='searchForm'>Game</label>
				<br />
				<input
					type='radio'
					id='tags'
					name='searchKey'
					onClick={() => setSearchKey('tags')}
				/>
				<label form='searchForm'>Tags</label>
				<br />
				<input
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder='Search value'
				/>
				<br />
				<button type='submit'>Submit</button>
			</form>
			<div>
				{!user ? (
					<div>
						{tournamentList && tournamentList.length > 0 && (
							<List
								user={user}
								items={tournamentList}
								buttonName={''}
								handler={joinHandler}
							/>
						)}
					</div>
				) : (
					<div>
						{tournamentList && tournamentList.length > 0 && (
							<List
								user={user}
								items={tournamentList}
								buttonName={'Search'}
								handler={joinHandler}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
