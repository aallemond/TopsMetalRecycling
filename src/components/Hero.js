import { useState, useEffect } from "react";
import "../styles/hero.css";
import CallDropdown from "./CallDropdown";

export default function Hero() {

  const [isMobile, setIsMobile] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // lazy load background
    const img = new Image();
    img.src = "https://res.cloudinary.com/dxnwbl21t/image/upload/f_auto,q_auto,w_1200/v1767588391/333D4419-ADE8-4E3A-8572-9E336FF1149C_ffqojx.png";
    img.onload = () => setBgLoaded(true);

    return () => window.removeEventListener("resize", checkMobile);

  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: bgLoaded
          ? `url("https://res.cloudinary.com/dxnwbl21t/image/upload/f_auto,q_auto,w_1200/v1767588391/333D4419-ADE8-4E3A-8572-9E336FF1149C_ffqojx.png")`
          : "none"
      }}
    >

      <div className="heroOverlay">

        <h1>Tops Metal Recycling</h1>

        <p>
          We buy copper, aluminum, brass, catalytic converters,
          and electronic scrap.
        </p>

        <div className="heroCallWrapper">

          {isMobile ? (
            <CallDropdown
              buttonText="Call or Text for Pricing"
              className="heroButton"
            />
          ) : (
            <a href="#contact" className="heroButton">
              Contact Us
            </a>
          )}

        </div>

      </div>

    </section>
  );
}