import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div>
      <div className="App">
        <div id="login-box" style={{ backgroundColor: 'black' }}>
          <div className="left">
            <h1 style={{color:" white"}}>Login</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <NavLink className="btn btn-outline-light md-5" id='names' aria-current="page" to="/">Login</NavLink>
          </div>
          <div className="right">
            <span className="loginwith"><br /></span>
            <button className="social-signin facebook">Log in with facebook</button>
            <button className="social-signin twitter">Log in with Twitter</button>
            <button className="social-signin google">Log in with Google+</button>
          </div>
          <div className="or">OR</div>
        </div>

      </div>
    </div>
  )
}

export default Login