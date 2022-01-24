import { useState } from "react/cjs/react.development"

export const Item = ({ user, item, buttonName, handler }) => {
    const [details, setDetails] = useState(false);
    let detailsButton = "Details"
    if (!details) {
        detailsButton = "Details";
    } else {
        detailsButton = "Hide";
    };

    if (buttonName === "Search" && item.players.includes(user._id)) {
        buttonName = "Leave";
    } else if (buttonName === "Search" && !item.players.includes(user._id)) {
        buttonName = "Join";
    };

    return (
        <li className={buttonName}>
            <p>{item.tournamentName} | {item.game}</p>
            {buttonName !== "" && <button onClick={handler}>{buttonName}</button>}
            <button onClick={() => {setDetails(!details)}}>{detailsButton}</button>
            {details && <ul>
                <li>Date: {item.date}</li>
                {/* <li>Owner: {item.creator}</li> */}
                <li>Description: {item.description}</li>
                <li>Number of competitors: {item.players.length}</li>
                <li>Tags: {item.tags.join()}</li>
            </ul>}
        </li>
    )
    
};