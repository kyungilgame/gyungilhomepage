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
import ApplyPhoneNum from "../Component_D/ApplyPhoneNum";
import Header from "../Component_D/Header";
import Footer from "../Component_D/Footer";

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
  font-family: "NanumGothicExtraBold";
  font-size: 3.5vw;
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
  max-width: 600px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5vw;
  margin: 0 auto;
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

const Apply = ({ SetMenuState, SetIsLoading, setIsApplying }) => {
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

  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [kakaoEmail, setKakaoEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [surveyData, setSurveyData] = useState([]);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    console.log("??????-", course);
    console.log("??????-", name);
    console.log("??????-", phone);
    console.log("??????-", email);
    console.log("??????-", kakaoEmail);
    console.log("??????-", birth);
    console.log("??????-", address);
    console.log("??????-", detailedAddress);
  }, [course, name, phone, email, kakaoEmail, birth, address, detailedAddress]);

  useEffect(() => {
    console.log(surveyData);
  }, [surveyData]);

  useEffect(() => {
    setIsApplying(true);
    return () => {
      setIsApplying(false);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          padding: "5vw",
          width: "63vw",
          marginTop: "15vw",
          marginBottom: "3vw",
          minHeight: "70vh",
          position: "relative",
          fontFamily: "NanumGothic",
        }}
      >
        {applyStep == 1 && (
          <ApplyLogin
            kakaoEmail={kakaoEmail}
            setKakaoEmail={setKakaoEmail}
            applyStep={applyStep}
            setApplyStep={setApplyStep}
          />
        )}

        {applyStep == 2 && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <DesiredCourse
              course={course}
              setCourse={setCourse}
              applyStep={applyStep}
              setApplyStep={setApplyStep}
            />
          </div>
        )}

        {applyStep == 3 && (
          <>
            <TextSizeOne>
              {course == "???????????????" ? null : `${course} ??????`} ????????????
            </TextSizeOne>
            <ApplyBoxWrapper>
              <TextSizeTwo>??????</TextSizeTwo>
              <input
                type="text"
                autoFocus="autofocus"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "10vw",
                }}
              />
              <TextSizeTwo>?????????</TextSizeTwo>
              <ApplyPhoneNum phone={phone} setPhone={setPhone} />

              {kakaoEmail ? null : (
                <>
                  <TextSizeTwo>?????????</TextSizeTwo>
                  <ApplyEmail email={email} setEmail={setEmail} />
                </>
              )}

              <TextSizeTwo>????????????</TextSizeTwo>
              <ApplyBirthSelector birth={birth} setBirth={setBirth} />

              <TextSizeTwo>??????</TextSizeTwo>
              <ApplyAddress
                address={address}
                setAddress={setAddress}
                detailedAddress={detailedAddress}
                setDetailedAddress={setDetailedAddress}
              />
            </ApplyBoxWrapper>

            <ApplyPrevNextBtn
              name={name}
              phone={phone}
              email={email}
              kakaoEmail={kakaoEmail}
              birth={birth}
              address={address}
              applyStep={applyStep}
              setApplyStep={setApplyStep}
            />
          </>
        )}
        {applyStep == 4 && (
          <>
            <ApplySurvey
              surveyData={surveyData}
              setSurveyData={setSurveyData}
            />
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
              course={course}
              name={name}
              phone={phone}
              email={email}
              kakaoEmail={kakaoEmail}
              birth={birth}
              address={address}
              detailedAddress={detailedAddress}
              surveyData={surveyData}
              applyStep={applyStep}
              setApplyStep={setApplyStep}
              consent={consent}
              SetMenuState={SetMenuState}
              SetIsLoading={SetIsLoading}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Apply;
