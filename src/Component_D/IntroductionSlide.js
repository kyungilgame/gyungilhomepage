import React from "react";
import styled from "styled-components";

import Kimgeon from "../Image/Empoloee/Kimgeon.png";
import KwakIngoo from "../Image/Empoloee/KwakIngoo.png";
import Choiseonmoon from "../Image/Empoloee/Choiseonmoon.png";
import Choisunglak from "../Image/Empoloee/Choisunglak.png";
import Hansoyeon from "../Image/Empoloee/Hansoyeon.png";
import HwangIngyung from "../Image/Empoloee/HwangIngyung.png";
import Jeongjieun from "../Image/Empoloee/Jeongjieun.png";
import Joehanbyul from "../Image/Empoloee/Joehanbyul.png";
import Kangmyunggyu from "../Image/Empoloee/Kangmyunggyu.png";
import Kimjinhwang from "../Image/Empoloee/Kimjinhwang.png";
import Kimjungtaek from "../Image/Empoloee/Kimjungtaek.png";
import Kimkiwon from "../Image/Empoloee/Kimkiwon.png";
import Kimtaewan from "../Image/Empoloee/Kimtaewan.png";
import Leechanghee from "../Image/Empoloee/Leechanghee.png";
import Limyonggyu from "../Image/Empoloee/Limyonggyu.png";
import Ohjunhwan from "../Image/Empoloee/Ohjunhwan.png";
import Songjaeoh from "../Image/Empoloee/Songjaeoh.png";

// props로 현재 슬라이드 숫자를 받고 return을 각
// 슬라이드 수에 맞게 반환한다.
const ItemWrapper = styled.div`
  width: 600%;
  height: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const EachItemWrapper = styled.div`
  width: 27%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const EachItemImage = styled.div`
  width: 85%;
  height: 55%;
  margin-top: 1vw;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;

const EachItemName = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.2vw;
  color: #101010;
  margin-top: 1vw;
`;

const EachItemCourse = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
  color: #101010;
`;
const EachItemComment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 0.9vw;
  color: #101010;
  width: 80%;
  height: 25%;
  margin-top: 1vw;
`;

