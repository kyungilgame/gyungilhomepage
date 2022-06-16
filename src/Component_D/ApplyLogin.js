import "../Styles/css/App.css";
import React, { useEffect } from "react";
import styles from "./ApplyLogin.module.css";
import gyungilLogo from "../Image/gyungilLogo.png";
import kakaoTalkLogo from "../Image/kakao-talk.svg";

const ApplyLogin = ({ setKakaoEmail, setApplyStep }) => {
  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: "account_email",
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            setKakaoEmail(res.kakao_account.email);
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
          <img
            className={`${styles["KGA-logo"]}`}
            src={gyungilLogo}
            alt="(KGA-Logo)"
          />
        </div>
        <div className={`${styles["kakao_btn"]}`} onClick={kakaoLogin}>
          <img
            className={`${styles["kakao_logo"]}`}
            src={kakaoTalkLogo}
            alt="(카카오톡 로고)"
          />
          카카오톡으로 계정으로 진행하기
        </div>
        <div
          className={`${styles["email_btn"]}`}
          onClick={() => setApplyStep(2)}
        >
          이메일로 진행하기
        </div>
      </div>
    </>
  );
};

export default ApplyLogin;
