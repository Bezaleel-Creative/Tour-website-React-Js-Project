import React from 'react';
import './ContactFormStyles.css'

const SignUpForm = () => {
  return (
    <div className='form-container'>
      <h1>Journey with us</h1>
      <form>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='tel' placeholder='Phone Number' />
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='Your Destination' />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm