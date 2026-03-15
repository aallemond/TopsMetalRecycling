import "../styles/contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contactSection">

      <div className="contactContainer">

        <h2>Contact Tops Metal Recycling</h2>

        <p className="contactSubtext">
          Tops Metal Recycling serves customers in Sulphur, Lake Charles, Westlake, Vinton, Moss Bluff, and surrounding areas of Calcasieu Parish, Louisiana. We buy copper, aluminum, brass, stainless steel, and electronic scrap at competitive prices.
        </p>

        {/* Mobile Buttons */}
        <div className="contactButtons">

          <a href="tel:(337)802-8848" className="contactCall">
            📞 Call Us
          </a>

          <a href="sms:(337)802-8848" className="contactText">
            💬 Text Us
          </a>

        </div>

        {/* Desktop Contact Info */}
        <div className="contactInfo">

          <p>
            <strong>Phone:</strong> <a href="tel:13378028848">(337) 802-8848</a>
          </p>

          <p>
            <strong>Address:</strong><br/>
            420 E Highway 108<br/>
            Sulphur, LA 70665
          </p>

        </div>

        <p className="contactHours">
          Open Monday – Friday 8:00am-5:00pm | Call for current pricing
        </p>

      </div>

    </section>
  );
}