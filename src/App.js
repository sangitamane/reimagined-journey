import React from 'react';
import './App.css';
//import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';


function App() {
  return (
    <div className="App">
            <Router>
              <Navbar />
              <header className="App-header">
                   <h1>Demo React Form</h1>
              </header>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Page not found</h1>} /> 
              </Routes>
            </Router>
    </div>
  );
}

export default App;
