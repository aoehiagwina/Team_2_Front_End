import "../App.css";
import {Link} from 'react-router-dom'

export const Logout = ({ user, setUser }) => {


    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("myToken");
        setUser();
      };
      return (
        <div>
        {!user ? (
          <p>Please log in</p>
        ) : (
          <div >
          <span >{user.username}Do you want to logout?</span>
          <div >
    
          <button  onClick={logOut}><Link to="/home" className="link">Log out</Link></button></div>
        </div>
        )}
        </div>
      );
    };
