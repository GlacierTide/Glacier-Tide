import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To redirect after signup success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/signup', formData);

      if (response.status === 200) {
        alert('Signup successful!');
        navigate('/login'); // Redirect to login page on success
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className='signup-page'>
      <div className="sign-up-form">
        <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
        <h1>Sign up now</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="firstname" className="box" name="firstname" placeholder="Enter Firstname" value={formData.firstname} onChange={handleChange} required /> {/* First name input with validation and dynamic value */}
          <input type="text" id="lastname" className="box" name="lastname" placeholder="Enter Lastname" value={formData.lastname} onChange={handleChange} required /> {/* Last name input with validation and dynamic value */}
          <input type="email" id="email" className="box" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required /> {/* Email input with validation and dynamic value */}
          <input type="password" id="password" className="box" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required /> {/* Password input with validation and dynamic value */}
          <br />
          <input type="submit" value="Submit" id="submit" /> {/* Submit button to trigger form submission */}
        </form>
        {error && <p className="error">{error}</p>}
        <hr />
        <p>Have an existing account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;
