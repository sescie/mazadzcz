import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:5000/api';  // Replace with your server URL

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error registering user';
  }
};

// Login a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    const token = response.data.token;

    // Store the JWT token in localStorage
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error logging in user';
  }
};

// Update user profile
export const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/users/update`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error updating user';
  }
};

// Logout the user (by deleting the token)
export const logoutUser = () => {
  localStorage.removeItem('token');
  // You can redirect to the login page if needed
};

// Delete user (only for admins)
export const deleteUser = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/users/delete/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error deleting user';
  }
};
