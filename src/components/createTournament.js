import { useState } from 'react';
import { addTournamentFetch} from "../utils/tournament";
import '../css_component/profile.css';

export const CreateTournament = ({user}) => {
    const [tournamentName, setTournamentName] = useState();
    const [game, setGame] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [tags, setTags] = useState();

    const createTournamentHandler = (e) => {
        e.preventDefault();
        addTournamentFetch(tournamentName, game, date, user._id, description, tags);
    };
    
    return (
        <div>
            <form onSubmit={createTournamentHandler}>
                <label>Create your tournament!</label><br/>
                <input onChange={(e) => setTournamentName(e.target.value)} placeholder="Name of your tournament"/><br/>
                <input onChange={(e) => setGame(e.target.value)} placeholder="Game"/><br/>
                <input type="datetime-local" onChange={(e) => setDate(e.target.value)}/><br/>
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Add a description of your tournament"/><br/>
                <input onChange={(e) => setTags(e.target.value.split(","))} placeholder="Separate your tags with a ,"/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}