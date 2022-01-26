import {useState} from 'react';
import '../css_component/list.css';
import ReactModal from 'react-modal';

export const Item = ({ user, item, buttonName, handler}) => {
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
        <li id="tournamentList" className={buttonName}>
            <h3>{item.tournamentName} | {item.game}</h3>
            {buttonName !== "" && <button onClick={handler}>{buttonName}</button>}
            <button onClick={() => {setDetails(!details)}}>{detailsButton}</button>
            <ReactModal isOpen={details} ariaHideApp={false} overlayClassName="content">
                <ul>
                    <li className="descriptionItem"><h2>{item.tournamentName}</h2></li>
                    <li className="descriptionItem"><b>Date:</b> {item.date}</li>
                    <li className="descriptionItem"><b>Description:</b> {item.description}</li>
                    <li className="descriptionItem"><b>Number of competitors:</b> {item.players.length}</li>
                    <li className="descriptionItem"><b>Tags:</b> {item.tags.join()}</li>
                </ul>
                <button onClick={() => {setDetails(!details)}}>Hide</button>
            </ReactModal>
            {details && <ul>
                <li>Date: {item.date}</li>
                <li><p>Description: {item.description}</p></li>
                <li>Number of competitors: {item.players.length}</li>
                <li><p>Tags: {item.tags.join()}</p></li>
            </ul>}
        </li>
    )
    
};