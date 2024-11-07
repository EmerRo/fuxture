import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para establecer el token en las cabeceras de la API
export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

// Función para obtener los datos del usuario autenticado
export const getUser = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    throw new Error('No se pudo obtener la información del usuario');
  }
};

// Función para registrar un nuevo usuario
export const register = async (userData: { name: string; email: string; password: string }) => {
  
    const response = await api.post('/register', userData);
    return response.data; // Retorna la respuesta del backend, como el usuario registrado


  
};

export default api;
