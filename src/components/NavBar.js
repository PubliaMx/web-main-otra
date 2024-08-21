import React from 'react';
import { FaHome, FaDollarSign, FaWallet, FaTaxi, FaHamburger, FaStore } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";


import './NavBar.css'; // Asegúrate de que la ruta sea correcta


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">  
        <div className="logo">
            <img src="/ciudadan_logo.png" alt="Ciudadan Logo" className="logo-img" />
        </div>
        <div className="nav-link">
            
                <span className="nav-text">Buscar</span>
                <FaHome />
        </div>
        <div className="nav-linky">
            
            <MdMessage />
     

        </div>

        <div className="nav-linky">
            
              
            <IoIosNotifications />

        </div>

        
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <FaHome />
          <span className="nav-text">Ganar</span>
        </div>
        <div className="nav-link">
          <FaDollarSign />
          <span className="nav-text">Cartera</span>
        </div>
        <div className="nav-link">
          <FaWallet />
          <span className="nav-text">Taxis</span>
        </div>
        <div className="nav-link">
          <FaTaxi />
          <span className="nav-text">Comida</span>
        </div>
        <div className="nav-link">
          <FaHamburger />
          <span className="nav-text">Marketplace</span>
        </div>
        <div className="nav-link">
          <FaStore />
          <span className="nav-text">Market</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
