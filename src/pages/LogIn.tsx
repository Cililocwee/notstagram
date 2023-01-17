import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function LogIn() {
  return (
    <div className="login-page">
      <div className="login-splash">
        <img src="https://picsum.photos/300/500" />
      </div>

      <div className="login-container">
        <div className="login-box">
          <h1>Notstagram</h1>
          <input type="text" placeholder="Phone number or email" disabled />
          <input type="text" placeholder="Password" disabled />
          <Link to="/feed">
            <p>Log In</p>
          </Link>
          <p>----- or -----</p>
          <button>Log in with Facebook</button>
          <a href="#/">Forgot password?</a>
        </div>
        <div className="accountless">
          <p>
            Don't have an account? <a href="#/">Sign up!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
