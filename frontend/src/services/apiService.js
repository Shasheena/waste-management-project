import axios from "axios";

// Base URL for backend
const BASE_URL = "http://localhost:8080";
const BASE_URL1 = "http://localhost:8082";

// Fetch seller by email
export const fetchSellerByEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/sellers/by-email?email=${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
export const getSellerInfo = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL1}/api/items/seller`, {
      params: { email }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
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
export const addItem = async (itemData) => {
  try {
    const response = await axios.post(`${BASE_URL1}/item/add`, itemData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // should return "The item entered successfully"
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

