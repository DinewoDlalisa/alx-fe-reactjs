import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ padding: '10 px', backgroundColor: 'grey', display: 'flex', justifyContent: 'center'}}>
            <Link to="/" style={{ margin: '10 px', fontWeight: 'bold', fontSize: '18px', margin: '0 15px', color: 'white'}}>Home</Link>
            <Link to="/about" style={{ margin: '10 px', fontWeight: 'bold', fontSize: '18px', margin: '0 15px', color: 'white'}}>About</Link>
            <Link to="/services" style={{ margin: '10 px', fontWeight: 'bold', fontSize: '18px', margin: '0 15px', color: 'white'}}>Services</Link>
            <Link to="/contact" style={{ margin: '10 px', fontWeight: 'bold', fontSize: '18px', margin: '0 15px', color: 'white'}}>Contact</Link>
        </nav>
    );
}


export default Navbar;