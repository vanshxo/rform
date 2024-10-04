"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './Landing.css'; // Import the CSS file
import Button from './Button';
import { Navigate } from 'react-router-dom'; 

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
            <div className="mtse">MTSE</div>
            <div className="mtse2">MALAVIYA TALENT SEARCH EXAMINATION</div>
            <Button type="submit" className='btn' onClick={handleButtonClick}>Register NOW</Button>

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

export default Landing;

