import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  addItem,
  getCategories,
  getUnits,
  getSellerInfo,
} from "../services/apiService";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [unit, setUnit] = useState("");
  const [units, setUnits] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [username, setUsername] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  // Load categories + units once
  useEffect(() => {
    getCategories().then(setCategories).catch(console.error);
    getUnits().then(setUnits).catch(console.error);
  }, []);

  // Fetch seller info once
  useEffect(() => {
    const email = localStorage.getItem("sellerEmail");
    if (email) {
      setSellerEmail(email);
      getSellerInfo(email)
        .then((data) => {
          if (data && data.seller_username) {
            setUsername(data.seller_username);
          } else {
            setUsername(email); // fallback
          }
        })
        .catch((err) => {
          console.error("Error fetching seller info:", err);
          setUsername(email);
        });
    }
  }, []);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      itemName,
      unitPrice: Number(price),
      qty: Number(quantity),
      categoryId: Number(categoryId),
      sellerEmail,
      unit: Number(unit),
    };

    try {
      const response = await addItem(itemData);
      alert(response || "The item entered successfully");
      // reset form
      setItemName("");
      setCategoryId("");
      setUnit("");
      setPrice("");
      setQuantity("");
    } catch (error) {
      alert("Failed to add item: " + error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>
          <i className="fa-solid fa-user"></i> {username + " Dashboard"}
        </h1>
        <button>
          <i className="fa-solid fa-arrow-right"></i> Exit Dashboard
        </button>
      </div>

      <nav className="nav">
        <a href="/SdOverview">
          <i className="fa-solid fa-box-isometric"></i> Overview
        </a>
        <a href="/my_items">
          <i className="fa-solid fa-box"></i> My Items
        </a>
        <a href="/AddItem">
          <i className="fa-solid fa-plus"></i> Add Item
        </a>
        <a href="/profile">
          <i className="fa-solid fa-user"></i> Profile
        </a>
      </nav>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-grid">
            <div>
              <label>Item Name</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
                className="border rounded p-2 input-small"
                required
              />
            </div>

            <div>
              <label className="form-group">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="border rounded p-2 input-small"
                required
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.category_id} value={cat.category_id}>
                    {cat.category_name}
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
                className="border rounded p-2 input-small"
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
                className="border rounded p-2 input-small"
                required
              />
            </div>
          </div>

          <div>
            <label>Choose the unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="border rounded p-2 input-small"
              required
            >
              <option value="">Select unit</option>
              {units.map((u) => (
                <option key={u.unit_id} value={u.unit_id}>
                  {u.unit_name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
