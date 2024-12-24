import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [loginType, setLoginType] = useState(null);

  const handleLoginClick = (type) => {
    setLoginType(type);
  };

  return (
    <div className="login-page">
      {!loginType ? (
        <div className="login-choice">
          <h2>Welcome to IPL Ticket Booking</h2>
          <p>Choose your login type:</p>
          <div className="login-buttons">
            <button className="choice-button" onClick={() => handleLoginClick('user')}>
              User Login
            </button>
            <button className="choice-button" onClick={() => handleLoginClick('admin')}>
              Admin Login
            </button>
          </div>
        </div>
      ) : (
        <div className={`login-form ${loginType}-form`}>
          {/* Stylish Back Icon (Bent Arrow) */}
          <span className="back-icon" onClick={() => setLoginType(null)}>
            &#x21A9; {/* Bent left arrow (↩) */}
          </span>
          <h2>{loginType === 'user' ? 'User Login' : 'Admin Login'}</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
          </form>

          {loginType === 'user' && (
            <p className="register-link">
              Don't have an account? <a href="/register">Register</a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
