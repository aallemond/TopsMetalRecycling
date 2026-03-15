import { useState, useEffect } from "react";
import "../styles/hero.css"
import CallDropdown from "./CallDropdown";

export default function Hero() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="hero">

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