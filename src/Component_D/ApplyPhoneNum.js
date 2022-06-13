import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";

const ApplyPhoneNum = ({ data, setData }) => {
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
  useEffect(() => {
    setData({
      ...data,
      phone: tempPhoneNumber1 + tempPhoneNumber2 + tempPhoneNumber3,
    });
  }, [tempPhoneNumber1, tempPhoneNumber2, tempPhoneNumber3]);

  return (
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
        type="text"
        name="phone1"
        maxLength="3"
        defaultValue={data.phone.substring(0, 3)}
        onChange={getPhoneNumber}
        style={{
          width: "7vw",
        }}
      />
      <div
        style={{
          width: "1.2vw",
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
          width: "7vw",
        }}
      />
      <div
        style={{
          width: "1.2vw",
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
          width: "7vw",
        }}
      />
    </div>
  );
};

export default ApplyPhoneNum;
