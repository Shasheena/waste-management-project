import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { deleteItemById } from "../services/apiService";
import './Dashboard.css';

const MyItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("sellerEmail"); // seller email from localStorage
    if (email) {
      axios.get(`http://localhost:8082/api/items/seller/items?email=${email}`)
        .then(res => setItems(res.data))
        .catch(err => console.error(err));
    }
  }, []);

  //Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteItemById(id);
        alert(`Item ${id} deleted successfully!`);
        // update UI by removing deleted item
        setItems(prevItems => prevItems.filter(item => item.itemId !== id));
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Failed to delete item");
      }
    }
  };


    return (
      <div className="dashboard-container">
        <div className="header">
          <h1><i className="fa-solid fa-user"></i> Seller Dashboard </h1>
          <button onClick={() => navigate("/Home")}><i className="fa-solid fa-arrow-right"></i> Exit Dashboard</button>
        </div>

        <nav className="nav">
          <a href="/SdOverview"><i className="fa-solid fa-box-isometric"></i> Overview</a>
          <a href="MyItems"><i className="fa-solid fa-box"></i> My Items</a>
          <a href="/AddItem"><i className="fa-solid fa-plus"></i> Add Item</a>
          <a href="/Profile"><i className="fa-solid fa-user"></i> Profile</a>
        </nav>

        <div className="recent-items">
          <h3>My Items</h3>

          <table className="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Interest</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.itemId}>
                  <td>{item.description}</td>
                  <td>{item.categoryId?.categoryName}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.qty}</td>
                  <td>{item.status?.statusName}</td>
                  <td>{item.interest}</td>
                  <td>
                    <Link to={`/Edit/${item.itemId}`}>
                      <button className="edit-btn">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                    </Link>
                    <button className="delete-btn" onClick={() => handleDelete(item.itemId)}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    );
  };

  export default MyItems;
