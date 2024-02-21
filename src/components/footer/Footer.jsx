import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <ul>
        <li>
          <a href="https://github.com/shenks">
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
