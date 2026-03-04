import "../styles/navbar.css"
// import { useState } from "react";
import CallDropdown from "./CallDropdown";

export default function Navbar() {
//   const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">

        <div className="logo">
          Tops Metal Recycling
        </div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#prices">Prices</a>
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