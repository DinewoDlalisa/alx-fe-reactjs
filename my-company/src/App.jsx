import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/' element={<About />}/>
                <Route path='/' element={<Services/>}/>
                <Route path='/' element={<Contact/>}/>
            </Routes>

        </Router>
    );
};


export default App;