import React from "react";
import "./about.css";
import "../../index.css";

export const About = () => {
  return (
    <div>
      <section id="shop-banner" className="section-p1 about-header">
        <h2>
          <span>#</span>About us
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </section>
      <section id="about-head" className="section-p1">
        <img src="" alt="" />
        <div>
          <h1>Who WE Are</h1>
          <p>
            Founded in 1850, XYZ School has a distinguished history rooted in
            the heart of Banglore. Over the years, our institution has evolved
            into a beacon of education and community, fostering academic
            excellence, inclusivity, and a commitment to personal growth. With a
            legacy of achievements, from academic milestones to championship
            victories in sports and the arts, XYZ School remains dedicated to
            shaping future leaders and embracing innovation while preserving our
            enduring values. We are proud of our past and excited about the
            continued growth and success of XYZ School as we prepare students to
            make a positive impact on the world.
          </p>
          <abbr title="">"Empowering Minds, Shaping Futures: XYZ School"</abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="infinite" scrollamount="5" width="100%">
            "Where knowledge ignites and dreams take flight, XYZ School is the
            gateway to a bright future."
          </marquee>
        </div>
      </section>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email Address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="img web/Logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> Street: 18/4, Arya Samaj Road, Karol Bagh
            City: Bangalore State/province/area : Karnataka
          </p>
          <p>
            <strong>Phone: </strong> +91 01165437913 +01 01127010431
          </p>
          <p>
            <strong>Hours: </strong> 10:00 - 18:00 , Mon-Sat
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery information</a>
          <a href="#">privacy policy</a>
          <a href="#">T & C</a>
          <a href="#">Contact</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign in</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Orders</a>
          <a href="#">Help</a>
        </div>
        <div className="copyright">
          <p>©2023 XYZ SCHOOL</p>
        </div>
      </footer>
    </div>
  );
};
