import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
    domain='dev-0zxc5mmaixor2u28.us.auth0.com' 
    clientId='abJVZwGMPDsii1ZNQwh71Z8lkAfUfyOT' 
    redirect_uri={"/dashboard"}>
    <App />

    </Auth0Provider>
  </React.StrictMode>,
)
