import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <ul>
        <li>
          <Link to="https://github.com/shenks">Github</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
