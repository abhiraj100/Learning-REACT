import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherProvider } from './context/Weather';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
    <App />
    </WeatherProvider>
  </StrictMode>,
)