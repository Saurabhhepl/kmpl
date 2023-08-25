// LoginComponent.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { Navigate } from 'react-router-dom'; // Import Redirect

const LoginComponent = ({ login, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  if (isAuthenticated) {
    // Redirect to the HomeComponent after successful login
    return <Navigate to="/home" />;
  }

  return (
    <div>
      {/* Login form */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginComponent);
