import React from 'react';
import {
  Link
} from 'react-router-dom'

function SignupPage() {
  return (
    <div className='container mt-5'>

    
      <form>

        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>

      
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>

      
        <div class="row mb-4">
          

          
        </div>

        <button type="button" class="btn btn-primary btn-block mb-4">Sign Up</button>

        
        <div class="text-center">
          <p>Already a member? <Link to='/login'>Sign in</Link></p>
          
        </div>
    </form>

  </div>
  );
}

export default SignupPage;