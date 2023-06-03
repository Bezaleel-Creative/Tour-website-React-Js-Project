import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from "../components/assets/10.jpg"

import Footer from '../components/Footer';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg= {AboutImg}
        title="Sign Up"
        btnClass="hide"
      />
      <SignUpForm />
      <Footer />
    </div>
  )
}

export default SignUp