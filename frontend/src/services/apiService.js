import axios from "axios";

// Base URL for backend
const BASE_URL = "http://localhost:8080";
const BASE_URL1 = "http://localhost:8082";


// Seller Signup
export const signup = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Signin
export const signin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch all cities
export const fetchCities = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/cities");
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};

// Fetch all districts
export const fetchDistricts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/districts");
    return response.data;
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};

// Fetch all provinces
export const fetchProvinces = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/provinces");
    return response.data;
  } catch (error) {
    console.error("Error fetching provinces:", error);
    throw error;
  }
};

// Fetch seller info by email
// export const getSellerInfo = async (email) => {
//   try {
//     const response = await axios.get(`${BASE_URL1}/api/items/seller`, {
//       params: { email }
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
//Fetch item categries
export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:8082/api/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

//Fetch units
export const getUnits = async () => {
  try {
    const response = await axios.get("http://localhost:8082/api/units");
    return response.data;
  } catch (error) {
    console.error("Error fetching units:", error);
    throw error;
  }
};

// Add Item API call
export const addItem = async (itemData, imageFile) => {
  try {
    const formData = new FormData();

    // Append JSON data as Blob
    formData.append(
      "item",
      new Blob([JSON.stringify(itemData)], { type: "application/json" })
    );

    // Append image file
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const response = await axios.post(`${BASE_URL1}/item/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // "The item entered successfully"
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