export default function Slide() {
  return (
    <>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Kimkiwon}></EachItemImage>
          <EachItemName>김기원</EachItemName>
          <EachItemCourse>게임 기획</EachItemCourse>
          <EachItemComment>
            게임은 선사시대부터 있었던 사피엔스 고유의 특성입니다. 게임 기획은
            뇌 과학 이론까지 흘러가기도 합니다. 그래서, 게임 기획은 너무나 멋진
            일이고, 그렇기에 실무 위주 스파르타 교육을 받아야만 합니다. KGA는
            전문 선수를 육성하는 시스템으로, 여러분이 기획자가 될 때까지
            육성합니다. 기획자로 입문하고 싶은 분은 준비하실 건 별거 없습니다.
            마음만 단단히 먹고 오시길 바랍니다. 그럼 기획자 될 수 있습니다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Leechanghee}></EachItemImage>
          <EachItemName>이창희</EachItemName>
          <EachItemCourse>프로그래밍</EachItemCourse>
          <EachItemComment>
            임베디드 전공으로 첫 코딩을 시작했다. 프로그래밍에는 단기간에 실력이
            향상되는 편법이라는 것이 없다. 좋은 개발자의 조건은 최대한 코딩 하지
            않고 결과를 낼 수 있는 능력, 시간을 지키는 것이라고 생각한다. 지식과
            경험을 바탕으로 학생들을 지도하고 멘토링을 하면서 수강생들이 신입
            개발자로서의 새로운 커리어를 시작할 수 있도록 함께 고민하고
            노력한다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Ohjunhwan}></EachItemImage>
          <EachItemName>오준환</EachItemName>
          <EachItemCourse>게임 프로그래밍</EachItemCourse>
          <EachItemComment>
            함께 일할 ‘후배 프로그래머’를 가르친다는 마음가짐으로 교육을 하고
            있다. 지식과 훈련의 균형을 중요하게 생각하고, 프로그래밍뿐만 아니라
            게임 개발에 필요한 소양을 키우도록 지도한다. 취업을 넘어서 모두가
            원하는 게임 프로그래머를 키우는 게 목표다.
          </EachItemComment>
        </EachItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Kimjinhwang}></EachItemImage>
          <EachItemName>김진황</EachItemName>
          <EachItemCourse>프로그래밍</EachItemCourse>
          <EachItemComment>
            나만의 공간을 창조하고 싶을 때, 우리는 다양한 방법을 떠올린다. 생각,
            글쓰기, 그림 그리기, 건축… 내가 창조한 공간을 공유하고 싶을 때,
            우리는 마찬가지로 다양한 방법을 사용한다. 대화, 보여주기, 시연,
            출판…. 우리는 그 어느 때보다 손쉽게 창조하고 공유할 수 있는 시대에
            살고 있다. 물론, 그 일은 생각보다 지루하고 잠들어 있는 논리력을
            필요로 하는 작업일 수 있다. 그렇기에 노력할 가치가 있고 재미와
            보람을 느낀다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Choisunglak}></EachItemImage>
          <EachItemName>최성락</EachItemName>
          <EachItemCourse>게임 기획</EachItemCourse>
          <EachItemComment>
            내가 원하는 게임을 실제로 만드려면 어떻게 해야 할까? 이런 막연한
            생각으로 개발에 뛰어든 지 오랜 시간이 지났다. 그 동안 많은 것을 얻고
            몰랐던 지식들을 배워가며 여러 동료들도 생기게 되었다. 이제 이것들을
            어떻게 전달할지 고민하는 것이 나의 새로운 목표가 되었다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={KwakIngoo}></EachItemImage>
          <EachItemName>곽인구</EachItemName>
          <EachItemCourse>웹,앱,블록체인</EachItemCourse>
          <EachItemComment>
            ‘개발’이라는 것은 나를 위한 것이 아닌, 사용자를 위해서 만드는
            것이라고 생각합니다. 나의 결과물이 다른 사람에게 즐거움과 편리함을
            제공했을 때 짜릿함은 어떠한 말로도 표현 할 수 없습니다. 이러한
            즐거움을 같이 느낄 수 있게 도와드리겠습니다.
          </EachItemComment>
        </EachItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Choiseonmoon}></EachItemImage>
          <EachItemName>최선문</EachItemName>
          <EachItemCourse>게임 프로그래밍</EachItemCourse>
          <EachItemComment>
            시프트업에서 데스티니차일드 서버 프로그래머로 시작하여, 가르치는
            것을 좋아해 교육자가 되었다. '원하는 기업 골라서 가자'를 교육
            철학으로 삼고 있으며, 학생의 니즈에 최대한 부합할 수 있도록
            물심양면으로 애쓰고 있다. 비전공자도 충분히 프로그래밍을 잘할 수
            있다고 믿으며, 학생의 성장하는 모습에 뿌듯함을 느끼고 있다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Kimjungtaek}></EachItemImage>
          <EachItemName>김정택</EachItemName>
          <EachItemCourse>게임 프로그래밍</EachItemCourse>
          <EachItemComment>
            자신의 생각을 풀어나가는 것, 그것이 프로그램이라고 나는 단언할 수
            있다. 나의 프로그래머로서의 길은 새로운 문제를 어떻게 풀어나갈지의
            벽을 마주치는 것의 반복이었다. 이 벽을 부수는 것은 수많은 공부를
            통한 체력 강화, 그리고 아이디어의 약점을 파악하는 것이다. 학생들에게
            말한다. ‘매일 공부하여 어떤 벽을 만나더라도 부술 수 있는 체력과
            아이디어를 가지도록 노력해야 한다.’
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Limyonggyu}></EachItemImage>
          <EachItemName>임용규</EachItemName>
          <EachItemCourse>VR,게임 프로그래밍</EachItemCourse>
          <EachItemComment>
            학생이 포기하지 않으면 포기하지 않는다. 개발자로서 삽질과 향상심의
            마음가짐을 가장 중요하게 생각하고, 기본에 대해서는 같은 설명이라도
            납득이 될 때까지 지도해줄 수 있는 끈기있는 교육자이다. 응용에
            대해서는 스스로 깨우칠 수 있도록 방향성을 제시해주며, 기술교육대학
            출신으로서 체계화된 교육방식과 실무지식으로 갖추어진 현업과 가까운
            지도를 진행한다.
          </EachItemComment>
        </EachItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Joehanbyul}></EachItemImage>
          <EachItemName>조한별</EachItemName>
          <EachItemCourse>게임 프로그래밍</EachItemCourse>
          <EachItemComment>
            게임을 사랑하며 게임을 통해 다른 사람에게 행복을 주기 위해 게임
            개발을 시작했다. 학생들의 기술과 소통 능력을 길러 취업까지
            연계시키는 멘토링을 하고 있다. 취업을 하고 웃으며 학원을 나가는
            수강생을 보면서 보람을 느낀다. 꾸준한 자기 개발과 노력은 결코
            배신하지 않으며 더 품격 있는 개발자의 길로 인도해 줄 것이다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={HwangIngyung}></EachItemImage>
          <EachItemName>황인경</EachItemName>
          <EachItemCourse>Recruit Team Leader</EachItemCourse>
          <EachItemComment>
            10년이 넘는 기간 동안 교육기관에 근무를 해오면서 쌓아온 약
            5000여명의 직업상담 데이터를 기반으로 KGA를 찾아 주신 모든 분들에게
            최선의 진로 탐색을 도와드리겠습니다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Kimtaewan}></EachItemImage>
          <EachItemName>김태완</EachItemName>
          <EachItemCourse>Empolyment Support</EachItemCourse>
          <EachItemComment>
            경일게임아카데미 과정을 성공적으로 수료하신 분들의 취업을
            응원합니다!
          </EachItemComment>
        </EachItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Jeongjieun}></EachItemImage>
          <EachItemName>정지은</EachItemName>
          <EachItemCourse>Recruit Manager</EachItemCourse>
          <EachItemComment>
            무엇이든 물어보세요. 환한 미소로 답해 드리겠습니다. 하나부터 열까지
            차근차근 설명해 드리겠습니다. 사소한 것도 좋으니 언제든 편하게
            문의해 주세요.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Kangmyunggyu}></EachItemImage>
          <EachItemName>강명규</EachItemName>
          <EachItemCourse>Administrative Staff</EachItemCourse>
          <EachItemComment>
            여러분들의 목표달성을 위해 보이지 않는 곳에서 항상 서포트하고
            있겠습니다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Songjaeoh}></EachItemImage>
          <EachItemName>송재오</EachItemName>
          <EachItemCourse>Administrative Staff</EachItemCourse>
          <EachItemComment>
            꿈을 향해 1년이란 시간을 달리는 여러분을 위한 뉴스피드가
            되어드리겠습니다.
          </EachItemComment>
        </EachItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage Image={Hansoyeon}></EachItemImage>
          <EachItemName>한소연</EachItemName>
          <EachItemCourse>Administrative Staff</EachItemCourse>
          <EachItemComment>
            아자아자 무엇이든 열심히 안내해드릴 수 있는 사람이 되겠습니다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper
          style={{ backgroundColor: "#f0f0f0" }}
        ></EachItemWrapper>
      </ItemWrapper>
    </>
  );
}
