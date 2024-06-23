import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 
    domain="dev-pnfp64bchhc0qb0l.us.auth0.com"
    clientId="Hx6rjhQwMawWN8MRuYGEyuZ1iyowHmm9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>,
)
