import "../styles/navbar.css"
import { useState, useEffect, useRef } from "react";
import {metals} from "../data/metals.js"



export default function Navbar() {
  const [pricesOpen, setPricesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pricesRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setPricesOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, []);
  

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
   <nav className="navbar" ref={navRef}>
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

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

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
   onClick={() => {
  setPricesOpen(false);
  setMenuOpen(false);
}}
  >
    {metal.title}
  </a>
))}
         </div>
        )}

        </div>

          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
        
      </div>
    </nav>
  );
}