import React, { useState } from 'react';
import Axios from 'axios';
import {
  useNavigate
} from 'react-router-dom'

function UpdateBudget() {
 
  const [formData, setFormData] = useState({
    title: '',
    budget_amt: 0,
    expense: 0,
    color: '#ffffff', 
    
  });
// getting the locally sotred UID
  const user_id = localStorage.getItem('user_id');
  const navigate = useNavigate();
  

  const handleInputChange = (change) => {
    setFormData({
      ...formData,
      [change.target.name]: change.target.value,
    });
  };

  const handleSubmit = async (change) => {
    change.preventDefault();
    try {
      console.log('Submitting form...');
      
      const response = await Axios.post('http://localhost:5000/createBudget', {
        ...formData,
        user_id: user_id,  // Include user_id in the request body
      });
      navigate('/dashboard')
      console.log('Server response:', response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error('Error adding budget item:', error); 
    }
    
    
  };

  

  return (
    <div className='container'>
       <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='title'>Title:</label>    
                <input type="text" name="title" className='form-control' id='title' value={formData.title} onChange={handleInputChange} required placeholder="Gas" />
                <small id="titlelHelp" className="form-text text-muted">What are you trying to budget htmlFor?</small>
            </div>
            

            <div className='form-group'>
                <label htmlFor='budget_amount'>Budget Amount:</label>    
                <input type="number" name="budget_amt" className='form-control' id='budget_amount' value={formData.budget_amt} onChange={handleInputChange} required />
                <small id="amountlHelp" className="form-text text-muted">How much are you trying to budget?</small>
            </div>
            
            <div className='form-group'>
                <label htmlFor='expense'>Expenses:</label>    
                <input type="number" name="expense" className='form-control' id='expense' value={formData.expense} onChange={handleInputChange} required />
                <small id="amountlHelp" className="form-text text-muted">How much have you spent?</small>
            </div>

            <div className='form-group'>
                <label htmlFor='color'>Color:</label>
                <input type="color" name="color" value={formData.color} onChange={handleInputChange} />
                <small id="colorlHelp" className="form-text text-muted">Select a color htmlFor customizability</small>
            </div>
            

            <button type="submit" className="btn btn-primary" >Add Budget Item</button>
        </form> 
    </div>
    
  );
}

export default UpdateBudget;
