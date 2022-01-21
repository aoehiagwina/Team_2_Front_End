import { Item } from './item';

export const List = ( {user, items, buttonName, handler} ) => {
    return (
        <ul>
            {items.map((item, index) => (
                <Item key={index} user={user} item={item} buttonName={buttonName} handler={() => handler(item.tournamentName, index)}/>
            ))}
        </ul>
    )
}