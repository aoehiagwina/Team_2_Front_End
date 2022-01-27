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
          <div>
          <p className="please">Please log in</p>
          <button className='btnLogout'><Link className='link' to="/login">Login</Link></button>
          </div>
        ) : (
          <div className="logged">
          <div className="byeUser">{user.username} see you again ! </div>
          <div >
          <div className="right">
          <button onClick={logOut} className="btnLogout" ><Link to="/" className="link"><span class="mas">Log out</span></Link></button></div></div>
        </div>
        )}
        </div>
        </div>
      );
    };
