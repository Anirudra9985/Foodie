import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('foodvibe_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Auth API
export const authAPI = {
    registerUser: (data) => api.post('/auth/user/register', data),
    loginUser: (data) => api.post('/auth/user/login', data),
    logoutUser: () => api.get('/auth/user/logout'),
    registerFoodPartner: (data) => api.post('/auth/food-partner/register', data),
    loginFoodPartner: (data) => api.post('/auth/food-partner/login', data),
    logoutFoodPartner: () => api.get('/auth/food-partner/logout'),
};

// Food API
export const foodAPI = {
    getFoodItems: () => api.get('/food'),
    createFood: (formData) => api.post('/food', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }),
    likeFood: (foodId) => api.post('/food/like', { foodId }),
    saveFood: (foodId) => api.post('/food/save', { foodId }),
    getSavedFoods: () => api.get('/food/save'),
};

// Food Partner API
export const foodPartnerAPI = {
    getFoodPartnerById: (id) => api.get(`/food-partner/${id}`),
};

export default api;
