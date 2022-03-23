import React from "react";
import styled from "styled-components";

// props로 현재 슬라이드 숫자를 받고 return을 각
// 슬라이드 수에 맞게 반환한다.
const ItemWrapper = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const EachItemWrapper = styled.div`
  width: 27%;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const EachItemImage = styled.div`
  width: 70%;
  height: 40%;
  background-color: gray;
  margin-top: 2vw;
`;

const EachItemName = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.5vw;
  color: #101010;
  margin-top: 1vw;
`;
const EachItemComment = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 0.7vw;
  color: #101010;
  width: 70%;
  height: 40%;
  margin-top: 1vw;
`;

export default function Slide() {
  return (
    <>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>오준환</EachItemName>
          <EachItemComment>
            함께 일할 ‘후배 프로그래머’를 가르친다는 마음가짐으로 교육을 하고
            있다. 지식과 훈련의 균형을 중요하게 생각하고, 프로그래밍뿐만 아니라
            게임 개발에 필요한 소양을 키우도록 지도한다. 취업을 넘어서 모두가
            원하는 게임 프로그래머를 키우는 게 목표다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>박경배</EachItemName>
          <EachItemComment>
            Bitcoin 열기가 대한민국에 도래했을 때 블록체인에 관심을 갖고
            알트코인 개발 회사에 입사해 블록체인의 매력에 빠져 들게 되었다. 4차
            산업혁명이 중요한 가치를 가지게 될 시대, 미래를 짊어지게 될
            젊은이들이 앞으로의 IT업계에서 시발 주자가 되어 이끌어나갈 원동력이
            되길 바란다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>김진황</EachItemName>
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
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>김기원</EachItemName>
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
          <EachItemImage></EachItemImage>
          <EachItemName>이창희</EachItemName>
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
          <EachItemImage></EachItemImage>
          <EachItemName>곽인구</EachItemName>
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
          <EachItemImage></EachItemImage>
          <EachItemName>김건</EachItemName>
          <EachItemComment>
            빠르게 변하는 시대에 발 맞추기 위해 프로그래밍 공부를 시작했습니다.
            꾸준한 시간 투자와 배우려는 자세가 개발자의 중요한 가치라고
            생각합니다. KGA에서 새롭게 프로그래밍 공부를 시작하는 학생들이
            지식을 잘 습득하고 취업할 수 있도록 지도하는 것이 목표입니다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>김정택</EachItemName>
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
          <EachItemImage></EachItemImage>
          <EachItemName>임용규</EachItemName>
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
          <EachItemImage></EachItemImage>
          <EachItemName>정원</EachItemName>
          <EachItemComment>
            여러 장르 게임을 만들어본 경험이 있는 기획자.
            다양한 경험을 살려 게임기획자로서의 필요한 역량과 지식을 전달하기 위해 노력하고 있다.
            끈기와 참을성을 가지고 어떤 학생이라도
            포기하지 않으려는 마인드를 가지고 있으며, 학생들에게
            기획자로서 게임을 만드는 즐거움을 알려주고 취업까지 연결
            지을 수 있도록 노력하고 있다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>조한별</EachItemName>
          <EachItemComment>
            게임을 사랑하며 게임을 통해 다른 사람에게 행복을 주기 위해 게임
            개발을 시작했다. 학생들의 기술과 소통 능력을 길러 취업까지
            연계시키는 멘토링을 하고 있다. 취업을 하고 웃으며 학원을 나가는
            수강생을 보면서 보람을 느낀다. 꾸준한 자기 개발과 노력은 결코
            배신하지 않으며 더 품격 있는 개발자의 길로 인도해 줄 것이다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>최선문</EachItemName>
          <EachItemComment>
            시프트업에서 데스티니차일드 서버 프로그래머로 시작하여, 가르치는 것을 좋아해 교육자가 되었다.  '원하는 기업 골라서 가자'를 교육 철학으로 삼고 있으며, 학생의 니즈에 최대한 부합할 수 있도록 물심양면으로 애쓰고 있다.
            비전공자도 충분히 프로그래밍을 잘할 수 있다고 믿으며, 학생의 성장하는 모습에 뿌듯함을 느끼고 있다.
          </EachItemComment>
        </EachItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <ItemWrapper>
          <EachItemWrapper>
            <EachItemImage></EachItemImage>
            <EachItemName>최성락</EachItemName>
            <EachItemComment>
              내가 원하는 게임을 실제로 만드려면 어떻게 해야 할까? 이런 막연한
              생각으로 개발에 뛰어든 지 오랜 시간이 지났다. 그 동안 많은 것을
              얻고 몰랐던 지식들을 배워가며 여러 동료들도 생기게 되었다. 이제
              이것들을 어떻게 전달할지 고민하는 것이 나의 새로운 목표가 되었다.
            </EachItemComment>
          </EachItemWrapper>
          <EachItemWrapper>
            <EachItemImage></EachItemImage>
            <EachItemName>최상문</EachItemName>
            <EachItemComment>
              게임과 컴퓨터를 좋아하여 관련 학과를 전공 중, 프로그래밍의 재미를
              알게 되었다. 월드 오브 워크래프트라는 게임에 빠지게 된 후, 대학을
              졸업하고 진로를 걱정할 때 게임을 직접 만들어 보고 싶어 게임
              프로그래밍의 길을 가게 되었다. 학생들에게 게임 프로그래밍의 재미와
              스스로 개발을 할 수 있는 역량을 발휘할 수 있게 하는게 목표다.
            </EachItemComment>
          </EachItemWrapper>
          <EachItemWrapper>
            <EachItemImage></EachItemImage>
            <EachItemName>김예림</EachItemName>
            <EachItemComment>
              '노력하는 자에게 인생은 미소 짓는다.' 여러분이 이루고자 하는
              목표에 가까워 졌습니다. 항상 여러분들을 응원하도록 하겠습니다 :)
            </EachItemComment>
          </EachItemWrapper>
        </ItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <ItemWrapper>
          <EachItemWrapper>
            <EachItemImage></EachItemImage>
            <EachItemName>황인경</EachItemName>
            <EachItemComment>
              10년이 넘는 기간 동안 교육기관에 근무를 해오면서 쌓아온 약
              5000여명의 직업상담 데이터를 기반으로 KGA를 찾아 주신 모든
              분들에게 최선의 진로 탐색을 도와드리겠습니다.
            </EachItemComment>
          </EachItemWrapper>
          <EachItemWrapper>
            <EachItemImage></EachItemImage>
            <EachItemName>송재오</EachItemName>
            <EachItemComment>
              꿈을 향해 1년이란 시간을 달리는 여러분을 위한 뉴스피드가
              되어드리겠습니다 
            </EachItemComment>
          </EachItemWrapper>
          <EachItemWrapper>
            <EachItemImage></EachItemImage>
            <EachItemName>정지은</EachItemName>
            <EachItemComment>
              무엇이든 물어보세요. 환한 미소로 답해 드리겠습니다. 하나부터
              열까지 차근차근 설명해 드리겠습니다. 사소한 것도 좋으니 언제든
              편하게 문의해 주세요.
            </EachItemComment>
          </EachItemWrapper>
        </ItemWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <EachItemWrapper>
          <EachItemImage></EachItemImage>
          <EachItemName>강명규</EachItemName>
          <EachItemComment>
            여러분들의 목표달성을 위해 보이지 않는 곳에서 항상 서포트하고
            있겠습니다.
          </EachItemComment>
        </EachItemWrapper>
        <EachItemWrapper></EachItemWrapper>
        <EachItemWrapper></EachItemWrapper>
      </ItemWrapper>
    </>
  );
}
