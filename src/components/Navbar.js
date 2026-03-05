import "../styles/navbar.css"
import { useState } from "react";
import CallDropdown from "./CallDropdown";



export default function Navbar() {
  const [pricesOpen, setPricesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">

        <a href="#top" className="logo">
          <img src="/tops-logo.png" alt="Tops Metal Recycling" />
        </a>

        <div className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`navLinks ${menuOpen ? "active" : ""}`}>

          <a href="#about">About</a>

          <div className="pricesMenu"
             onClick={() => setPricesOpen(!pricesOpen)}
          >

             Prices ▾

        {pricesOpen && (
          <div className="pricesDropdown">

            <a href="#copper">Copper</a>
            <a href="#brass">Brass</a>
            <a href="#aluminum">Aluminum</a>
            <a href="#stainless">Stainless</a>
            <a href="#wire">Insulated Wire</a>
            <a href="#escrap">E-Scrap</a>
            <a href="#whole">Whole Scrap</a>
            <a href="#cpus">CPUs</a>
            <a href="#misc">Misc. Scrap</a>

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