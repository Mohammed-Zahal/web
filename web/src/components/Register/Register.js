import React from 'react';
import './Register.css';
import {NavLink} from 'react-router-dom'

function Register() {
  return (
    <div>
      <div className="App"id='app'>
        <div id="login-box" style={{backgroundColor:'black'}}>
          <div className="left"  >
            <h1 className='name' style={{color:'white'}}>Sign up</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password2" placeholder="Retype password" /> 
            <NavLink className="btn btn-outline-light" id='names' aria-current="page" to="/login">Sign Up</NavLink>

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

export default Register