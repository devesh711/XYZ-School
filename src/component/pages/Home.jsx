import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import cover from "../../assets/cover.jpg";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Carousel showArrows={true} showThumbs={false}>
        <div>
          <img src={slider1} alt="Slider Image 1" />
        </div>
        <div>
          <img src={slider2} alt="Slider Image 2" />
        </div>
        <div>
          <img src={slider3} alt="Slider Image 3" />
        </div>
        <div>
          <img src={slider4} alt="Slider Image 4" />
        </div>
      </Carousel>
      <section className="announcements">
        <div className="announcement-container">
          <h2 className="announcement-heading">Announcements</h2>
          <ul className="announcement-list">
            <li className="announcement-item">
              <span className="announcement-date">[Date]</span> - [Announcement
              Content]
            </li>
            <li className="announcement-item">
              <span className="announcement-date">[Date]</span> - [Announcement
              Content]
            </li>
            {/* Add more announcements as needed */}
          </ul>
        </div>
      </section>
      <div className="homepage">
        <div className="background-image">
          <div className="content">
            <h1 className="school-name">XYZ School</h1>
            <p className="school-introduction">
              Welcome to XYZ School, where excellence in education meets a
              vibrant community. We are committed to nurturing young minds and
              preparing them for a bright future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
