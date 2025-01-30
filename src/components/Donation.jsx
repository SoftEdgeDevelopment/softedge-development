import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
  const handleClick = (e) => {
    // Preventing default Link behavior (navigation) temporarily
    e.preventDefault();
    // Scroll to top
    window.scrollTo(0, 0);
    // Allow navigation to the donate page after scroll
    setTimeout(() => {
      window.location.href = "/donate"; // or use history.push if you have access to it
    }, 0);
  };

  return (
    <div style={{ textAlign: 'center', margin: 0, padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
      <Link 
        to="/donate" 
        onClick={handleClick} // Trigger scroll to top when clicked
        style={{
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1.2rem', 
          fontWeight: 'bold'
        }}
      >
        Donate Now
      </Link>
    </div>
  );
};

export default Donate;