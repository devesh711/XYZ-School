import React from "react";
import { Curriculum } from "./Curriculum";
import "./Academics.css";

export const Academics = () => {
  return (
    <>
      <div className="section-p1 banner">
        <h2>
          <span style={{ color: "red" }}>#</span>Academics
        </h2>
      </div>
      <Curriculum />
    </>
  );
};
