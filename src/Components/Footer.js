import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFooter>
      <StWrapper>
        <StInfo>
          <StTitle>도와드릴까요?</StTitle>
          <StParagraph>전화문의 &nbsp;0805227199</StParagraph>
          <StParagraph>문의하기</StParagraph>
          <StParagraph>매장찾기</StParagraph>
          <Box></Box>
          <StParagraph>주문추적</StParagraph>
          <StParagraph>반품</StParagraph>
          <StParagraph>FAQ</StParagraph>
        </StInfo>
        <StInfo>
          <StTitle>회사</StTitle>
          <StParagraph>Prade &nbsp; Group</StParagraph>
          <StParagraph>Fondazione &nbsp; Prada</StParagraph>
          <StParagraph>Luna &nbsp; Rossa</StParagraph>
          <StParagraph>사외적 &nbsp; 책임</StParagraph>
          <StParagraph>해용정보</StParagraph>
        </StInfo>
        <StInfo>
          <StTitle>법적 고지 및 이용약관</StTitle>
          <StParagraph>이용&nbsp;약관</StParagraph>
          <StParagraph>개인정보&nbsp;처리방침</StParagraph>
          <StParagraph>쿠키&nbsp;정책</StParagraph>
          <StParagraph>판매&nbsp;약관</StParagraph>
          <StParagraph>사이트맵</StParagraph>
        </StInfo>
        <StInfo>
          <StTitle>뉴스레터&nbsp;구독</StTitle>
          <StInput placeholder="이메일 주소를 입력하세요" />
        </StInfo>
      </StWrapper>
      <StPWrapper>
        <StParagraph>©PRADA 2007 - 2022 | 부가가치세213-86-18599</StParagraph>
        <StTitle>Shipping to Korea, Republic Of/Korean</StTitle>
      </StPWrapper>
      <StFlex>
        <div>
          <Stp2>
            회사명: 프라다 코리아 (유). 사업자등록번호: 213-86-18599. 대표자:
            최문영. 개인정보 보호책임자: 김지훈이사. 통신판매신고번호:
            2017-서울강남-04082. 주소: 서울시 강남구 압구정로 439 06010.
            고객센터 서비스 센터: 080-522-7199. 이메
          </Stp2>
          <Stp2>
            일: client.service.kr@prada.com. 법적고지 및 및 이용약관. 호스팅
            서비스: WIIT. 구매안전서비스: NHN한국 사이버결제 주식회사에 가입하여
            고객님의 안전한 거래를 보장하고 있습니다. 모든제품은 2016년 1월 이후
            생산된 제품입니다.
          </Stp2>
        </div>
        <StDiv>
          <Stp3>
            본 웹사이트에서 계좌이체를 통해 이루어진 구매는 HSBC은행에서
            제공하는 채무지급보증서비스를 통해 보호됩니다.
          </Stp3>
        </StDiv>
      </StFlex>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.div`
  font-size: 15px;
  border-top: 1.5px solid #ebebeb;
  margin: 15px 3vw 10px 3vw;
`;
const StWrapper = styled.div`
  display: flex;
`;
const Box = styled.div`
  height: 20px;
`;

const StParagraph = styled.p`
  font-size: 13px;
  font-weight: 400;
`;

const StInfo = styled.div`
  width: 25%;
`;

const StTitle = styled.h5`
  font-weight: 550;
`;

const StInput = styled.input`
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    outline: none;
  }
`;

const StPWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Stp2 = styled.p`
  font-size: 10px;
`;

const StFlex = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const StDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const Stp3 = styled.p`
  width: 100%;
  font-size: 10px;
`;

const StA = styled.a`
  text-decoration: underline;
`;
