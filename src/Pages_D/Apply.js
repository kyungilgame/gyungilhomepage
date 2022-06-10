import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";
import DesiredCourse from "../Component_D/DesiredCourse";
import ApplyPrevNextBtn from "../Component_D/ApplyPrevNextBtn";
import ApplyBirthSelector from "../Component_D/ApplyBirthSelector";
import ApplyAddress from "../Component_D/ApplyAddress";
import ApplySurvey from "../Component_D/ApplySurvey";
import ApplyPrivacyConsent from "../Component_D/ApplyPrivacyConsent";
import ApplyLogin from "../Component_D/ApplyLogin";
import ApplyEmail from "../Component_D/ApplyEmail";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 8vw;
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
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
  text-align: center;
  // margin-top: 15vw;
  // margin-bottom: 3vw;
`;

const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 18px;
  color: #101010;
  margin-top: 3vh;
  margin-bottom: 5px;
`;

const ApplyBoxWrapper = styled.div`
  input,
  select {
    height: 2vw;
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
  // background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: start;
  padding: 5vw;
  // font-size: 16px;
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
  width: 20vw;
  height: 3vw;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Apply = () => {
  const ApplyContentsContainer = styled.div`
    padding: 5vw;
    width: 63vw;
    margin-top: 15vw;
    margin-bottom: 3vw;
    min-height: 70vh;
    position: relative;

    border: 2px solid #101010;
    box-shadow: 5px 5px 5px #101010;
  `;
  const [applyStep, setApplyStep] = useState(1);

  const [data, setData] = useState({
    course: "",
    name: "",
    phone: "",
    kakaoEmail: "",
    email: "",
    emailDomain: "",
    birth: "",
    address: "",
    detailedAddress: "",
  });
  const [surveyData, setSurveyData] = useState([]);
  const [consent, setConsent] = useState(false);

  const [tempPhoneNumber1, setTempPhoneNumber1] = useState("");
  const [tempPhoneNumber2, setTempPhoneNumber2] = useState("");
  const [tempPhoneNumber3, setTempPhoneNumber3] = useState("");

  /* input값 받아오는 함수들 */

  // 이름
  const getName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  // 연락처
  const getPhoneNumber = (e) => {
    // if (!tempPhoneNumber1 && tempPhoneNumber2 && tempPhoneNumber3) return;
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
    <ApplyContentsContainer>
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
              name="name"
              defaultValue={data.name}
              onChange={getName}
              style={{
                width: "10vw",
              }}
            />
            <TextSizeTwo>연락처</TextSizeTwo>
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
                defaultValue={tempPhoneNumber1}
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
                defaultValue={tempPhoneNumber2}
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
                defaultValue={tempPhoneNumber3}
                onChange={getPhoneNumber}
                style={{
                  width: "7vw",
                }}
              />
            </div>

            <TextSizeTwo>이메일</TextSizeTwo>
            <ApplyEmail data={data} setData={setData} />

            <TextSizeTwo>생년월일</TextSizeTwo>
            <ApplyBirthSelector data={data} setData={setData} />

            <TextSizeTwo>주소</TextSizeTwo>
            <ApplyAddress data={data} setData={setData} />
          </ApplyBoxWrapper>

          <ApplyPrevNextBtn
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            data={data}
          />
        </>
      )}
      {applyStep == 4 && (
        <>
          <ApplySurvey surveyData={surveyData} setSurveyData={setSurveyData} />
          <ApplyPrevNextBtn
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            surveyData={surveyData}
          />
        </>
      )}
      {applyStep == 5 && (
        <>
          <ApplyPrivacyConsent setConsent={setConsent} />
          <ApplyPrevNextBtn
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            consent={consent}
          />
        </>
      )}
    </ApplyContentsContainer>
  );
};

export default Apply;
