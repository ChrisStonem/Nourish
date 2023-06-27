import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // get content from useContext UserAuth()
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Home')
    } catch(e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log(errorCode, errorMessage);
    };
  };

  return (
    <>
    <div className="maincontent3">
      <div className="wgo">
        <h2>Welcome to</h2>
        <div className="logo"/>
        <h2>Nourish!</h2>
        <p>Nourish is an application based on helping people through the recovery of anorexia.</p>
        <p>This app will let you track your accomplishments and general archievements during your recovery.</p>
        <p>To ensure your privacy is protected, please create an account or log into an existing one.</p>
      <br /><br /><br />
      <div className='login'>
        <div>
          <h1 className=''>Sign/Log in to your account</h1>
          <p className=''>
            Don't have an account yet?{' '}
            <Link to='/signup' className='underline'>
              Sign up.
            </Link>
          </p>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='inputfield'>
          <label className=''>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
        </div>
        <div className='inputfield'>
          <label className=''>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
        </div>
        <button className=''>
          Sign/Log In
        </button>
      </form>
    </div>
      </div>
    </div>
    </>
  );
};

export default Signin;
