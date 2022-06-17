import "../Styles/css/App.css";
import React from "react";
import Header from "../Component_D/Header";
import Header_M from "../Component_M/Header";
import Footer from "../Component_D/Footer";
import Footer_M from "../Component_M/Footer";
import { useLocation } from "react-router-dom";
import NA_transition from "../Function/NA_transition";

const ApplySuccess = ({}) => {
  const device = useLocation().state.device;

  return (
    <>
      {device === "mobile" ? <Header_M /> : <Header />}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10vh",
          padding: "5vw",
          width: `${device === "mobile" ? "100vw" : "63vw"}`,
          marginTop: "15vw",
          marginBottom: "3vw",
          minHeight: "70vh",
          position: "relative",
          fontFamily: "NanumGothic",
        }}
      >
        <div>지원해주셔서 감사합니다.</div>
        <div>
          막연함의 끝, 완전한 확신의 준비! 경일게임아카데미에서 시작하세요.
        </div>
      </div>
      <NA_transition />
      {device === "mobile" ? <Footer_M /> : <Footer />}
    </>
  );
};

export default ApplySuccess;
