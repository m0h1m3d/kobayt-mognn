import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="location">
          <h2>Location</h2>
          <h3>📍PortSudan, Sudan</h3>
          <p>Greek Neighbourhood - Opposite the Coptic Club</p>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <p>📧: kobayamognn@gmail.com</p>
          <p>📞: +249900007609</p>
        </div>
        <div className="about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            magnam libero nulla optio aperiam cumque.
          </p>
        </div>
      </div>
      <p className="rights">2025 © All Rights Reserved</p>
    </>
  );
}

export default Footer;
