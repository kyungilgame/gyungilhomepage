import React, { useEffect } from "react";
import KakaoMapScript from "./KakaoMapScript";

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "100%",
        zIndex: "1",
      }}
    ></div>
  );
}
