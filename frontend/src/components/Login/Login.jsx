import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';
import { useAuth } from '../../AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Import login function from AuthContext

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post('http://localhost:8800/login', { email, password });
      if (response.status === 200) {
        alert('Login Successful!');
        const userId = response.data.userId;
        login(userId); // Update userId in AuthContext

        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid email or password!');
    }
  };

  return (
    <div className='loginpage'>
      <div className="log-in-form">
       <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
        <h3>Login now</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" className="box" id="email" name="email" placeholder="Enter Email" required />
          <input type="password" className="box" id="password" name="password" placeholder="Enter Password" required />
          <button type="submit" id="loginButton" className="login-button"> Login </button>
        </form>
        <hr />
        <p> Create an account? <Link to="/signup">Sign Up</Link> </p>
      </div>
    </div>
  );
};

export default Login;
