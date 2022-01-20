export const addTournamentFetch = async (tournamentName, game, date, creator, description, tags) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}tournament`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tournamentName,
                game,
                date,
                creator,
                description,
                tags,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const searchTournamentFetch = async (searchKey, searchValue) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}tournament/${searchKey}/${searchValue}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const addPlayerFetch = async (tournamentName, user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}tournament/add`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tournamentName: tournamentName,
                user: user
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removePlayerFetch = async (tournamentName, user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}tournament/remove`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tournamentName: tournamentName,
                user: user
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTournamentFetch = async (tournamentName, creator) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}tournament/remove`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tournamentName: tournamentName,
                creator: creator
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};