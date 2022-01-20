import { Link } from "react-router-dom";
import { useState, useEffect} from 'react';
import { searchTournamentFetch} from "../utils/tournament";

export const Profile = ({user}) => {
    const [created, setCreated] = useState();
    const [joined, setJoined] = useState();

    useEffect(() => {
        // createdHandler(setCreated);
        // joinedHandler(setJoined);
        console.log(user)
    }, []);

    const createdHandler = (setCreated) => {
        const list = searchTournamentFetch("creator", user._id);
        setCreated(list);
    };

    const joinedHandler = (setJoined) => {
        const list = searchTournamentFetch("players", user._id);
        setJoined(list);
    };

    return(
        <div>
            <h2>Welcome {user.username}</h2>
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