import { useState, useEffect} from "react";
import CallDropdown from "./CallDropdown";

export default function Hero() {

  const [open, setOpen] = useState(false);

useEffect(() => {

  const closeDropdown = () => {
    setOpen(false);
  };

  window.addEventListener("click", closeDropdown);

  return () => {
    window.removeEventListener("click", closeDropdown);
  };

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

       <CallDropdown
         buttonText="Call or Text for Pricing"
        className="heroButton"
       />

          {open && (
            <div className="heroCallDropdown">
              <a href="tel:3373812003">📞 Call</a>
              <a href="sms:3373812003">💬 Text</a>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}