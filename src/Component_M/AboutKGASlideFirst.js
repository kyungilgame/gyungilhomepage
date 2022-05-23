import React from "react";
import styled from "styled-components";

import Kimjaeyeon from "../Image/Empoloee/Kimjaeyeon.png";
import Parkbyungjun from "../Image/Empoloee/Parkbyungjun.png";
import Seohyeokjun from "../Image/Empoloee/Seohyeokjun.png";
import YangHyunseok from "../Image/Empoloee/YangHyunseok.png";

import Draggable from "react-draggable";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

const SlideColumnWrapper = styled.div`
  width: 200%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f6f6f6;
`;

const ItemWrapper = styled.div`
  width: 25%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ImageWrapper = styled.div`
  width: 50vw;
  height: 65vw;
  margin-top: 2vw;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;

const TextOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 6vw;
  color: #101010;
`;

const TextTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2.5vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2.5vw;
  color: #101010;
  width: 90%;
  height: 30%;
  margin-top: 0.2vw;
`;

export default function AboutKGASlideFirst() {
  return (
    <>
      <Draggable axis="x">
        <SlideWrapper>
          <SlideColumnWrapper>
            <ItemWrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "95%",
                  height: "95%",
                }}
              >
                <ImageWrapper Image={Parkbyungjun}></ImageWrapper>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextOne>박병준</TextOne>
                  <TextTwo>대표</TextTwo>
                </div>
              </div>

              <div
                style={{
                  width: "90%",
                  height: "0.2vw",
                  backgroundColor: "#lightgray",
                  marginTop: "0.5vw",
                }}
              ></div>
              <TextBox>
                직업 교육에 거대한 변화의 물결이 오고 있습니다. 이 거대한 변화의
                물결에 KGA가 다시 한번 항해의 닻을 올렸습니다. 지금까지 이룬
                것들이 최선이라 자만하지 않고 늘 고민하고 연구하며 계속 답을
                찾아가려고 합니다. 그러나 우리의 목표는 변함없습니다. 이 시대에
                선한 영향력을 흘려 보내는 기업, 이 변화를 이끌어가는 기업으로
                나아가고자 합니다. 그리고 함께 답을 찾아가는데 늘 열려있습니다.
              </TextBox>
            </ItemWrapper>
            <ItemWrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "95%",
                  height: "95%",
                }}
              >
                <ImageWrapper Image={YangHyunseok}></ImageWrapper>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextOne>양현석</TextOne>
                  <TextTwo>원장</TextTwo>
                </div>
              </div>

              <div
                style={{
                  width: "90%",
                  height: "0.2vw",
                  backgroundColor: "#lightgray",
                  marginTop: "0.5vw",
                }}
              ></div>
              <TextBox>
                20년이 넘는 기간 동안 현장과 교육계에서 활동했습니다.
                게임/블록체인/메타버스가 사람들의 삶의 경험을 바꾸어 나가는
                21세기의 예술이자 철학이 될 수 있다고 생각합니다. 교육자로서의
                정체성과 콘텐츠 크리에이터로서의 정체성 모두를 유지하고자 날마다
                고군분투 중이며, KGA의 모든 멤버들도 현업에 강한 사명감 있는
                교육자로 만들기를 원합니다.
              </TextBox>
            </ItemWrapper>
            <ItemWrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "95%",
                  height: "95%",
                }}
              >
                <ImageWrapper Image={Kimjaeyeon}></ImageWrapper>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextOne>김재연</TextOne>
                  <TextTwo>부원장</TextTwo>
                </div>
              </div>

              <div
                style={{
                  width: "90%",
                  height: "0.2vw",
                  backgroundColor: "#lightgray",
                  marginTop: "0.5vw",
                }}
              ></div>
              <TextBox>
                게임 개발과 인연을 맺은 지 어느덧 30년, 우리나라 게임 기획자의
                1%가 저의 제자입니다. 항상 연구하고 시행착오를 극복하기 위해
                노력했기에 가능했습니다. 인생의 중요한 시기에 취업을 위해 KGA를
                찾아오는 학생들의 간절함을 이해 합니다. 그렇기에 "저는 KGA에서
                교육을 받았습니다"라는 취업 만능 열쇠를 만듭니다.
              </TextBox>
            </ItemWrapper>
            <ItemWrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "95%",
                  height: "95%",
                }}
              >
                <ImageWrapper Image={Seohyeokjun}></ImageWrapper>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextOne>서혁준</TextOne>
                  <TextTwo>부원장</TextTwo>
                </div>
              </div>

              <div
                style={{
                  width: "90%",
                  height: "0.2vw",
                  backgroundColor: "#lightgray",
                  marginTop: "0.5vw",
                }}
              ></div>
              <TextBox>
                about KGA 서혁준 부원장님 소개멘트 수정: 직업 컨설팅 및 멘토로서
                현 KGA Vice-president입니다. 저는 '막연함'이 아닌 '확실함'으로
                여러분들에게 확신을 주고 싶습니다. 미래에 대한 불안감을 가진
                청년들에게 응원의 메시지를 전합니다. 반드시 취업할 수 있는
                KGA에서 여러분의 꿈을 시작하세요!
              </TextBox>
            </ItemWrapper>
          </SlideColumnWrapper>
        </SlideWrapper>
      </Draggable>
    </>
  );
}
