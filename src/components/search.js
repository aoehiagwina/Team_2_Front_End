import { useState } from 'react';
import {
	searchTournamentFetch,
	addPlayerFetch,
	removePlayerFetch,
} from '../utils/tournament';
import { List } from './list';
import '../css_component/search.css';

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
		<div className='form-signin'>
			<form id='searchForm' onSubmit={searchHandler}>
				<h2>Search</h2>
				<div className='radioContainer'>
					<label form='searchForm'>
						Name
						<input
							type='radio'
							id='tournamentName'
							name='searchKey'
							onClick={() => setSearchKey('tournamentName')}
						/>
					</label>
					<label form='searchForm'>
						Game
						<input
							type='radio'
							id='game'
							name='searchKey'
							onClick={() => setSearchKey('game')}
						/>
					</label>
					<label form='searchForm'>
						Tags
						<input
							type='radio'
							id='tags'
							name='searchKey'
							onClick={() => setSearchKey('tags')}
						/>
					</label>
				</div>
				<input
					type='text'
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
