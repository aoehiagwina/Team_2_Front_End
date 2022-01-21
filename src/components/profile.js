import { Link } from "react-router-dom";
import { useState, useEffect} from 'react';
import { deleteTournamentFetch, removePlayerFetch, searchTournamentFetch} from "../utils/tournament";
import { List } from './list';

export const Profile = ({user}) => {
    const [created, setCreated] = useState();
    const [joined, setJoined] = useState();

    useEffect(() => {
        if (user) {
            createdHandler();
            joinedHandler();
        };
    }, []);

    const createdHandler = async () => {
        await searchTournamentFetch("creator", user._id, setCreated);
    };

    const joinedHandler = async () => {
        await searchTournamentFetch("players", user._id, setJoined);
    };

    const deleteHandler = async (tournamentName) => {
        // let storedList = [...created];
        // storedList.splice(index, 1);
        // setCreated(storedList);
        await deleteTournamentFetch(tournamentName, user._id);
        createdHandler();
    };

    const leaveHandler = async (tournamentName) => {
        // let storedList = [...created];
        // storedList.splice(index, 1);
        // setJoined(storedList);
        await removePlayerFetch(tournamentName, user._id);
        joinedHandler();
    };

    return (
        <div>
            {!user ? (
                <div>
                    <h2>Please log in</h2>
                </div>
            ) : (
                <div>
                    <h2>{user.username}'s Profile</h2>
                    <div>
                        <h2>Your tournaments</h2>
                        {created && created.length > 0 && <List items={created} buttonName={"Delete"} handler={deleteHandler}/>}
                    </div>
                    <div>
                        <h2>Joined tournaments</h2>
                        {joined && joined.length > 0 && <List items={joined} buttonName={"Leave"} handler={leaveHandler}/>}
                    </div>
                    <p>{<Link to="/createTournament">Create a new tournament</Link>}</p>
                    <p>{<Link to="/search">Search for a tournament</Link>}</p>
                </div>
            )}
        </div>
    );
}