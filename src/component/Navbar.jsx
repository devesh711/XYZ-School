import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/academics">
          <li>Academics</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/about">
          <li>About us</li>
        </Link>
        <Link to="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
