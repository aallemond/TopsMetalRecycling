import "../styles/navbar.css"
import { useState } from "react";
import CallDropdown from "./CallDropdown";



export default function Navbar() {
const [priceMenu, setPriceMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">

        <a href="#top" className="logo">
          <img src="/topsLogo.png" alt="Tops Metal Recycling Logo" />
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <div
  className="pricesMenu"
  onClick={() => setPriceMenu(!priceMenu)}
>

  Prices ▾

  {priceMenu && (
    <div className="pricesDropdown">

      <a href="#copper">Copper</a>
      <a href="#brass">Brass</a>
      <a href="#aluminium">Aluminum</a>
      <a href="#stainless">Stainless</a>
      <a href="#whole">Whole Scrap</a>
      <a href="#circuit">Circuit Boards</a>
      <a href="#cpus">CPUs</a>
      <a href="#ram">RAM</a>
      <a href="#misc">Misc.</a>
      
    
      

    </div>
  )}

</div>
          <a href="#contact">Contact</a>
        </div>

        <CallDropdown
            buttonText="Call / Text"
             className="callButton"
        />

      </div>
    </nav>
  );
}