import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { ProductsProvider } from './contexts/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProductsProvider>
  </StrictMode>
)
