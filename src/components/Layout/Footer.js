import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className="bg-dark text-light p-2 footer">
            <h4 className='text-center'>All Rights Reserved © iSHOP </h4>
            <p className="text-center">
                <Link to='/about'>About Us</Link>
                |
                <Link to='/contact'>Contact Us</Link>
                |
                <Link to='/privacypolicy'>Privacy Policy</Link>
            </p>
        </div>
    </>
  )
}

export default Footer