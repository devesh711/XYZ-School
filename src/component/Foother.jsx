import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Foother = () => {
  return (
    <footer className="section-p1">
      <div className="footer-container">
        <div className="col">
          <h4>Contact Us</h4>
          <p>
            <strong>Address: </strong> 123 School Street, Cityville, State
          </p>
          <p>
            <strong>Phone: </strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email: </strong> info@schoolwebsite.com
          </p>
        </div>
        <div className="col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Academics</a>
            </li>
            <li>
              <a href="#">Admissions</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Follow Us</h4>
          <div className="icon">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} XYZ SCHOOL. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
