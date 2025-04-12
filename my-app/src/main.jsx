import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home.jsx'
import Navbar from './navbar.jsx'
import Work from './work.jsx'
import Tools from './tools.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
