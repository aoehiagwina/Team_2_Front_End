import { Link } from "react-router-dom";
import { useState, useEffect} from 'react';
import { searchTournamentFetch} from "../utils/tournament";

export const Profile = () => {
    const [created, setCreated] = useState();
    const [joined, setJoined] = useState();

    useEffect(() => {
        createdHandler(setCreated);
        joinedHandler(setJoined);
    }, []);

    const createdHandler = (user, setCreated) => {
        const list = searchTournamentFetch("creator", user);
        //setCreated(list);
    };

    const joinedHandler = (user, setJoined) => {
        const list = searchTournamentFetch("players", user);
        //setJoined(list);
    };

    return(
        <div>
            <div>
                <h2>Your tournaments</h2>
            </div>
            <div>
                <h2>Joined tournaments</h2>
            </div>
            <p>{<Link to="/createTournament">Create a new tournament</Link>}</p>
        </div>
    );
}