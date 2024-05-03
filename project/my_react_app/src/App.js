import React from 'react';
// import Main from "./pages/projects"
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contacts"
import Entertainments from "./pages/Entertainments"
import Rooms from "./pages/Rooms"
import Transfer from "./pages/Transfer"

function App() {
  return (
    <div className="bg-cover bg-center h-screen " style={{ backgroundImage: "url('/images/header/hotel.png')" }}>
    <Router>     
      <NavBar></NavBar>      
      <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/rooms' element={<Rooms />}/>
            <Route path='/entertainments' element={<Entertainments/>}/>
            <Route path='/transfer' element={<Transfer />}/>
            <Route path='/contacts' element={<Contact />}/>          
      </Routes>  
       
      
    </Router>
    </div>
  );
}

export default App;