// src/services/api.js
import axios from 'axios';

// Configuración básica de Axios
const api = axios.create({
    baseURL: 'http://localhost:3001',  // URL base del backend local
});

export default api;
