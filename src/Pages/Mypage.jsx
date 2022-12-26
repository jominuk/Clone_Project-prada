import React, { useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import MypageMain from "./templates/Mypages/MypageMain";
import Acount from "./templates/Mypages/Acount";
import WhishList from "./templates/Mypages/WhishList";
import Order from "./templates/Mypages/Order";

const Mypage = () => {
  const isLogedIn = true;
  const [boolMain, setBoolMain] = useState(true)
  const [boolWish, setBoolWish] = useState(false)
  const [boolAcount, setBoolAcount] = useState(false)

  const onClickHandlerMain = () => {
    setBoolMain(true);
    setBoolAcount(false); setBoolWish(false);
  }
  const onClickHandlerWishList = () => {
    setBoolWish(true);
    setBoolMain(false); setBoolAcount(false);
  }
  const onClickHandlerAcount = () => {
    setBoolAcount(true);
    setBoolMain(false); setBoolWish(false);
  }


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
        {isLogedIn ?
          (<StDashBoard>
            <StAWrapper>
              <StA2 onClick={onClickHandlerMain}>대시보드</StA2>
              <StA onClick={onClickHandlerWishList}>위시리스트</StA>
              {/* <StA>주문내역</StA> */}
              {/* <StA>주소 및 매장</StA> */}
              <StA onClick={onClickHandlerAcount}>계정 상세 정보</StA>
              {/* <StA>결제 방법</StA> */}
            </StAWrapper>
            <StButton>로그아웃</StButton>
          </StDashBoard>)
          : ('')}
        {boolMain ? <MypageMain /> : <></>}
        {boolWish ? <WhishList /> : <></>}
        {boolAcount ? <Acount /> : <></>}
        {/* <Order /> */}

      </StContainer>
    </>)
};

export default Mypage;

const StContainer = styled.div`
margin: 0 40px 0 40px;
box-sizing:border-box;
border:2px solid #fff;
margin:0 auto;
/* height:900px; */
padding-top:20px;
background-color:#F4F5F7;
`

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
justify-content:space-between;
`
const StAWrapper = styled.div`
`
const StA2 = styled.span`
font-weight:bold;
border-right:1px solid #fff;
margin-left:10px;
padding-right:10px;
cursor: pointer;
`

const StA = styled.span`
border-right:1px solid #fff;
margin-left:10px;
padding-right:10px;
cursor: pointer;

`
const StButton = styled.button`
color:#fff;
border:1px solid #fff;
background-color:#000;
font-weight:bold;
font-size:15px;
height:30px;
padding:0 20px 0 20px;
margin:10px 20px 0 0 ;

`
