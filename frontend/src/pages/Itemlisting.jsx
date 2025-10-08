import React, { useState, useEffect } from "react";
import "./Itemlisting.css";
import { FaBox, FaMapMarkerAlt, FaUser, FaHeart } from "react-icons/fa";
import { getAllItems, getSellerByEmail, getAddressById, addToInterestedItems, getCategories, fetchCities } from "../services/apiService";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Itemlisting() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]); // 🔹 UPDATED
  const [cities, setCities] = useState([]); // 🔹 UPDATED
  const [searchTerm, setSearchTerm] = useState(""); // 🔹 UPDATED
  const [selectedCategory, setSelectedCategory] = useState(""); // 🔹 UPDATED
  const [selectedCity, setSelectedCity] = useState(""); // 🔹 UPDATED

  useEffect(() => {
    // fetch all items from backend
    getAllItems().then(async (res) => {
      const itemsWithDetails = await Promise.all(
        res.map(async (item) => {
          const seller = await getSellerByEmail(item.sellerEmail);
          const address = await getAddressById(seller.address_id);
          return {
            ...item,
            sellerUsername: seller.seller_username,
            city: address.city,
            district: address.district,
          };
        })
      );
      setItems(itemsWithDetails);
    });

    // fetch categories
    getCategories().then((data) => setCategories(data)).catch((err) => console.error(err));

    // fetch cities
    fetchCities().then((data) => setCities(data)).catch((err) => console.error(err));
  }, []);

  // 🔹 UPDATED: Filtered items based on search, category, city
  const filteredItems = items
    .filter((item) => (selectedCategory ? item.categoryId === parseInt(selectedCategory) : true))
    .filter((item) => (selectedCity ? item.city === selectedCity : true))
    .filter((item) => item.description.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        // Fetch all items if searchTerm is empty
        const allItems = await getAllItems();
        setItems(allItems);
        return;
      }

      const response = await axios.get(`http://localhost:8082/api/items/search`, {
        params: { query: searchTerm },
      });

      setItems(response.data);
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };

  return (
    <div className="listings-container">
      <div className="header">
        <h2>Item Listings</h2>
        <ul className="navbar-links">
          <li><a href="/Home" >Home</a></li>
          <li><Link style={{color:"white"}} to="/Interestlisting" className="interest-link">
            ❤️ My Interests
          </Link></li>
        </ul>
      </div>

      {/* 🔹 UPDATED: Search & Filters */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search items by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.categoryId} value={cat.categoryId}>
              {cat.categoryName}
            </option>
          ))}
        </select>


        {/* City Select */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="filter-select"
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city.city_id} value={city.city_name}>
              {city.city_name}
            </option>
          ))}
        </select>
      </div>

      <div className="cards-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="itemCard">
            {item.imagePath && (
              <img
                src={`http://localhost:8082/${item.imagePath}`}
                alt={item.description}
                className="item-image"
              />
            )}
            <h2>{item.description}</h2>
            <p className="price">Unit Price: Rs. {item.unitPrice}</p>
            <p className="qty">
              <strong>Qty:</strong> {item.qty} {item.unitName}
            </p>
            <p className="seller">
              <FaUser style={{ marginRight: "5px" }} />
              <strong>Seller:</strong> {item.sellerUsername}
            </p>
            <p className="location">
              <FaMapMarkerAlt style={{ marginRight: "5px", fontWeight: "bold" }} />
              {item.city}, {item.district}
            </p>
            <p className="seller">
              <strong>Status:</strong> {item.statusName}
            </p>
            <p>
              <FaHeart
                className={`like-icon ${item.isLiked ? "liked" : ""}`}
                onClick={async () => {
                  try {
                    const buyerEmail = localStorage.getItem("buyerEmail");
                    if (!buyerEmail) {
                      alert("Please sign in as a buyer first!");
                      return;
                    }

                    await addToInterestedItems(item.itemId, buyerEmail, item.qty);
                    alert("Item added to your interests ❤️");

                    setItems((prev) =>
                      prev.map((it) =>
                        it.itemId === item.itemId ? { ...it, isLiked: true } : it
                      )
                    );
                  } catch (error) {
                    alert("Failed to add item to interests!");
                  }
                }}
              />
            </p>

            <div className="card-actions">
              <button
                className="pickup-btn"
                onClick={async () => {
                  try {
                    const buyerEmail = localStorage.getItem("buyerEmail");
                    if (!buyerEmail) {
                      alert("Please sign in as a buyer first!");
                      return;
                    }

                    await addToInterestedItems(item.itemId, buyerEmail, item.qty);
                    alert("Item added to your interests.");

                    // ✅ navigate to Interestlisting page
                    navigate("/Interestlisting");
                  } catch (error) {
                    alert("Failed to add item to interests!");
                    console.error(error);
                  }
                }}
              >
                Confirm Pickup
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itemlisting;
