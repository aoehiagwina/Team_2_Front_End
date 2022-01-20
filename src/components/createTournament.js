import { useState } from 'react';
import { addTournamentFetch} from "../utils/tournament";

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
                <label>Create your tournamnt!</label>
                <input onChange={(e) => setTournamentName(e.target.value)} placeholder="Name of your tournament"/>
                <input onChange={(e) => setGame(e.target.value)} placeholder="Game"/>
                <input type="datetime-local" onChange={(e) => setDate(e.target.value)}/>
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Add a description of your tournament"/>
                <input onChange={(e) => setTags(e.target.value.split(","))} placeholder="Separate your tags with a ,"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}