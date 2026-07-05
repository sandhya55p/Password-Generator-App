import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PasswordProvider } from './Context/PasswordContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <PasswordProvider>
  <App/>
 </PasswordProvider>
 
  </BrowserRouter>
)
