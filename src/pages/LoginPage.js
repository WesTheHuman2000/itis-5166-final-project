import React, { useState,  } from 'react';
import {
  Link,
  useNavigate
} from 'react-router-dom'
import Axios from 'axios';

// should work on api login function
function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleInputChange = (change) => {
    setFormData({
      ...formData,
      [change.target.name]: change.target.value,
    });
  };
  const handleLogin = async () => {
    try {
      
      const response = await Axios.post('http://67.205.136.28:5000/api/login', {
        username: formData.username,
        password: formData.password,
      });
      
      console.log('Server response:', response.data);
      
      const { token, user_id } = response.data;
      
  
      if (response.data.success) {
        localStorage.setItem('jwt', token);
        localStorage.setItem('user_id', user_id);

        Axios.get('http://67.205.136.28:5000/budget', {
          headers: {
            Authorization: `Bearer ${token}`,
            user_id: user_id
          }
        });

        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error, e.g., show an error message to the user
    }
  };


  return (
    <div className='container mt-5'>
      <form>
        <div className='form-outline mb-4'>
          <input type='Username' id='form2Example1' className='form-control' name='username' value={formData.username} onChange={handleInputChange}></input>
          <label className='form-label' htmlFor='form2Example1'>
            Username
          </label>
        </div>

        <div className='form-outline mb-4'>
          <input type='password' id='form2Example2' className='form-control' name='password' value={formData.password} onChange={handleInputChange} ></input>
          <label className='form-label' htmlFor='form2Example2'>
            Password
          </label>
        </div>
        <button
          type='button'
          className='btn btn-primary btn-block mb-4'
          onClick={handleLogin}
        >
          Sign in
        </button>

        <div className='text-center'>
          <p>
            Not a member? <Link to='/signup'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;