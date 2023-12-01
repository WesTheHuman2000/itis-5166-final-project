import React, { useState,  } from 'react';
import {
  Link,
  useNavigate
} from 'react-router-dom'
import Axios from 'axios';

function SignupPage() {
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

  const handleRegister = async () => {
    try {
      const response = await Axios.post('http://localhost:5000/api/register', {
        username: formData.username,
        password: formData.password,
      });
      console.log('Server response:', response.data);
      navigate('/dashboard');
      
      
      
    } catch (error) {
      console.error('Error registering: ', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className='container mt-5'>

    
      <form>

        <div className="form-outline mb-4">
          <input type='Username' id='form2Example1' className='form-control' name='username' value={formData.username} onChange={handleInputChange}></input>
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

      
        <div className="form-outline mb-4">
        <input type='password' id='form2Example2' className='form-control' name='password' value={formData.password} onChange={handleInputChange} ></input>
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

      
        <div className="row mb-4">
          

          
        </div>

        
        <button
          type='button'
          className='btn btn-primary btn-block mb-4'
          onClick={handleRegister}
        >
          Register
        </button>

        
        <div className="text-center">
          <p>Already a member? <Link to='/login'>Sign in</Link></p>
          
        </div>
    </form>

  </div>
  );
}

export default SignupPage;