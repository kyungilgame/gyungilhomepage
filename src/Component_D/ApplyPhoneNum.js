import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";

const ApplyPhoneNum = ({ data, setData, device }) => {
  const [tempPhoneNumber1, setTempPhoneNumber1] = useState("");
  const [tempPhoneNumber2, setTempPhoneNumber2] = useState("");
  const [tempPhoneNumber3, setTempPhoneNumber3] = useState("");

  const getPhoneNumber = (e) => {
    if (e.target.name == "phone1") {
      setTempPhoneNumber1(e.target.value);
    } else if (e.target.name == "phone2") {
      setTempPhoneNumber2(e.target.value);
    } else if (e.target.name == "phone3") {
      setTempPhoneNumber3(e.target.value);
    }
  };

  // 입력한 전화번호 11자리 충족되면 데이터에 담기
  useEffect(() => {
    const phoneNum = tempPhoneNumber1 + tempPhoneNumber2 + tempPhoneNumber3;
    if (phoneNum.length < 11) {
      setData({
        ...data,
        phone: "",
      });
    } else if (phoneNum.length == 11) {
      setData({
        ...data,
        phone: phoneNum,
      });
    }
  }, [tempPhoneNumber1, tempPhoneNumber2, tempPhoneNumber3]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minWidth: "70%",
        width: `${device == "mobile" ? "50vw" : "25vw"}`,
        gap: "8px",
      }}
    >
      <input
        type="text"
        name="phone1"
        maxLength="3"
        defaultValue={data.phone.substring(0, 3)}
        onChange={getPhoneNumber}
        style={{
          width: `${device == "mobile" ? "30%" : "7vw"}`,
        }}
      />
      <div
        style={{
          width: "1.2vw",
          minWidth: "10px",
          height: "0.2vw",
          backgroundColor: "#101010",
        }}
      />
      <input
        type="text"
        name="phone2"
        maxLength="4"
        defaultValue={data.phone.substring(3, 7)}
        onChange={getPhoneNumber}
        style={{
          width: `${device == "mobile" ? "30%" : "7vw"}`,
        }}
      />
      <div
        style={{
          width: "1.2vw",
          minWidth: "10px",
          height: "0.2vw",
          backgroundColor: "#101010",
        }}
      />
      <input
        type="text"
        name="phone3"
        maxLength="4"
        defaultValue={data.phone.substring(7, 11)}
        onChange={getPhoneNumber}
        style={{
          width: `${device == "mobile" ? "30%" : "7vw"}`,
        }}
      />
    </div>
  );
};

export default ApplyPhoneNum;
