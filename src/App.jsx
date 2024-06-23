import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  
  console.log("current user: " + user)
  return (
    <>
    {isAuthenticated && <h3>hello, {user.name}</h3>}
    {
      isAuthenticated ? <button onClick={logout}>Logout</button>:<button onClick={loginWithRedirect}>Login with redirect</button>
    }
      
    </>
  )
}

export default App
