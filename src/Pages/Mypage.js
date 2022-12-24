import React from "react";
import styled from "styled-components";

const Mypage = () => {
  return (
    <StContainer>
      <StHeaderPic>
        <p>수현</p>
        {/* <h2>수현{ }</h2> */}
        <p>{`님  환 영 합 니 다`}</p>
      </StHeaderPic>
      <StDashBoard>
        <StA>대시보드</StA>


      </StDashBoard>
    </StContainer>
  )
};

export default Mypage;

const StContainer = styled.div`
padding-top:50px;
margin: 0 40px 0 40px;
box-sizing:border-box;`

const StHeaderPic = styled.div`
height:500px;
border:2px solid #000;
`
const StDashBoard = styled.div`
width:100%;
display:flex;
position:fixed;
background-color:#000;
color:#fff
`
const StA = styled.a`
border-right:2px solid #000;
`
