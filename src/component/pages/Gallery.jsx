import React from "react";

export const Gallery = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: "0",
      }}
    >
      <iframe
        style={{
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LlCwHnp3kL4?si=k69TTswU8ux4_7kp"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
