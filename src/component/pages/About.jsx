import React from "react";
import "./about.css";
import "../../index.css";
import school from "../../assets/school.png";

export const About = () => {
  return (
    <div>
      <section id="shop-banner" className="section-p1 about-header">
        <h2>
          <span>#</span>About us
        </h2>
      </section>
      <section id="about-head" className="section-p1">
        <img src={school} alt="" />
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
    </div>
  );
};
