import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCategories, getUnits} from "../services/apiService";
import './Dashboard.css';

const EditItem = () => {
  const { id } = useParams(); // get itemId from URL
  const navigate = useNavigate();

  // Form states
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [unit, setUnit] = useState("");

  // Dropdown lists
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [units, setUnits] = useState([]);

  // Fetch item, categories, statuses, units on mount
  useEffect(() => {
    // Fetch existing item info
    axios.get(`http://localhost:8082/api/items/${id}`)
      .then(res => {
        const item = res.data;
        setCategory(item.categoryId?.categoryId || "");
        setPrice(item.unitPrice);
        setQuantity(item.qty);
        setDescription(item.description);
        setStatus(item.status?.id || "");
        setUnit(item.unit?.unitId || "");
      })
      .catch(err => console.error("Error fetching item:", err));

    // Fetch categories
    getCategories().then(data => setCategories(data));

    // Fetch units
    getUnits().then(data => setUnits(data));

    // Fetch statuses
    axios.get("http://localhost:8082/api/statuses")
      .then(res => setStatuses(res.data))
      .catch(err => console.error("Error fetching statuses:", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare updated item object
    const updatedItem = {
      description: description,
      unitPrice: price,
      qty: quantity,
      categoryId: { categoryId: parseInt(category) },
      status: { id: parseInt(status) },
      unit: { unitId: parseInt(unit) },
      sellerEmail: localStorage.getItem("sellerEmail") // keep seller email
    };

    axios.put(`http://localhost:8082/api/items/${id}`, updatedItem)
      .then(res => {
        alert("Item updated successfully!");
        navigate("/MyItems");
      })
      .catch(err => console.error("Error updating item:", err));
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2>Edit Item</h2>
        <button onClick={() => navigate("/SdOverview")}>
          <i className="fa-solid fa-arrow-right"></i> Back to Dashboard
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-grid">
            <div>
              <label>Item Name</label>
              <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="border rounded p-2 input-small"
              />
            </div>

            <div>
              <label>Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="border rounded p-2 input-small"
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Unit</label>
              <select
                value={unit}
                onChange={e => setUnit(e.target.value)}
                className="border rounded p-2 input-small"
              >
                <option value="">Select unit</option>
                {units.map(u => (
                  <option key={u.unitId} value={u.unitId}>
                    {u.unitName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Status</label>
              <select
                value={status}
                onChange={e => setStatus(e.target.value)}
                className="border rounded p-2 input-small"
              >
                <option value="">Select status</option>
                {statuses.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.statusName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="border rounded p-2 input-small"
              />
            </div>

            <div>
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                className="border rounded p-2 input-small"
              />
            </div>
          </div>

          <div className="button-container">
            <button
              type="button"
              onClick={() => navigate("/Myitems")}
            >
              Cancel
            </button>

            <button type="submit">Update Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
