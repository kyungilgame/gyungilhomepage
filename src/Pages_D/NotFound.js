import "../Styles/css/App.css";
import React from "react";
import Header from "../Component_D/Header";
import Header_M from "../Component_M/Header";
import Footer from "../Component_D/Footer";
import Footer_M from "../Component_M/Footer";

const NotFound = ({ device }) => {
  return (
    <>
      {device === "mobile" ? <Header_M /> : <Header />}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          padding: "5vw",
          width: `${device === "mobile" ? "100vw" : "63vw"}`,
          marginTop: "2vh",
          marginBottom: "3vw",
          minHeight: "70vh",
          position: "relative",
          fontFamily: "NanumGothic",
          fontSize: "20px",
        }}
      >
        <h2>404</h2>
        <div> 페이지를 찾을 수 없습니다</div>
      </div>
      {device === "mobile" ? <Footer_M /> : <Footer />}
    </>
  );
};

export default NotFound;
