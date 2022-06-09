import "../Styles/css/App.css";
import React, { useEffect } from "react";
import styles from "./ApplyLogin.module.css";
import gyungilBlack from "../Image/gyungilBlack.png";
import kakaoTalkLogo from "../Image/kakao-talk.svg";

const ApplyLogin = ({ applyStep, setApplyStep }) => {
  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: "profile_nickname",
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            setApplyStep(2);
          },
        });
      },
    });
  }

  return (
    <>
      <div className={`${styles["container"]}`}>
        <div>
          <img src={gyungilBlack} />
        </div>
        <div>내 모습이 보이지 않아</div>
        <button
          className={`${styles["kakao_btn"]}`}
          onClick={kakaoLogin}
          style={{ width: "200px", height: "100px" }}
        >
          <img
            className={`${styles["kakao_logo"]}`}
            src={kakaoTalkLogo}
            alt="(카카오톡 로고)"
          />
          카카오로 인증하고 계속하기
        </button>
      </div>
    </>
  );
};

export default ApplyLogin;
