"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import './Confirm.css'; // Import the CSS file
import Button from './Button';
import { Navigate } from 'react-router-dom'; 

const Confirm: React.FC = () => {
    const [redirectToForm, setRedirectToForm] = useState(false); // State to manage redirection

    const handleButtonClick = () => {
        setRedirectToForm(true); // Set state to true when button is clicked
    };

    if (redirectToForm) {
        return <Navigate to="/form" />; // Redirect to form
    }
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/yourusername', '_blank'); // Replace with your Instagram link
      };
      const handleLClick = () => {
        window.open('https://www.linkedin.com/company/sphinx-mnit-jaipur/posts/?feedView=all', '_blank'); // Replace with your Instagram link
      };
    return (
        
        <div className="landing-container1">
            <div>
                <Image
                    src="/image.jpg"
                    alt="Styled Image"
                    className='responsive-image'
                    width={1000} // Initial width and height; styles will override
                    height={600}
                    style={{
                        position: 'absolute',
                        width: '60vw', // Makes the image responsive based on viewport width
                        height: 'auto', // Maintains aspect ratio
                        maxHeight: '100vh', // Prevents overflow beyond the viewport height
                        left: '5%', // Adjust left positioning relative to the container
                         // Adjusted top to allow better placement
                        transform: 'rotate(-90deg)', // Rotates the image
                        objectFit: 'cover', // Ensures the image fully fills its container area if needed
                    }}
                />
            </div>
            <div className="sphinx">SPHINX</div>
            <div className="mtse">Thanks for registering with us</div>
            <div className="mtse2">Follow us on</div>
            <div className='insta'>
     
        <FaInstagram className="w-6 h-6" onClick={handleInstagramClick}/> {/* Icon size can be adjusted */}
     
            </div>
   
                
            
            <div className='link'>

            <FaLinkedin className="w-6 h-6" onClick={handleLClick}/> {/* Icon size can be adjusted */}
     
            </div>
            

            <style jsx>{`
                @media (max-width: 768px) {
                    .responsive-image {
                        width: 80vw; /* Increase width for smaller screens */
                        top: 15%; /* Adjust position */
                        left: 10%; /* Keep consistent margin */
                        transform: rotate(90deg); /* Rotate by 90 degrees on mobile devices */
                    }
                }

                @media (max-width: 480px) {
                    .responsive-image {
                        width: 90vw; /* Full width for mobile */
                        left: 5%; /* Keep consistent margin */
                        top: 10%; /* More space from the top */
                    }
                }
            `}</style>
        </div>
    );
}

export default Confirm;


