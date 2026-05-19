import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import './index.css'
import App from './App.jsx'

// Usa la variable de entorno de Railway o la URL de producción como respaldo
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'https://serene-endurance-production-2b93.up.railway.app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
