"use client";
import React from 'react';
import './Landing.css'; // Import the CSS file
import Button from './Button';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
const Landing: React.FC = () => {

    
        const [redirectToForm, setRedirectToForm] = useState(false); // State to manage redirection
      
        const handleButtonClick = () => {
          setRedirectToForm(true); // Set state to true when button is clicked
        };
      
        if (redirectToForm) {
          return <Navigate to="/form" />; // Redirect to form
        }
    
  return (
    <div className="landing-container">
      <div className="image" /> {/* Empty div to hold the background image */}
      <div className="sphinx">
      SPHINX
    </div>
    <div className="mtse">
      MTSE
    </div>
    <div className="mtse2">
    MALAVIYA TALENT SEARCH EXAMINATION
    </div>
    <Button type="submit" className='btn' onClick={handleButtonClick}>Register</Button>
    </div>
  );
}

export default Landing;


