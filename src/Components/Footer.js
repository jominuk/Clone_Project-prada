import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFooter>
      <StWrapper>
        <StInfo>
          <h5>도와드릴까요?</h5>
          <p>전화문의 &nbsp;0805227199</p>
          <p>문의하기</p>
          <StP>매장찾기</StP>
          <p>주문추적</p>
          <p>반품</p>
          <p>FAQ</p>
        </StInfo>
        <StInfo>
          <h5>회사</h5>
          <p>Prade &nbsp; Group</p>
          <p>Fondazione &nbsp; Prada</p>
          <p>Luna &nbsp; Rossa</p>
          <p>사외적 &nbsp; 책임</p>
          <p>해용정보</p>
        </StInfo>
        <StInfo>
          <h5>법적 고지 및 이용약관</h5>
          <p>이용&nbsp;약관</p>
          <p>개인정보&nbsp;처리방침</p>
          <p>쿠키&nbsp;정책</p>
          <p>판매&nbsp;약관</p>
          <p>사이트맵</p>
        </StInfo>
        <StInfo>
          <h5>뉴스레터&nbsp;구독</h5>
          <StInput placeholder="이메일 주소를 입력하세요" />
        </StInfo>
      </StWrapper>
      <StPWrapper>
        <p>©PRADA 2007 - 2022 | 부가가치세213-86-18599</p>
        <p>Shipping to Korea, Republic Of/Korean</p>
      </StPWrapper>
      <StFlex>
        <div>
          <Stp2>
            회사명: 프라다 코리아 (유). 사업자등록번호: 213-86-18599. 대표자: 최문영. 개인정보 보호책임자: 김지훈이사. 통신판매신고번호: 2017-서울강남-04082. 주소: 서울시 강남구 압구정로 439 06010. 고객센터 서비스 센터: 080-522-7199. 이메</Stp2>
          <Stp2>
            일: client.service.kr@prada.com. 법적고지 및 및 이용약관. 호스팅 서비스: WIIT. 구매안전서비스: NHN한국 사이버결제 주식회사에 가입하여 고객님의 안전한 거래를 보장하고 있습니다. 모든제품은 2016년 1월 이후 생산된 제품입니다.</Stp2>
        </div>
        <StDiv>
          <Stp3>
            본 웹사이트에서 계좌이체를 통해 이루어진 구매는 HSBC은행에서 제공하는 채무지급보증서비스를 통해 보호됩니다.
          </Stp3>
          <StA>은행보증 확인 페이지</StA>
        </StDiv>
      </StFlex>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.div`

`
const StWrapper = styled.div`
display:flex`

const StInfo = styled.div`
border:2px solid #000;
width:25%;
`

const StP = styled.p`
margin-bottom:40px;
`
const StInput = styled.input`
border-bottom:1px solid #000`

const StPWrapper = styled.div`
display:flex;
justify-content:space-between;
border-bottom:1px solid #000;

`
const Stp2 = styled.p`
font-size:10px;`

const StFlex = styled.div`
display:flex;
justify-content:space-around;
;
`
const StDiv = styled.div`
margin:0;
padding:0;
`

const Stp3 = styled.p`
width:30%;
font-size:13px;`

const StA = styled.a`
text-decoration:underline
`