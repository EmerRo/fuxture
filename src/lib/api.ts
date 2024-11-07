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
    // Específicamente, puedes capturar un error del tipo AxiosError para un manejo más detallado
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al obtener los datos del usuario');
    } else {
      throw new Error('No se pudo obtener la información del usuario');
    }
  }
};

// Función para registrar un nuevo usuario
export const register = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await api.post('/register', userData);
    return response.data; // Retorna la respuesta del backend, como el usuario registrado
  } catch (error) {
    // Manejo del error, capturando AxiosError si se da
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
    } else {
      throw new Error('Error desconocido al registrar el usuario');
    }
  }
};

export default api;
