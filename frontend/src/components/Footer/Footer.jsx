import React from "react";
import "./Footer.css"; // Make sure to adjust the path as necessary

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <br /><br />
        <img src="/images/logo.png" alt="logo" style={{ width: "170px", height: "58.5px" }} /><br /><br /><br />
        <p>&copy; 102, Silver Nest, Viman Nagar, Pune, Maharashtra, 411014</p><br />
        <p>
          Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
