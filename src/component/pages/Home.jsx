import React from "react";
import cover from "../../assets/cover.jpg";

export const Home = () => {
  return (
    <>
      <div
        className="Cover-container"
        style={{
          position: "absolute",
          left: 0,
          top: "56px",
          width: "100vw",
          height: "100vh",
        }}
      >
        <img
          src={cover}
          alt="cover"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            opacity: "80%",
          }}
        />
      </div>
    </>
  );
};
