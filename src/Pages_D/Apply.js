import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";
import DesiredCourse from "../Component_D/DesiredCourse";
import ApplyPrevNextBtn from "../Component_D/ApplyPrevNextBtn";
import ApplyBirthSelector from "../Component_D/ApplyBirthSelector";
import ApplyAddressAPI from "../Component_D/ApplyAddressAPI";
import ApplySurvey from "../Component_D/ApplySurvey";
import ApplyPrivacyConsent from "../Component_D/ApplyPrivacyConsent";
import ApplyLogin from "../Component_D/ApplyLogin";

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
const ApplyContentsContainer = styled.div`
  width: 63vw;
  margin-top: 15vw;
  margin-bottom: 3vw;
  min-height: 84vh;
  position: relative;
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
`;

const ApplyBoxWrapper = styled.div`
  width: 100%;
  height: 70%;
  background-color: #f0f0f0;
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
  const [applyStep, setApplyStep] = useState(1);

  const [data, setData] = useState({
    course: "",
    name: "",
    phone: "",
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

  // 이메일
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

  //주소
  const getDetailedAddress = (e) => {
    setData({ ...data, detailedAddress: e.target.value });
  };

  return (
    <>
      {applyStep == 1 && (
        <>
          <ContentsBoxTwoContainer>
            <ApplyContentsContainer>
              <ApplyLogin applyStep={applyStep} setApplyStep={setApplyStep} />
              {/* <button
                onClick={qwer}
                style={{ width: "200px", height: "100px" }}
              >
                확인
              </button>
              <button
                onClick={asdf}
                style={{ width: "200px", height: "100px" }}
              >
                철회
              </button> */}
            </ApplyContentsContainer>
          </ContentsBoxTwoContainer>
        </>
      )}

      {applyStep == 2 && (
        <>
          <ContentsBoxTwoContainer>
            <ApplyContentsContainer>
              <DesiredCourse
                data={data}
                setData={setData}
                applyStep={applyStep}
                setApplyStep={setApplyStep}
              />
            </ApplyContentsContainer>
          </ContentsBoxTwoContainer>
        </>
      )}
      {applyStep == 3 && (
        <ContentsBoxTwoContainer>
          <ApplyContentsContainer>
            {/* <ContentsBoxOneContainer></ContentsBoxOneContainer> */}

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
                  border: "none",
                  width: "10vw",
                  height: "2vw",
                  backgroundColor: "#f6f6f6",
                }}
              />
              <TextSizeTwo style={{ marginTop: "1.5vw" }}>연락처</TextSizeTwo>
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
                    border: "none",
                    width: "7vw",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
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
                    border: "none",
                    width: "7vw",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
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
                    border: "none",
                    width: "7vw",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
                  }}
                />
              </div>
              <TextSizeTwo style={{ marginTop: "1.5vw" }}>이메일</TextSizeTwo>
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
                  name="email"
                  defaultValue={data.email}
                  onChange={getMail}
                  style={{
                    border: "none",
                    width: "13vw",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
                  }}
                />
                @
                <select
                  name="emailDomain"
                  defaultValue={data.emailDomain.slice(1)}
                  onChange={getMail}
                  style={{
                    border: "none",
                    backgroundColor: "#f6f6f6",
                    width: "10vw",
                    height: "2vw",
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

              <TextSizeTwo style={{ marginTop: "1.5vw" }}>생년월일</TextSizeTwo>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "25vw",
                  justifyContent: "space-between",
                }}
              >
                <ApplyBirthSelector data={data} setData={setData} />
              </div>

              <TextSizeTwo style={{ marginTop: "1.5vw" }}>주소</TextSizeTwo>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "25vw",
                  justifyContent: "space-between",
                }}
              >
                <input
                  style={{
                    border: "none",
                    width: "100%",
                    marginTop: "5px",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
                  }}
                  defaultValue={data.address}
                  disabled
                  type="text"
                  placeholder="주소"
                />
                <input
                  style={{
                    border: "none",
                    width: "100%",
                    margin: "5px 0",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
                  }}
                  onChange={getDetailedAddress}
                  type="text"
                  placeholder="상세주소"
                />
                <ApplyAddressAPI data={data} setData={setData} />
              </div>
            </ApplyBoxWrapper>

            <ApplyPrevNextBtn
              applyStep={applyStep}
              setApplyStep={setApplyStep}
              data={data}
            />
          </ApplyContentsContainer>
        </ContentsBoxTwoContainer>
      )}
      {applyStep == 4 && (
        <>
          <ApplyContentsContainer>
            <ApplySurvey
              surveyData={surveyData}
              setSurveyData={setSurveyData}
            />
            <ApplyPrevNextBtn
              applyStep={applyStep}
              setApplyStep={setApplyStep}
              surveyData={surveyData}
            />
          </ApplyContentsContainer>
        </>
      )}
      {applyStep == 5 && (
        <>
          <ApplyContentsContainer>
            <ApplyPrivacyConsent setConsent={setConsent} />
            <ApplyPrevNextBtn
              applyStep={applyStep}
              setApplyStep={setApplyStep}
              consent={consent}
            />
          </ApplyContentsContainer>
        </>
      )}
    </>
  );
};

export default Apply;
