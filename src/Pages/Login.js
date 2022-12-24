import React from "react";
import styled from "styled-components";
import { HoverButton } from "../Components/HoverButton";

const Login = () => {
  return (
    <StDiv>
      <StForm>
        <StTitle> login</StTitle>
        <StAtitle> 로그인을 하시면 빠른 결제가 가능합니다.</StAtitle>
        <StInput placeholder=" 이메일 / 사용자 이름 *" />
        <StInput placeholder=" 비밀번호 * " />

        <StCheckBoxTwo>
          <StInputCheck type="checkbox" />
          <StAgreeMent> Remember me </StAgreeMent>
          <StAgreeMentOne> 비밀번호 찾기 </StAgreeMentOne>
        </StCheckBoxTwo>
        <StSubmit>로그인</StSubmit>
      </StForm>

      <StRigthBox>
        <StRigthTitle> 소셜 로그인 </StRigthTitle>
        <StRigthContents> 소셜 네트워크 계정으로 로그인하기 </StRigthContents>
        <StRigthTitleOne> 신규 고객</StRigthTitleOne>
        <StRigthContentsOne>
          로그인을 하시면 빠른 결제가 가능합니다.
        </StRigthContentsOne>

        <HoverButton> 등록 </HoverButton>
      </StRigthBox>
    </StDiv>
  );
};

export default Login;

const StDiv = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 200px 0 200px;
`;

const StForm = styled.form`
  margin: 80px 0 0 10px;
  width: 60%;
`;

const StTitle = styled.div`
  font-size: 40px;
  margin: 55px 0 20px 0;
  font-weight: bold;
`;

const StAtitle = styled.div`
  margin: 20px 0 20px 10px;
`;

const StInput = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  width: 90%;
  height: 30px;
  margin-top: 35px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const StInputCheck = styled.input`
  width: 25px;
  height: 25px;
`;

const StCheckBoxTwo = styled.div`
  display: flex;
  margin: 50px 0 0 0;
`;

const StAgreeMent = styled.div`
  margin: 0 0 0 10px;
  font-size: 17px;
`;

const StAgreeMentOne = styled.button`
  position: relative;
  margin: 50px 0 0 0;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  transition: all 0.5s;
  overflow: hidden;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    top: 100%;
    left: 0%;
    transition: all 0.5s;
    z-index: -1;
  }
  :hover:before {
    transform: translateY(-100%);
  }
  :hover {
    color: white;
  }
  margin: -5px 5px 0 0;
`;

const StSubmit = styled.button`
  margin: 50px 0 0 0;
  font-size: 20px;
  width: 40%;
  height: 50px;
  font-weight: 600;
  color: #c6c6c6;
  background-color: gray;
  cursor: pointer;
`;

const StRigthBox = styled.div`
  margin: 80px 10px 0 0px;
  width: 40%;
`;

const StRigthTitle = styled.div`
  font-size: 25px;
  margin: 20px 0 0 0;
  font-weight: bold;
`;

const StRigthContents = styled.div`
  margin: 20px 0 0 0;
  font-size: 18px;
`;

const StRigthTitleOne = styled.div`
  font-size: 25px;
  margin: 200px 0 0 0;
  font-weight: bold;
`;

const StRigthContentsOne = styled.div`
  margin: 20px 0 0 0;
  font-size: 18px;
`;
