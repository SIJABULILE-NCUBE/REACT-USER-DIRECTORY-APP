import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// grabbing the root div from index.html and mounting the app into it
createRoot(document.getElementById('root')).render(
  // StrictMode helps catch potential bugs during dev, doesn't affect production
  <StrictMode>
    <App />
  </StrictMode>,
)