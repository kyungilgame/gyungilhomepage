import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useEffect, useState } from "react";

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
  height: 90vw;
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
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({ name: "", age: "", phone: "", email: "" });

  // handleChange: function (evt) {
  //     // this.setState({ value: evt.target.value.substr(0, 100) });
  //   }

  useEffect(() => {
    const script = document.createElement("script");
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
            setIsLogin(true);
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
  }

  // 동의 철회
  function asdf() {
    window.Kakao.API.request({
      url: "/v2/revoke/scopes",
      data: {
        scopes: ["profile_nickname"],
      },
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }

  return (
    <>
      {isLogin ? (
        <>
          <ContentsBoxOneContainer></ContentsBoxOneContainer>
          <ContentsBoxTwoContainer>
            <TextSizeOne>상담 신청서</TextSizeOne>
            <ApplyBoxWrapper>
              <TextSizeTwo>이름</TextSizeTwo>
              <input
                type="text"
                autofocus="autofocus"
                // onChange={this.handleChange}
                style={{
                  border: "none",
                  width: "10vw",
                  height: "2vw",
                  backgroundColor: "#f6f6f6",
                }}
              />
              <TextSizeTwo style={{ marginTop: "1.5vw" }}>나이</TextSizeTwo>
              <input
                type="text"
                autofocus="autofocus"
                // onChange={this.handleChange}
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
                  autofocus="autofocus"
                  // onChange={this.handleChange}
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
                  autofocus="autofocus"
                  // onChange={this.handleChange}
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
                  autofocus="autofocus"
                  // onChange={this.handleChange}
                  style={{
                    border: "none",
                    width: "7vw",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
                  }}
                />
              </div>
              <TextSizeTwo style={{ marginTop: "1.5vw" }}>메일주소</TextSizeTwo>
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
                  autofocus="autofocus"
                  // onChange={this.handleChange}
                  style={{
                    border: "none",
                    width: "13vw",
                    height: "2vw",
                    backgroundColor: "#f6f6f6",
                  }}
                />
                @
                <select
                  name="emailDomail"
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
              <TextSizeTwo style={{ marginTop: "1.5vw" }}>희망분야</TextSizeTwo>
              <select
                name="emailDomail"
                style={{
                  border: "none",
                  backgroundColor: "#f6f6f6",
                  width: "25vw",
                  height: "2vw",
                }}
              >
                <option value="메타버스">메타버스</option>
                <option value="블록체인">블록체인</option>
                <option value="게임기획">게임기획</option>
              </select>
              <TextSizeTwo style={{ marginTop: "1.5vw" }}>메시지</TextSizeTwo>
              <textarea
                style={{
                  border: "none",
                  width: "40vw",
                  height: "15vw",
                  resize: "none",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "1vw",
                }}
              >
                <RadioButton type="radio" />
                <text
                  style={{
                    fontFamily: "SEBANG-Gothic-Bold",
                    fontSize: "1vw",
                    color: "#101010",
                    marginLeft: "0.5vw",
                  }}
                >
                  개인정보취급방침
                </text>
                <text
                  style={{
                    fontFamily: "SEBANG-Gothic-Regular",
                    fontSize: "1vw",
                    color: "#101010",
                  }}
                >
                  에 등의합니다.
                </text>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginTop: "5vw",
                }}
              >
                <ApplyBlackButton>
                  <text
                    style={{
                      color: "#f6f6f6",
                      fontFamily: "SEBANG-Gothic-Bold",
                      fontSize: "1.7vw",
                    }}
                  >
                    제출하기
                  </text>
                  <text
                    style={{
                      color: "#f6f6f6",
                      fontFamily: "SEBANG-Gothic-Bold",
                      fontSize: "1.7vw",
                      marginLeft: "1.5vw",
                    }}
                  >{`>`}</text>
                </ApplyBlackButton>
              </div>
            </ApplyBoxWrapper>
          </ContentsBoxTwoContainer>
        </>
      ) : (
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
    </>
  );
};

export default Apply;
