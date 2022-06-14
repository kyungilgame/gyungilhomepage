import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styledComponents from "styled-components";

const ApplyBirthSelector = ({ data, setData, device }) => {
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
    monthData.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    dayData.push(i);
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

  const DateOfBirth = styledComponents.div`
  display: flex;
  align-items: center;
  width: 25vw;
  min-width: ${device == "mobile" ? "70%" : ""};
  justify-content: space-between;

  input,
  select {
    text-align: end;
    padding-right: 5px;
  }
`;

  // 생년월일 값 합쳐주기
  useEffect(() => {
    const birth = tempYear + tempMonth + tempDay;
    if (birth.length == 8) {
      setData({ ...data, birth: birth });
    } else {
      setData({ ...data, birth: "" });
    }
    return () => {
      if (birth.length < 8) {
        setData({ ...data, birth: "" });
      }
    };
  }, [tempYear, tempMonth, tempDay]);

  return (
    <DateOfBirth>
      <input
        onChange={getBirth}
        type="text"
        name="year"
        maxLength="4"
        defaultValue={tempYear}
        style={{
          width: `${device == "mobile" ? "18vw" : "7vw"}`,
        }}
      />
      년
      <select
        className="asdf"
        onChange={getBirth}
        name="month"
        defaultValue={tempMonth}
        style={{
          width: "10vw",
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
        onChange={getBirth}
        name="day"
        defaultValue={tempDay}
        style={{
          width: "10vw",
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
    </DateOfBirth>
  );
};

export default ApplyBirthSelector;
