import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAlertMessage('Login Successful!');
        setTimeout(() => {
          setAlertMessage('');
          navigate('/'); 
        }, 2000);
      })
      .catch((error) => {
        setAlertMessage(`Error: ${error.message}`);
        setTimeout(() => setAlertMessage(''), 3000);
      });
  };

  return (
    <div>
      <nav className='loginnav'>
        <h1>My Account</h1>
       <div className="linklar2">
<li>
<Link to="/">Home</Link>
</li>
<li><Link to="/pages">Pages</Link></li>
  <li><Link to="/login" className='Login'>Login</Link></li>
       </div>
      </nav>
      <div className="logora">
      <div className='logindiv3'>
        <h2>Login</h2>
        <p>Please login using account detail bellow.</p>
        {alertMessage && (
          <div
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              backgroundColor: alertMessage === 'Login Successful!' ? '#4CAF50' : '#f44336',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              zIndex: 1000,
            }}
          >
            {alertMessage}
          </div>
        )}
        <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left' }}>
          <div className='logindiv'>
       
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='logininput'
              placeholder='Email Address'
            />
          </div>
          <div className='logindiv'>
     
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='logininput2'
              placeholder='Password'
            />
          </div>
          <div className="forget">
          <Link to="/forgot-password" className='forgot-password'>
            Forgot Password?
          </Link>
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <p className='pcha'>Don’t have an Account?Create account</p>
        </form>
      </div>
    </div>
      </div>
  );
};

export default Login;
