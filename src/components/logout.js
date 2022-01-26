import "../App.css";
import {Link} from 'react-router-dom'
import '../css_component/logout.css';

export const Logout = ({ user, setUser }) => {


    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("myToken");
        setUser();
      };
      return (
        <div className="around">
        <div className="notLogged">
        {!user ? (
          <p className="please">Please log in</p>
        ) : (
          <div className="logged">
          <span className="byeUser">{user.username} see you again ! </span>
          <div >
    
          <button onClick={logOut} className="btnLogout"><Link to="/" className="link">Log out</Link></button></div>
        </div>
        )}
        </div>
        </div>
      );
    };
