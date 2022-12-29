import React from "react";
import styled from "styled-components";
import { HoverButton } from "../Components/HoverButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __loginUser } from "../Redux/modules/loginSlice";

const Login = ({ text }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [em, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (e) => {
    if (em.includes("@") && em.includes(".")) {
      setEmail(true);
    } else {
      setEmail(false);
    }
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(em, pw);
    // dispatch(
    //   __loginUser({
    //     email: em,
    //     password: pw,
    //   })
    // );
  };

  useEffect(() => {
    if (pw.length > 8 || pw.length < 16) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  }, [pw]);

  return (
    <StDiv>
      <StForm>
        <StTitle> login </StTitle>
        <StAtitle> 로그인을 하시면 빠른 결제가 가능합니다.</StAtitle>

        <StInput
          placeholder=" 이메일 *"
          onChange={(e) => handleId(e)}
          value={em}
        />
        <StError>
          {!email && em.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
        </StError>

        <StInput
          placeholder=" 비밀번호 * "
          type="password"
          onChange={(e) => handlePw(e)}
          value={pw}
        />
        <StError>
          {!password && <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>}
        </StError>

        <StCheckBoxTwo>
          <StRemember>
            <StyledLabel htmlFor={text}>
              <StyledInput type="checkbox" id={text} name={text} />
              <StyledP>{text}</StyledP>
            </StyledLabel>
            <StAgreeMent> Remember me </StAgreeMent>
          </StRemember>

          <StAgreeMentOne> 비밀번호 찾기 </StAgreeMentOne>
        </StCheckBoxTwo>
        <StSubmit onClick={loginHandler}>로그인</StSubmit>
      </StForm>

      <StRigthBox>
        <StRigthTitle> 소셜 로그인 </StRigthTitle>
        <StRigthContents> 소셜 네트워크 계정으로 로그인하기 </StRigthContents>
        <StRigthTitleOne> 신규 고객</StRigthTitleOne>
        <StRigthContentsOne>
          로그인을 하시면 빠른 결제가 가능합니다.
        </StRigthContentsOne>

        <HoverButton onClick={() => navigate("/signup")}> 등록 </HoverButton>
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

// const StInputCheck = styled.input`
//   width: 25px;
//   height: 25px;
// `;

const StCheckBoxTwo = styled.div`
  width: 91%;

  display: flex;
  margin: 50px 0 0 0;
  justify-content: space-between;
`;

const StRemember = styled.div`
  display: flex;
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
  color: white;
  background-color: black;
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

const StError = styled.div`
  color: red;
  font-size: 12px;
`;

const StyledInput = styled.input`
  appearance: none;
  height: 26px;
  width: 26px;
  border: 1px solid black;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("https://i.pinimg.com/736x/a0/ec/a3/a0eca3143a002a248079e3f9243926ef.jpg");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    border: 1px solid black;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;
