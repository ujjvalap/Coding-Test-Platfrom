import React, { useState } from 'react';
import '../style/Auth.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirm password
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [collegeName, setCollegeName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User logged in:', { email, password });
    // You can add your login logic here
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('User registered:', { firstName, lastName, collegeName, email, password });
    // You can add your registration logic here
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="College Name"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password" // Added second password field for confirmation
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit" className="submit-button">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLogin ? 'No account?' : 'Already have an account?'}
        <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? ' Register' : ' Login'}
        </span>
      </p>
    </div>
  );
};

export default LoginRegister;
