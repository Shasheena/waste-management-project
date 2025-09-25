import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Option.css'; 

const LandingPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole === 'seller') {
      navigate('/seller_signup');
    } else if (selectedRole === 'buyer') {
      navigate('/buyer_signup');
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <h2><i className="fas fa-leaf"></i> EcoExchange</h2>
      </div>

      <h3>Welcome to EcoExchange</h3>
      <p>Join our community to start selling or buying recyclable materials!</p>

      {/* Role selection cards */}
      <div className="role-cards">
        <div
          className={`card ${selectedRole === 'seller' ? 'active' : ''}`}
          onClick={() => handleRoleSelect('seller')}
        >
          <i className="fas fa-store card-icon"></i>
          <h4>I'm a Seller</h4>
        </div>

        <div
          className={`card ${selectedRole === 'buyer' ? 'active' : ''}`}
          onClick={() => handleRoleSelect('buyer')}
        >
          <i className="fas fa-shopping-cart card-icon"></i>
          <h4>I'm a Buyer</h4>
        </div>
      </div>

      <div className="form-group">
        <button onClick={handleContinue} disabled={!selectedRole}>
          Continue <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      
    </div>
  );
};

export default LandingPage;
