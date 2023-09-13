import React from "react";
import "./contact.css";
import { FaMap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
export const Contact = () => {
  return (
    <div className="contact-container">
      <section className="section-p1 contact-header">
        <h2>
          <span>#</span>let's_talk
        </h2>
      </section>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>
              <FaMap />
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <FaEnvelope />
              <p>pdevesh699@gmail.com</p>
            </li>
            <li>
              <FaPhone />
              <p>90*******2</p>
            </li>
            <li>
              <FaClock />
              <p>Monday to Saturday: 9.00 am to 16.00 pm</p>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.31309998352!2d80.0422219503685!3d12.823032990909066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1674763604440!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We Love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="img web/me.png" alt="" />
            <p>
              <span>Devesh patel</span>Developer <br /> Phone:- 90*******2
              <br /> E-mail:- pdevesh699@gmail.com{" "}
            </p>
          </div>
          <div>
            <img src="img web/me.png" alt="" />
            <p>
              <span>Devesh patel</span>Developer <br /> Phone:- 90*******2
              <br /> E-mail:- pdevesh699@gmail.com{" "}
            </p>
          </div>
          <div>
            <img src="img web/me.png" alt="" />
            <p>
              <span>Devesh patel</span>Developer <br /> Phone:- 90*******2
              <br /> E-mail:- pdevesh699@gmail.com{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
