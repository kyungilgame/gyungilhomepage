import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";
// import styles from "./ApplyEmail.module.css";

const ApplyEmail = ({ data, setData }) => {
  const inputEmail = document.querySelector(".input-email");
  const inputDomain = document.querySelector(".input-domain");

  const getMail = (e) => {
    if (e.target.name == "email") {
      setData({
        ...data,
        email: e.target.value,
      });
    } else if (e.target.name == "emailDomain") {
      console.log(e.target.value);
      if (!e.target.value) {
        setData({
          ...data,
          emailDomain: "",
        });
      } else {
        setData({
          ...data,
          emailDomain: "@" + e.target.value,
        });
      }
    }
  };

  useEffect(() => {
    if (data && inputEmail) {
      if (!data.email) {
        setData({
          ...data,
          email: inputEmail.defaultValue,
        });
      }
    }
  }, [inputEmail]);
  useEffect(() => {
    if (data && inputDomain) {
      if (!data.emailDomain) {
        setData({
          ...data,
          emailDomain: "@" + inputDomain.value,
        });
      }
    }
  }, [inputDomain]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "25vw",
          justifyContent: "space-between",
        }}
      >
        <input
          className="input-email"
          type="text"
          name="email"
          defaultValue={
            data && data.email ? data.email : data.kakaoEmail.split("@")[0]
          }
          onChange={getMail}
          style={{
            width: "13vw",
          }}
        />
        @
        <select
          className="input-domain"
          name="emailDomain"
          defaultValue={
            data && data.emailDomain
              ? data.emailDomain.split("@")[1]
              : data.kakaoEmail.split("@")[1]
          }
          onChange={getMail}
          style={{
            width: "10vw",
          }}
        >
          <option value="">이메일</option>
          <option>daum.net</option>
          <option>gmail.com</option>
          <option>hanmail.net</option>
          <option>icloud.com</option>
          <option>kakao.com</option>
          <option>mac.com</option>
          <option>me.com</option>
          <option>naver.com</option>
          <option>nate.com</option>
        </select>
      </div>
    </>
  );
};

export default ApplyEmail;
