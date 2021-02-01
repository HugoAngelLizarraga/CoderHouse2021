import React  from 'react';
import './Login.css';
import { Link  } from 'react-router-dom';
 
function Login() {
 
    return (
        <div className="login">
            <Link>
                <img className="login__logo"
                    src=" "
                    alt='' />
            </Link>
            <div className="login__container">
                <h1>Sing In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input   type="email" />
                    <h5>Password</h5>
                    <input   type="password" />
                    <button   type="submit" clasName="login__signInbutton">Sign In</button>
                </form>
                <p> </p>
                <button  className="login__registerButton">Create una cuenta</button>
            </div>
        </div>
    )

}
export default Login;