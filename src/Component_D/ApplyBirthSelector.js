import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./ApplyBirthSelector.module.css";

const ApplyBirthSelector = ({ birth, setBirth, data, setData, device }) => {
  const [tempYear, setTempYear] = useState(birth ? birth.substring(0, 4) : "");
  const [tempMonth, setTempMonth] = useState(
    birth ? birth.substring(4, 6) : ""
  );
  const [tempDay, setTempDay] = useState(birth ? birth.substring(6, 8) : "");

  const monthData = [];
  const dayData = [];

  for (let i = 1; i <= 12; i++) {
    monthData.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    dayData.push(i);
  }

  // 생년월일 값 합쳐주기
  useEffect(() => {
    const tempBirth = tempYear + tempMonth + tempDay;
    if (tempBirth.length < 8) {
      setBirth("");
    } else if (tempBirth.length == 8) {
      setBirth(tempBirth);
    }
  }, [tempYear, tempMonth, tempDay]);

  return (
    <div
      className={`${styles["birth-box"]}`}
      style={{
        minWidth: `${device == "mobile" ? "70%" : "100%"}`,
      }}
    >
      <input
        onChange={(e) => {
          setTempYear(e.target.value);
        }}
        type="text"
        name="year"
        maxLength="4"
        defaultValue={tempYear}
        style={{
          width: `${device == "mobile" ? "18vw" : "30%"}`,
        }}
      />
      년
      <select
        onChange={(e) => {
          setTempMonth(e.target.value);
        }}
        name="month"
        defaultValue={tempMonth}
        style={{
          width: "30%",
        }}
      >
        <option></option>
        {monthData.length &&
          monthData.map((month) => (
            <option
              value={month < 10 ? "0" + `${month}` : `${month}`}
              key={month}
            >
              {month}
            </option>
          ))}
      </select>
      월
      <select
        onChange={(e) => {
          setTempDay(e.target.value);
        }}
        name="day"
        defaultValue={tempDay}
        style={{
          width: "30%",
        }}
      >
        <option></option>
        {dayData.length &&
          dayData.map((day) => (
            <option value={day < 10 ? "0" + `${day}` : `${day}`} key={day}>
              {day}
            </option>
          ))}
      </select>
      일
    </div>
  );
};

export default ApplyBirthSelector;
