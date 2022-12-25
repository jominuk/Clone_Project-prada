import React from "react";
import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <StHeaderPicWrapper>
        <StHeaderPic>
          <StTextWrapper>
            <h1>수현</h1>
            {/* <h2>수현{ }</h2> */}
            {`님  환 영 합 니 다`}
          </StTextWrapper>
        </StHeaderPic>
      </StHeaderPicWrapper>

      <StContainer>
        <StDashBoard>
          <StAWrapper>
            <StA2>대시보드</StA2>
            <StA>위시리스트</StA>
            <StA>주문내역</StA>
            <StA>주소 및 매장</StA>
            <StA>계정 상세 정보</StA>
            <StA>결제 방법</StA>
          </StAWrapper>
          <StButton>로그아웃</StButton>
        </StDashBoard>

        <StItems>
          <h2>마지막 주문</h2>
          <StLastOrder>
            <Stp2>주문 내역이 없습니다</Stp2>
            <StButton2>쇼핑하기</StButton2>
          </StLastOrder>
          <h2>최근 관심상품</h2>
        </StItems>
        <StWishListWrapper>
          <p>위시리스트가 비어 있습니다</p>
          <StA2Box><a>완벽한 스타일을 만나보세요</a></StA2Box>
        </StWishListWrapper>
        <StItems>
          <h2>최근 배송지</h2>
          <StLastOrder>
            <Stp2>고객님의 계정에 저장된 주소가 없습니다</Stp2>
            <StButton2>새 주소 추가하기</StButton2>
          </StLastOrder>
        </StItems>

      </StContainer>
    </>)
};

export default Mypage;

const StHeaderPicWrapper = styled.div`
height:280px;
padding-top:40px;

`

const StHeaderPic = styled.div`
height:270px;
justify-content: center;
margin-top:10px;
color:#fff;
text-align:center;
background-image:url("https://www.prada.com/content/dam/pradanux/registration/2019/10/23/My_account_w_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.webp");
background-size:cover;
`

const StTextWrapper = styled.div`
transform:translateY(160%);
`
const StContainer = styled.div`
margin: 0 40px 0 40px;
box-sizing:border-box;
border:2px solid #fff;
margin:0 auto;
height:900px;
padding-top:20px;
background-color:#F4F5F7;
`


//    <  대시보드  >
const StDashBoard = styled.div`
width:96%;
height:6%;
display:flex;
position:sticky;
top:15%;
background-color:#000;
color:#fff;
line-height:50px;
font-size:13px;
margin:0 0px 0 20px;
padding-left:20px;
`
const StAWrapper = styled.div`
`
const StA2 = styled.a`
font-weight:bold;
border-right:1px solid #fff;
margin-left:10px;
padding-right:10px;
`

const StA = styled.a`
border-right:1px solid #fff;
margin-left:10px;
padding-right:10px;

`
const StButton = styled.button`
color:#fff;
border:1px solid #fff;
background-color:#000;
font-weight:bold;
font-size:15px;
height:30px;
padding:0 20px 0 20px;
margin:10px 0 0 560px ;

`

//    < 마지막 주문  >

const StItems = styled.div`
margin-left:40px;
`

const StLastOrder = styled.div`
margin-bottom:80px;
`
const Stp2 = styled.p`
font-size:23px;`

const StButton2 = styled.button`
border:1px solid #000;
background-color:transparent;
height:38px;
font-weight:bold;
font-size:16px;
`

//최근 관심상품

const StWishListWrapper = styled.div`
background-color:#fff;
height:200px;
/* position:absolute; */
width:96%;
margin-left:20px;
padding:20px 0 0 50px;
font-size:23px;

`

const StA2Box = styled.div`
border:1px solid #000;
font-size:16px;
font-weight:bold;
height:34px;
width:210px;
padding-left:3px;
line-height:34px;
box-sizing:border-box;
cursor: pointer;

`


