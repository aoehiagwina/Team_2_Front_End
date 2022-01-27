import { Item } from './item';
import '../css_component/list.css';

export const List = ( {user, items, buttonName, handler} ) => {
    return (
        <ul className="tournamentContainer">
            {items.map((item, index) => (
                <Item key={index} user={user} item={item} buttonName={buttonName} handler={() => handler(item.tournamentName, index)}/>
            ))}
        </ul>
    )
}