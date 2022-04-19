import React, { useState } from "react";
import BackVideoFile from "../Video/MVI_7450_5.mp4";

const BackVideo = () => {
  return (
    <video
      loop
      autoPlay
      muted
      width={"100%"}
      style={{
        zIndex: "-1",
        backgroundColor: "transparent",
        position: "absolute",
      }}
    >
      <source src={BackVideoFile} type="video/mp4" />
    </video>
  );
};

export default BackVideo;
