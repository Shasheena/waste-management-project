import axios from "axios";

// Base URL for backend
const BASE_URL = "http://localhost:8080";

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


