import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { addItem, getCategories, getUnits } from "../services/apiService";

const AddItem = () => {
  const navigate = useNavigate();
  
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [unit, setUnit] = useState("");
  const [units, setUnits] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [imageFile, setImageFile] = useState(null); // <-- new state for image

  // Load categories + units once
  useEffect(() => {
    getCategories().then(setCategories).catch(console.error);
    getUnits().then(setUnits).catch(console.error);
  }, []);

  // Fetch seller email from localStorage
  useEffect(() => {
    const email = localStorage.getItem("sellerEmail");
    if (email) setSellerEmail(email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image file.");
      return;
    }

    const itemData = {
      unitPrice: Number(price),
      qty: Number(quantity),
      description,
      categoryId: Number(categoryId),
      sellerEmail,
      unit: Number(unit),
    };

    try {
      // Pass itemData and imageFile separately
      const response = await addItem(itemData, imageFile);
      alert(response || "The item entered successfully");

      // reset form
      setDescription("");
      setCategoryId("");
      setUnit("");
      setPrice("");
      setQuantity("");
      setImageFile(null);
      document.getElementById("imageInput").value = null;
    } catch (error) {
      alert("Failed to add item: " + error.message);
    }
  };
  const handleExit = () => {
    navigate("/"); // go to home page
  };
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>
          <i className="fa-solid fa-user"></i> {"Seller Dashboard"}
        </h1>
        <button onClick={handleExit}>
          <i className="fa-solid fa-arrow-right"></i> Exit Dashboard
        </button>
      </div>

      <nav className="nav">
        <a href="/SdOverview"><i className="fa-solid fa-box-isometric"></i> Overview</a>
        <a href="/MyItems"><i className="fa-solid fa-box"></i> My Items</a>
        <a href="/AddItem"><i className="fa-solid fa-plus"></i> Add Item</a>
        <a href="/Profile"><i className="fa-solid fa-user"></i> Profile</a>
      </nav>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-grid">
            <div>
              <label>Item Name</label>
              <input style={{ width: "350px" }}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter item name"
                className="input-small"
                required
              />
            </div>

            <div>
              <label className="form-group">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="input-small"
                required
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Unit Price (Rs.)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                className="input-small"
                required
              />
            </div>

            <div>
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="input-small"
                required
              />
            </div>
          </div>

          <div className="unit-image-row">
            <div>
              <label>Choose the unit</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="input-small"
                required
              >
                <option value="">Select unit</option>
                {units.map((u) => (
                  <option key={u.unitId} value={u.unitId}>
                    {u.unitName}
                  </option>
                ))}
              </select>
            </div>

            <div style={{marginRight:"-10px"}}>
              <label>Upload Item Image</label>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="input-small"
                required
              />
            </div>
          </div>


          <button
            type="submit"
            style={{display:"block",margin:"0 auto", marginTop:"35px", height:"40px",width:"200px", fontSize:"large"}}
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
