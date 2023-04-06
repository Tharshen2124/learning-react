import React from 'react'
import { useEffect, useState, createContext } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// if you want a group of components to have access to the same data, use createContext to create a global context
/* o */ 

export default function Routing() {
  /* const [username, setUsername] = useState("John"); */
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});  
  return (
    <div className="App">
      {/* <AppContext.Provider value={{ username, setUsername }}> */}
     <QueryClientProvider client={client}>
      <Router>
          <div> NAVBAR </div>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact </Link>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>
        </Router>  
      </QueryClientProvider>
      {/* </AppContext.Provider> */}
    </div>
  )
}
