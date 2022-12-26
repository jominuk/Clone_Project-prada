import React from "react";
import styled from "styled-components";

const Acount = () => {

  return (
    <>
      <StItems>
        <h3>계정 상세 정보</h3>
        <p>모든 계정 정보 관리</p>
        <StAcountInfo>
          <StFlex>
            <StPwrapper><Stp1>이름(성 제외)</Stp1><Stp2>수현</Stp2></StPwrapper>
            <StPwrapper><Stp1>성</Stp1><Stp2>김</Stp2></StPwrapper>
            <StPwrapper><Stp1>지역</Stp1><Stp2>KR</Stp2></StPwrapper>
            <StPwrapper><Stp1>이메일을 통한</Stp1><Stp2>heypitcher@hanmail.net</Stp2></StPwrapper>
          </StFlex>
          <StButton>
            수정
          </StButton>
        </StAcountInfo>

        <StEmailWrapper>
          <Stcontain>
            <h2>사용자 이메일</h2>
            <Stp3>이 이메일을 사용하여 귀하의 계정에 로그인할 수 있습니다</Stp3>
            <StUnderLine>heypitcher@hanmail.net</StUnderLine>
          </Stcontain>
          <Stcontain>
            <h2>사용자 비밀번호</h2>
            <Stp3>이 비밀번호를 사용하여 귀하여 계정에 로그인할 수 있습니다</Stp3>
            <StUnderLine>........<StButton>수정</StButton></StUnderLine>
          </Stcontain>
        </StEmailWrapper>

        <DtnewP>계정 비활성화</DtnewP>
        <StContain2>
          <StDisable>
            <Stp3>"내 계정 비활성화"를 선택하여 계정을 삭제하거나 비활성화할 수 있습니다</Stp3>
            <StButton2>계정 비활성화</StButton2>
          </StDisable>
        </StContain2>

      </StItems>
    </>
  )
}

export default Acount;


const StItems = styled.div`
margin-left:20px;
width:97%;
box-sizing:border-box;
padding-bottom:20px;
`

const StAcountInfo = styled.div`
background-color:#fff;
display:flex;
justify-content:space-between;
/* margin-bottom:80px; */
padding:20px;
font-size:16px;
height:80px;
box-sizing:border-box;
`
const StFlex = styled.div`
  display:flex;
  margin-bottom:40px;
  box-sizing:border-box;
`
const StPwrapper = styled.div`
  min-width:50%;
  box-sizing:border-box;
`

const Stp1 = styled.p`
  font-size:10px;
  font-weight:700;
`
const Stp2 = styled.p`
  font-size:12px;
`
//    <  사용자 이메일  >
const StEmailWrapper = styled.div`
  background-color:#fff;
  display:flex;
  justify-content:space-between;
  padding:20px;
  margin-top:20px;
  height:196px;
  box-sizing:border-box;
`
const Stcontain = styled.div`
  width:48%;
`
const Stp3 = styled.p`
  font-size:14px;
`


const StUnderLine = styled.div`
  border-bottom:1px solid rgb(0,0,0,0.2);
  padding-bottom:15px;
  font-size:16px;
  /* box-sizing:border-box; */
`

const StButton = styled.button`
  float:right;
  height:38px;
  width:64px;
background-color:transparent;
border:1px solid #000;
font-weight:600;
cursor: pointer;
/* box-sizing:border-box; */

`

const DtnewP = styled.p`
  font-size:23px;
  font-weight:700;
  padding-left:20px;
`

//    <  계정 비활성화  >
const StContain2 = styled.div`
  background-color:#E6E9F0;
  box-sizing:border-box;
  padding-left:20px;
  height:76px;
  line-height:46px;
`
const StDisable = styled.div`
  display:flex;
  justify-content:space-between;
`

const StButton2 = styled.button`
  font-weight:700;
  font-size:15px;
  height:34px;
  width:127px;
background-color:transparent;
margin:20px 20px 0 0;
border:1px solid #000;
`