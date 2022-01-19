import { Link } from 'react-router-dom';
import './login.css';

import './sign_up';

export const Login = ({returning_user, user_email, login_Handler, set_Username, set_Password}) => {
    return(
        <div>
            <h4>Log in to compete for the ultimate gammers title</h4>
            <br/>
            <form onSubmit={login_Handler}>
                <input
                onChange={(e) => set_Username(e.target.value)}
                placeholder="Enter Username"
                />
                <input
                onChange={(e) => set_Password(e.target.value)}
                placeholder="Enter password"
                />
                <button type="submit">Login</button>
            </form>
            <br/>
            <h5>Or {<Link to='/sign_up'>Sign Up </Link>}to begin your challenge</h5>
        </div>
    );
}