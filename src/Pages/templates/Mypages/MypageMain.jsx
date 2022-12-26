import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WhishList from "./WhishList";
const MypageMain = () => {
  const isLogedIn = true;

  return (
    <>
      <StItems>
        <h2>마지막 주문</h2>
        <StLastOrder>
          <Stp2>주문 내역이 없습니다</Stp2>
          <StLink to={'/'}>쇼핑하기</StLink>
        </StLastOrder>
        <h2>최근 관심상품</h2>
      </StItems>
      {isLogedIn ?
        (<WhishList />)
        :
        (<StWishListWrapper>
          <p>위시리스트가 비어 있습니다</p>
          <StA2Box><a>완벽한 스타일을 만나보세요</a></StA2Box>
        </StWishListWrapper>)}

      <StItems>
        <h2>최근 배송지</h2>
        <StLastOrder>
          <Stp2>고객님의 계정에 저장된 주소가 없습니다</Stp2>
          <StLink2>새 주소 추가하기</StLink2>
        </StLastOrder>
      </StItems>
    </>


  )
};

export default MypageMain;

const StItems = styled.div`
margin-left:40px;
`

const StLastOrder = styled.div`
margin-bottom:80px;
`
const Stp2 = styled.p`
font-size:23px;`

const StLink = styled(Link)`
border:1px solid #000;
background-color:transparent;
height:38px;
width:70px;
padding-left:5px;
line-height:38px;
font-weight:bold;
font-size:16px;
display:flex;
text-decoration-line:none;
&:visited{color:#000};
`
const StLink2 = styled(Link)`
border:1px solid #000;
background-color:transparent;
height:38px;
width:130px;
padding-left:5px;
line-height:38px;
font-weight:bold;
font-size:16px;
display:flex;
text-decoration-line:none;
&:visited{color:#000};
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