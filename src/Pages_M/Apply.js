import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";
import ApplyLogin from "../Component_D/ApplyLogin";
import DesiredCourse from "../Component_D/DesiredCourse";
import ApplyPhoneNum from "../Component_D/ApplyPhoneNum";
import ApplyEmail from "../Component_D/ApplyEmail";
import ApplyBirthSelector from "../Component_D/ApplyBirthSelector";
import ApplyAddress from "../Component_D/ApplyAddress";
import ApplyPrevNextBtn from "../Component_D/ApplyPrevNextBtn";
import ApplySurvey from "../Component_D/ApplySurvey";
import ApplyPrivacyConsent from "../Component_D/ApplyPrivacyConsent";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxTwoContainer = styled.div`
  width: 100%;
  height: 130vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const TextSizeOne = styled.div`
  font-family: "NanumGothicExtraBold";
  font-size: 6vw;
  color: #101010;
  text-align: center;
`;

const TextSizeTwo = styled.div`
  font-family: "NanumGothic";
  font-size: 18px;
  color: #101010;
  margin-top: 3vh;
  margin-bottom: 5px;
`;

const ApplyBoxWrapper = styled.div`
  input,
  select {
    height: 2vw;
    min-height: 22px;
    border-width: 2px;
    border-top-color: rgb(200, 200, 200);
    border-left-color: rgb(200, 200, 200);
    border-right-color: rgb(180, 180, 180);
    border-bottom-color: rgb(180, 180, 180);
    outline: none;
    font-size: 15px;
  }
  input:focus-within,
  select:focus-visible {
    border-color: black;
  }
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5vw;
`;

const RadioButton = styled.input`
  width: 1.5vw;
  height: 1.5vw;
  cursor: pointer;
  border: 0.3vw solid #f6f6f6;
  padding: 0.5vw;
  -webkit-appearance: none;
  &:checked {
    background: #00887c;
    border: 0.3vw solid #f6f6f6;
  }
`;
const ApplyBlackButton = styled.button`
  all: unset;
  width: 40vw;
  height: 5vw;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Apply = ({ SetMenuState }) => {
  const device = "mobile";
  const [applyStep, setApplyStep] = useState(1);

  const [data, setData] = useState({
    course: "",
    name: "",
    phone: "",
    kakaoEmail: "",
    email: "",
    birth: "",
    address: "",
    detailedAddress: "",
  });
  const [surveyData, setSurveyData] = useState([]);
  const [consent, setConsent] = useState(false);

  const getName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // useEffect(() => {
  //   console.log(surveyData);
  // }, [surveyData]);

  return (
    <div
      style={{
        padding: "7vw",
        width: "100vw",
        marginTop: "15vw",
        marginBottom: "3vw",
        minHeight: "70vh",
        position: "relative",
        fontFamily: "NanumGothic",
      }}
    >
      {applyStep == 1 && (
        <ApplyLogin
          data={data}
          setData={setData}
          applyStep={applyStep}
          setApplyStep={setApplyStep}
        />
      )}

      {applyStep == 2 && (
        <DesiredCourse
          data={data}
          setData={setData}
          applyStep={applyStep}
          setApplyStep={setApplyStep}
        />
      )}

      {applyStep == 3 && (
        <>
          <TextSizeOne>
            {data.course == "모르겠어요" ? null : `${data.course} 과정`}{" "}
            지원하기
          </TextSizeOne>
          <ApplyBoxWrapper>
            <TextSizeTwo>이름</TextSizeTwo>
            <input
              type="text"
              autoFocus="autofocus"
              defaultValue={data.name ? data.name : ""}
              onChange={getName}
              style={{
                width: "30vw",
              }}
            />
            <TextSizeTwo>연락처</TextSizeTwo>
            <ApplyPhoneNum data={data} setData={setData} device={device} />

            {data.kakaoEmail ? null : (
              <>
                <TextSizeTwo>이메일</TextSizeTwo>
                <ApplyEmail data={data} setData={setData} device={device} />
              </>
            )}

            <TextSizeTwo>생년월일</TextSizeTwo>
            <ApplyBirthSelector data={data} setData={setData} device={device} />

            <TextSizeTwo>주소</TextSizeTwo>
            <ApplyAddress data={data} setData={setData} device={device} />
          </ApplyBoxWrapper>

          <ApplyPrevNextBtn
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            data={data}
            device={device}
          />
        </>
      )}

      {applyStep == 4 && (
        <>
          <ApplySurvey
            surveyData={surveyData}
            setSurveyData={setSurveyData}
            device={device}
          />
          <ApplyPrevNextBtn
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            surveyData={surveyData}
            device={device}
          />
        </>
      )}

      {applyStep == 5 && (
        <>
          <ApplyPrivacyConsent setConsent={setConsent} />
          <ApplyPrevNextBtn
            data={data}
            surveyData={surveyData}
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            consent={consent}
            device={device}
            SetMenuState={SetMenuState}
          />
        </>
      )}
    </div>
  );
};

export default Apply;
