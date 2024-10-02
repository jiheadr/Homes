import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';



export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
    setLoading(true);
    const res = await fetch('/api/auth/signup', 
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold 
      my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        type="text" 
        placeholder='username' 
        className='border p-3 rounded-lg' 
        id='username' 
        onChange={handleChange}
        />
        <input 
        type="email" 
        placeholder='email' 
        className='border p-3 rounded-lg' 
        id='email' 
        onChange={handleChange}
        />
        <input 
        type="password" 
        placeholder='password' 
        className='border p-3 rounded-lg' 
        id='password' 
        onChange={handleChange}
        />
        <div
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          id="scroll"
          className='border p-3 rounded-lg'
          >
          <p>By registering for an account, you agree to provide accurate, current, and complete information. 
            You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. 
            If you suspect unauthorized access, notify us immediately. As a registered user, you agree that the information you access through this website, 
            including property listings, client details, or other confidential data, is for your personal use only. This information must not be shared, distributed, 
            or disclosed to any non-account user or third party without explicit written consent from the website owner.
          </p>
        </div>
        <div className='mx-auto'> 
          <p className='flex text-red-700 text-sm '>Acknowledge agreement signature required!</p>
        </div>
        <input 
        type="text" 
        placeholder='signature' 
        className='border p-3 rounded-lg' 
        id='signature' 
        onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3
        rounded-lg uppercase hover:opacity-95 
        disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth />
      </form>
      <div className='flex gap-2 mt-5' >
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}