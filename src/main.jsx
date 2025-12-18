import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='19608491654-66k845p75co3f83gc8erk618066b0mu1.apps.googleusercontent.com'>
       <ShareContext>
          <App />
        </ShareContext>   
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
