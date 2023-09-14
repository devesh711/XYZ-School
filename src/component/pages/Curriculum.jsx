import React from "react";
import "./curriculum.css";
import PE from "../../assets/PE.svg";
import library from "../../assets/library.svg";
import skills from "../../assets/skills.svg";

export const Curriculum = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "40px",
          fontSize: "32px",
          fontFamily: "Helvetica",
        }}
      >
        CORE CURRICULUM
      </h1>
      <div className="curriculum">
        <section className="section">
          <img src={PE} alt="PE" />
          <div className="text">
            <h2>Physical Education</h2>
            <p>
              At Our school, we believe in nurturing not only the minds but also
              the bodies of our students. Our state-of-the-art PE curriculum is
              designed to inspire a lifelong love for physical fitness and
              well-being.
            </p>
          </div>
        </section>

        <section className="section">
          <img src={library} alt="library" />
          <div className="text">
            <h2>Standard Library Programme</h2>
            <p>
              We believe that a love for reading and access to a wealth of
              knowledge are the cornerstones of a well-rounded education. Our
              state-of-the-art library is a treasure trove of books,
              periodicals, and digital resources, carefully curated to cater to
              diverse interests and academic needs.
            </p>
          </div>
        </section>

        <section className="section">
          <img src={skills} alt="skills" />
          <div className="text">
            <h2>Life Skills Programme</h2>
            <p>
              We understand that academic success is just one facet of a
              well-rounded education. Our specialized programme equips students
              with the practical, real-world skills they need to thrive in
              today's complex society.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
