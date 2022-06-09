import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";

const ApplyBirthSelector = ({ data, setData }) => {
  const [tempYear, setTempYear] = useState(
    data.birth ? data.birth.substring(0, 4) : ""
  );
  const [tempMonth, setTempMonth] = useState(
    data.birth ? data.birth.substring(4, 6) : ""
  );
  const [tempDay, setTempDay] = useState(
    data.birth ? data.birth.substring(6, 8) : ""
  );

  const monthData = [];
  const dayData = [];

  for (let i = 1; i <= 12; i++) {
    if (i < 10) {
      monthData.push("0" + `${i}`);
    } else {
      monthData.push(`${i}`);
    }
  }
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      dayData.push("0" + `${i}`);
    } else {
      dayData.push(`${i}`);
    }
  }

  // 생년월일 각 값들 담기
  const getBirth = (e) => {
    console.log(e.target.value);
    if (e.target.name == "year") {
      setTempYear(e.target.value);
    } else if (e.target.name == "month") {
      setTempMonth(e.target.value);
    } else if (e.target.name == "day") {
      setTempDay(e.target.value);
    }
  };

  // 생년월일 값 합쳐주기
  useEffect(() => {
    const birth = tempYear + tempMonth + tempDay;
    if (birth.length == 8) {
      setData({ ...data, birth: birth });
    }
    return () => {
      if (birth.length < 8) {
        setData({ ...data, birth: "" });
      }
    };
  }, [tempYear, tempMonth, tempDay]);

  // 생년월일 값 합쳐주기
  useEffect(() => {
    console.log(data.birth);
  }, [data.birth]);

  return (
    <>
      <input
        onChange={getBirth}
        type="text"
        name="year"
        maxLength="4"
        defaultValue={data && data.birth.substring(0, 4)}
        style={{
          border: "none",
          width: "7vw",
          height: "2vw",
          backgroundColor: "#f6f6f6",
        }}
      />
      년
      <select
        onChange={getBirth}
        name="month"
        defaultValue={data && data.birth.substring(4, 6)}
        style={{
          border: "none",
          backgroundColor: "#f6f6f6",
          width: "10vw",
          height: "2vw",
        }}
      >
        <option></option>
        {monthData.length &&
          monthData.map((month, index) => <option key={index}>{month}</option>)}
      </select>
      월
      <select
        onChange={getBirth}
        name="day"
        defaultValue={data && data.birth.substring(6, 8)}
        style={{
          border: "none",
          backgroundColor: "#f6f6f6",
          width: "10vw",
          height: "2vw",
        }}
      >
        <option></option>
        {dayData.length &&
          dayData.map((day, index) => <option key={index}>{day}</option>)}
      </select>
      일
    </>
  );
};

export default ApplyBirthSelector;
