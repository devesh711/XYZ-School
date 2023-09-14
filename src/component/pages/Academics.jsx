import React from "react";
import { Curriculum } from "./Curriculum";
import "./Academics.css";
import { TimeTable } from "./TimeTable";

export const Academics = () => {
  return (
    <>
      <div className="section-p1 banner">
        <h1 style={{ color: "white" }}>
          <span style={{ color: "red" }}>#</span>Academics
        </h1>
      </div>
      <Curriculum />
      <TimeTable />
      <div className="download-container">
        <h2>Download PDFs</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a
              href="/path-to-your-pdf-file-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Fees
            </a>
          </li>
          <li>
            <a
              href="/path-to-your-pdf-file-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Calender
            </a>
          </li>
          <li>
            <a
              href="/path-to-your-pdf-file-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Year Book
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
