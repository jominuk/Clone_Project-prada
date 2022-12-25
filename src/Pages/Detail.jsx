import React from "react";
import styled from "styled-components";
const Detail = () => {
  return (
    <StContainer>
      <StFlexBox>
        <StImageWrapper>
          <StImageMain>
            첫번째 사진
            <img src={''} />
          </StImageMain>
          <StImageSub>
            <StImageRow>
              <StItem>1번사진
                <img src={''} />
              </StItem>
              <StItem>2번사진
                <img src={''} />
              </StItem>
            </StImageRow>
            <StImageRow>
              <StItem>3번사진
                <img src={''} />
              </StItem>
              <StItem>4번사진
                <img src={''} />
              </StItem>
            </StImageRow>
          </StImageSub>
        </StImageWrapper>

        <StContentBox>
          <StContentTitle>
            싱글브레스티드 캐시미어 재킷
          </StContentTitle>
          <StContentPrice>
            ₩ &nbsp; 6,950,000{ }
          </StContentPrice>
          <StContentColor>
            색상:화이트{ }
          </StContentColor>
          <StContentSize>
            사이즈:사이즈 선택
          </StContentSize>
          <StContentSizeInfo>
            사이즈안내
          </StContentSizeInfo>
          <StButton>
            장바구니에 추가하기
          </StButton>
          <StMap>
            매장에서 찾기
          </StMap>
          <StP>
            레트로한 매력이 가득한 디테일과 테일러링이 특징인 싱글 브레스티드 캐시미어 재킷입니다. 프라다가 혁신적인 정신과 이탈리아의 노하우를 결합하여 감촉이 부드럽고 포근한 고품질의 캐시미어를 완성했습니다.
          </StP>
          <StH3>
            소재
          </StH3>

          <StP>
            캐시미어
          </StP>
          <StH3>
            무료 배송 및 반품
          </StH3>
          <StP>
            모든 주문은 배송 가능한 제품의 재고가 있을 경우에 한해 생성되며 3~5 영업일 내에 처리 됩니다. 예상 배송완료 기간은 실제 배송일 이후 확인 가능합니다. 주문 완료 후 고객님께 전달되는 운송장번호를 통해서 배송 상태를 조회하실 수 있습니다.

            제품 수령일로부터 14일 이내에 당사 지정 배송 업체를 통해서 무상으로 반품하실 수 있습니다.

            맞춤 제작된 상품은 주문 확인 후 30일 이내에 배송됩니다. 맞춤 제작된 제품은 맞춤 설정 시 선택한 스타일과 수령한 제품이 다른 경우에만 반품할 수 있습니다.
          </StP>
          <StInfoLink>
            재킷 및 코트 &nbsp; 보기→
          </StInfoLink>
        </StContentBox>
      </StFlexBox>

      <StAnotherList>
        <StHeader>
          <StH2>관련항목</StH2>
          <StButtonWrapper>
            <StArrowButton>←</StArrowButton>
            <StArrowButton>→</StArrowButton>
          </StButtonWrapper>
        </StHeader>
        <StTestItemContainer>
          <StTestItemBox>
            <StItems>
              테스트 사진
            </StItems>
            <StP2>캐시고라 코트</StP2>
            <StP2>₩ &nbsp; 5,750,000</StP2>
          </StTestItemBox>
          <StTestItemBox>
            <StItems>
              테스트 사진
            </StItems>
            <StP2>싱클브레스트 캐시고라 베스트</StP2>
            <StP2>₩ &nbsp; 4,790,000</StP2>
          </StTestItemBox>
          <StTestItemBox>
            <StItems>
              테스트 사진
            </StItems>
            <StP2>크롭 스트레티 포플린 재킷</StP2>
            <StP2>₩ &nbsp;2,410,000</StP2>
          </StTestItemBox>
          <StTestItemBox>
            <StItems>
              테스트 사진
            </StItems>
            <StP2>싱글 브레스티드 울 재킷</StP2>
            <StP2>₩ &nbsp; 5,250,000</StP2>
          </StTestItemBox>

        </StTestItemContainer>
      </StAnotherList>

      <StTitle>
        여성 / 레디 투 웨어/재킷 및 코트
      </StTitle>

    </StContainer>);
};

export default Detail;

const StContainer = styled.div`
margin:0 40px 0 40px;
/* height:auto;
width:100%; */
/* border:2px solid #000; */
padding-top:10px;
box-sizing:border-box;
`
const StFlexBox = styled.div`
display:flex;
/* width:i; */
/* height:80vh; */
margin-top:40px;
`

const StImageWrapper = styled.div`
width:58%;
/* height:80vh; */
/* border:2px solid #000; */
margin-right:100px;
box-sizing:border-box;

`
const StImageMain = styled.div`
width:100%;
height:49%;
border:2px solid #000;
box-sizing:border-box;

`
const StImageSub = styled.div`
width:100%;
height:50%;
box-sizing:border-box;

`
const StImageRow = styled.div`
width:100%;
height:50%;
margin-top:6px;
/* border:2px solid #000; */
box-sizing:border-box;
display:flex

`
const StItem = styled.div`
width:50%;
height:100%;
border:2px solid #000;
box-sizing:border-box;
&:nth-child(1){
  margin-right:6px;
}

`
//    <  컨텐트   >
const StContentBox = styled.div`
width:40%;
/* height:auto; */
border:2px solid #000;
box-sizing:border-box;
`
const StContentTitle = styled.div`
margin:100px 0 40px 0;
`
const StContentPrice = styled.div`
margin:0 0 80px 0;

`
const StContentColor = styled.div`
border-bottom:2px solid rgb(0,0,255,0.2);
margin: 0 0 40px 0;
`
const StContentSize = styled.div`
border-bottom:2px solid rgb(0,0,255,0.2);
margin: 0 0 40px 0;

`
const StContentSizeInfo = styled.div`
float:right;
text-decoration:underline;
margin:0 0 40px 0;
`
const StButton = styled.button`
background-color:#000;
color:#fff;
width:100%;
height:50px;
margin:0 0 40px 0;
`
const StMap = styled.div`
text-decoration:underline;
text-align:center;
margin:0 0 100px 0;
`
const StP = styled.p`
margin:0 0 40px 0;
`
const StH3 = styled.h3`
margin:0 0 10px 0;

`

const StInfoLink = styled.a`
text-decoration:underline;
`


//  <  관련 항목  >
const StAnotherList = styled.div`
width:100%;
height:500px;
/* border:2px solid #000; */
box-sizing:border-box;
margin:100px 0 0 0;
`

const StHeader = styled.div`
justify-content: space-between;
display:flex`

const StButtonWrapper = styled.div`

`
const StH2 = styled.h2`
`

const StArrowButton = styled.button`
background-color:#fff;
border:none;
font-size:20px;
cursor: pointer;
&:nth-child(1){
  margin-right:10px;
  /* color:rgb(255,255,255,) */
  opacity:0.5;
}
`

const StTestItemContainer = styled.div`
/* border:2px solid #000; */
display:flex;
`
const StTestItemBox = styled.div`
width:30%;
/* border:2px solid #000; */
margin-right:20px;
`
const StP2 = styled.p`
padding-left:20px`

const StItems = styled.div`
height:35vh;
border:2px solid #000;
background-color:#EBEBED;

`

const StTitle = styled.div`
height:10vh;
border:2px solid rgb(0,0,0,0.2);
border-right:none;
border-left:none;
text-align:center;
line-height:10vh;
`
