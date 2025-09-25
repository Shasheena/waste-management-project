import React from 'react';
import './Dashboard.css';

const MyItems = () => {
  // Example data
  const items = [
    { id: 1, name: "Item 1", category: "Category A", price: "$10", quantity: 5, status: "Available", interest: 3 },
    { id: 2, name: "Item 2", category: "Category B", price: "$20", quantity: 2, status: "Sold", interest: 1 },
  ];

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2><i className="fa-solid fa-user"></i> Seller Dashboard - </h2>
        <button><i className="fa-solid fa-arrow-right"></i> Exit Dashboard</button>
      </div>

      <nav className="nav">
        <a href="/overview"><i className="fa-solid fa-box-isometric"></i> Overview</a>
        <a href="#"><i className="fa-solid fa-box"></i> My Items</a>
        <a href="/add_items"><i className="fa-solid fa-plus"></i> Add Item</a>
        <a href="/profile"><i className="fa-solid fa-user"></i> Profile</a>
      </nav>

      <div className="recent-items">
        <h3>My Items</h3>

        {/* Table starts here */}
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
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>{item.interest}</td>
                <td>
                  <button className="edit-btn"><i className="fa-solid fa-pen"></i></button>
                  <button className="delete-btn"><i className="fa-solid fa-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Table ends here */}

      </div>
    </div>
  );
};

export default MyItems;
