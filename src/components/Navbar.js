import "../styles/navbar.css"
import { useState, useEffect, useRef } from "react";
import CallDropdown from "./CallDropdown";
import {metals} from "../data/metals.js"



export default function Navbar() {
  const [pricesOpen, setPricesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pricesRef = useRef(null);

  useEffect(() => {

  const handleClickOutside = (event) => {
    if (
      pricesRef.current &&
      !pricesRef.current.contains(event.target)
    ) {
      setPricesOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, []);

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

        <div
            ref={pricesRef}
            className="pricesMenu"
            onClick={() => setPricesOpen(!pricesOpen)}
        >
             Prices ▾

        {pricesOpen && (
          <div className="pricesDropdown">

      {metals.map((metal) => (
  <a
    key={metal.id}
    href={`#${metal.id}`}
    onClick={() => setPricesOpen(false)}
  >
    {metal.title}
  </a>
))}
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