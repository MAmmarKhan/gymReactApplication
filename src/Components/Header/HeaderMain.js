import React, { useState } from "react";
import './Header.css';
import { BrowserRouter as Link } from "react-router-dom";
import Nav from './Nav';


export default function Header() {
  const [visiblity, setvisiblity] = useState('');
  const setStyle = () => {
    if (visiblity == '') {
      setvisiblity('navSee');
    }
    else{
      setvisiblity('');
    }
    
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="#">Body <span>Image</span></Link>
        </div>
        <div className="ham-burger" onClick={() => setStyle()}>
          <Link >
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>        
          <Nav props={visiblity}></Nav>      
      </div>      
    </header>    
  )
}
