import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";
import DesiredCourse from "../Component_D/DesiredCourse";
import ApplyPrevNextBtn from "../Component_D/ApplyPrevNextBtn";
import ApplyBirthSelector from "../Component_D/ApplyBirthSelector";
import ApplyAddressAPI from "../Component_D/ApplyAddressAPI";
import ApplySurvey from "../Component_D/ApplySurvey";
import PrivacyConsent from "../Component_D/PrivacyConsent";

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
  margin-top: 15vw;
  margin-bottom: 3vw;
`;

const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.5vw;
  color: #101010;
`;

const ApplyBoxWrapper = styled.div`
  width: 50%;
  height: 70%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
    course: "1",
    name: "2",
    phone: "3",
    email: "4",
    birth: "5",
    address: "6",
    detailedAddress: "7",
  });
  // const [data, setData] = useState({
  //   course: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  //   birth: "",
  //   address: "",
  //   detailedAddress: "",
  // });
  const [tempPhoneNumber1, setTempPhoneNumber1] = useState("");
  const [tempPhoneNumber2, setTempPhoneNumber2] = useState("");
  const [tempPhoneNumber3, setTempPhoneNumber3] = useState("");
  const [tempMailId, setTempMailId] = useState("");
  const [tempMailDomain, setTempMailDomain] = useState("");
  const [surveyData, setSurveyData] = useState([]);

  // handleChange: function (evt) {
  //     // this.setState({ value: evt.target.value.substr(0, 100) });
  //   }

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: "profile_nickname",
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            console.log(res);
            setApplyStep(2);
          },
        });
      },
    });
  }

  // 동의 내역 조회
  function qwer() {
    window.Kakao.API.request({
      url: "/v2/user/scopes",
      // data: {
      //   scopes: ["profile_nickname"],
      // },
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    window.Kakao.API.request({
      url: "/v2/user/me",
      data: {
        property_keys: ["kakao_account.email", "kakao_account.gender"],
      },
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }

  // 동의 철회
  function asdf() {
    window.Kakao.API.request({
      url: "/v2/user/revoke/scopes",
      data: {
        scopes: ["account_email"],
      },
      success: function (response) {
        console.log(4444);
        console.log(response);
      },
      fail: function (error) {
        console.log(1234);
        console.log(error);
      },
    });
  }
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
      setTempMailId(e.target.value);
    } else if (e.target.name == "emailDomain") {
      setTempMailDomain(e.target.value);
    }
  };
  useEffect(() => {
    if (!tempMailId && !tempMailDomain) return;

    setData({
      ...data,
      email: tempMailId + "@" + tempMailDomain,
    });
  }, [tempMailId, tempMailDomain]);

  //주소
  const getDetailedAddress = (e) => {
    setData({ ...data, detailedAddress: e.target.value });
  };

  return (
    <>
      {applyStep == 1 && (
        <>
          <button
            // href="javascript:kakaoLogin();"
            onClick={kakaoLogin}
            style={{ width: "200px", height: "200px" }}
          >
            카카오로 계속하기
          </button>
          <button onClick={qwer} style={{ width: "200px", height: "200px" }}>
            확인
          </button>
          <button onClick={asdf} style={{ width: "200px", height: "200px" }}>
            철회
          </button>
        </>
      )}

      {applyStep == 2 && (
        <>
          <ContentsBoxTwoContainer>
            <div
              style={{ width: "63vw", marginTop: "15vw", marginBottom: "3vw" }}
            >
              <DesiredCourse
                data={data}
                setData={setData}
                applyStep={applyStep}
                setApplyStep={setApplyStep}
              />
            </div>
          </ContentsBoxTwoContainer>
        </>
      )}
      {applyStep == 3 && (
        <div style={{ width: "63vw", marginTop: "15vw", marginBottom: "3vw" }}>
          {/* <ContentsBoxOneContainer></ContentsBoxOneContainer> */}
          <ContentsBoxTwoContainer>
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
                value={data.name}
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
                  value={tempPhoneNumber1}
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
                  value={tempPhoneNumber2}
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
                  autoFocus="autofocus"
                  name="phone3"
                  maxLength="4"
                  value={tempPhoneNumber3}
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
                  autoFocus="autofocus"
                  name="email"
                  value={tempMailId}
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
                  onChange={getMail}
                  style={{
                    border: "none",
                    backgroundColor: "#f6f6f6",
                    width: "10vw",
                    height: "2vw",
                  }}
                >
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hanmail.com">hanmail.com</option>
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
                  value={data.address}
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
          </ContentsBoxTwoContainer>
          <ApplyPrevNextBtn
            applyStep={applyStep}
            setApplyStep={setApplyStep}
            data={data}
          />
        </div>
      )}
      {applyStep == 4 && (
        <>
          <div
            style={{ width: "63vw", marginTop: "15vw", marginBottom: "3vw" }}
          >
            <ApplySurvey
              surveyData={surveyData}
              setSurveyData={setSurveyData}
            />
            <ApplyPrevNextBtn
              applyStep={applyStep}
              setApplyStep={setApplyStep}
              surveyData={surveyData}
            />
          </div>
        </>
      )}
      {applyStep == 5 && (
        <>
          <div
            style={{ width: "63vw", marginTop: "15vw", marginBottom: "3vw" }}
          >
            <PrivacyConsent />
            <ApplyPrevNextBtn
              applyStep={applyStep}
              setApplyStep={setApplyStep}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Apply;
