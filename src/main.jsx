import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext'   // 👈 add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>                         {/* 👈 wrap App */}
      <App />
    </CartProvider>
  </StrictMode>,
)
