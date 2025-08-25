import React, { useState } from 'react';
import './Dashboard.css';

const Profile = () => {
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

 return (
    <div className="dashboard-container">
      <div className="header">
        <h2><i className="fa-solid fa-user"></i> Seller Dashboard - </h2>
        <button><i className="fa-solid fa-arrow-right"></i> Exit Dashboard</button>
      </div>

      <nav className="nav">
        <a href="/overview"><i className="fa-solid fa-box-isometric"></i> Overview</a>
        <a href="/my_items"><i className="fa-solid fa-box"></i> My Items</a>
        <a href="/add_items"><i className="fa-solid fa-plus"></i> Add Item</a>
        <a href="#"><i className="fa-solid fa-user"></i> Profile</a>
      </nav>
       <div className="profile-container">
      <h2>Update Profile</h2>
      <div className="profile-photo">
        <div className="photo-placeholder" style={{ backgroundImage: photoPreview ? `url(${photoPreview})` : 'none' }}></div>
        <label className="change-photo-btn">
          Change Photo
          <input type="file" accept="image/jpeg,image/png" onChange={handlePhotoChange} style={{ display: 'none' }} />
        </label>
        <p>JPG, PNG up to 2MB</p>
      </div>
      </div>
       <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value="Rajesh Kumar" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value="ecoseller123" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value="rajesh.kumar@email.com" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" value="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea value="Shop No. 15, Green Market, Mumbai, Maharashtra 400001" />
        </div>
        <div className="buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="update-btn">Update Profile</button>
        </div>
      </form>
      </div>
      
 );
}
export default Profile;