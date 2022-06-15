import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";

const ApplyEmail = ({ email, setEmail, data, setData, device }) => {
  const [emailId, setEmailId] = useState(email ? email.split("@")[0] : "");
  const [emailDomain, setEmailDomain] = useState(
    email ? email.split("@")[1] : ""
  );

  const getMailId = (e) => {
    setEmailId(e.target.value);
  };
  const getMailDomain = (e) => {
    setEmailDomain(e.target.value);
  };

  useEffect(() => {
    if (!(emailId && emailDomain)) {
      setEmail("");
    } else if (emailId && emailDomain) {
      setEmail(emailId + "@" + emailDomain);
      // setData({ ...data, email: emailId + "@" + emailDomain });
    }
  }, [emailId, emailDomain]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "25vw",
          minWidth: `${device == "mobile" ? "70%" : ""}`,
          justifyContent: "space-between",
        }}
      >
        <input
          className="input-email"
          type="text"
          name="emailId"
          defaultValue={emailId}
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
          style={{
            width: `${device == "mobile" ? "45%" : "13vw"}`,
          }}
        />
        @
        <select
          className="input-domain"
          name="emailDomain"
          defaultValue={emailDomain}
          onChange={(e) => {
            setEmailDomain(e.target.value);
          }}
          style={{
            width: `${device == "mobile" ? "45%" : "10vw"}`,
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
