import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    // making this state for checking if the confirm password is same as the first given pass:
    const [error, setError] = useState('');
    const handleSignUp = (event)=>{
               event.preventDefault();
               const form = event.target;
               const email = form.email.value;
               const password = form.password.value;
               const confirm = form.confirm.value;
               console.log(email, password, confirm)
             if(password != confirm){
                setError('password didnt match')
                return
             }
             else if(password.length <6){
                setError('Password must be at least 6 character')
                return
             }
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm"  required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;