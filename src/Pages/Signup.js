import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { HoverButton } from "../Components/HoverButton";
import { useDispatch } from "react-redux";
import { __nameCheck } from "../Redux/modules/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const [Open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [name, setName] = useState("");
  const [nameCheck, setNameCheck] = useState(false);

  console.log(1231231);

  const [email, setEmail] = useState("");
  const [onEmail, setOnEmail] = useState("");
  const [password, setPassword] = useState("");
  const [onPassword, setOnPassword] = useState("");

  // const [onCompleteSubmit, setOnCompleteSubmit] = useState("");
  const [input, setinput] = useState({
    name: "",
    email: "",
    onEmail: "",
    password: "",
    onPassword: "",
  });

  const selectMenu = () => setOpen(!Open);
  const options = ["대한민국", "체코", "독일", "폴란드", "일본"];

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setOpen(false);
  };

  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setOnEmail(e.target.value);
  };
  const onEmailCompleteHandler = (e) => {
    setPassword(e.target.value);
  };
  const onPasswordCompleteHandler = (e) => {
    setOnPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, onEmail, password, onPassword);

    if (name === "") {
      alert("이름");
      return;
    }
    if (email === "") {
      alert("이메일");
      return;
    }
    if (onEmail === "" || onEmail !== email) {
      alert("이메일확인하세요.");
      return;
    }

    // if (onEmail) {
    //   alert("이메일체크");
    //   return;
    // }

    // const a = input.name;
    // if (!a.includes("@") && !a.includes(".")) {
    //   setNameCheck(false);
    // } else {
    //   setNameCheck(true);
    // }
  };

  return (
    <StDiv>
      <StForm onSubmit={onSubmitHandler}>
        <StTitle> 등록</StTitle>
        <StAtitle> 지금 등록하시고 내 계정의 혜택을 누리세요</StAtitle>
        <StBtitle> * 필수 항목 </StBtitle>
        <StContentBox>
          <StContentBoxOne>
            <StInput
              placeholder="이름 (성 제외)*"
              type="name"
              length={name.length}
              value={name}
              onChange={onNameHandler}
            />

            <StDropDownContainer>
              <StDropDownHeader onClick={selectMenu}>
                {selectedOption || "대한민국"}
              </StDropDownHeader>
              {Open && (
                <StDropDownListContainer>
                  <StDropDownList>
                    {options.map((option, i) => (
                      <StListItem
                        key={`options_${i}`}
                        onClick={() => onOptionClicked(option)}
                      >
                        {option}
                      </StListItem>
                    ))}
                  </StDropDownList>
                </StDropDownListContainer>
              )}
            </StDropDownContainer>

            <StInput
              placeholder="이메일을 통한 *"
              type="email"
              onChange={onEmailHandler}
            />
            <StInput
              placeholder="비밀번호 *"
              type="password"
              onChange={onPasswordHandler}
            />
            <StPaswoordContents>
              비밀번호는 8~16자여야 합니다.
            </StPaswoordContents>
          </StContentBoxOne>

          <StContentBoxTwo>
            <StInput placeholder="성" />
            <Stdiv> </Stdiv>
            <StInput
              placeholder="이메일 주소 확인 *"
              type="emailcomplete"
              onChange={onEmailCompleteHandler}
            />
            <StInput
              placeholder="비밀번호 확인 *"
              type="password"
              onChange={onPasswordCompleteHandler}
            />
            <StEyes> 비밀번호 표시 </StEyes>
          </StContentBoxTwo>
        </StContentBox>

        <StCheckBoxOne>
          <StInputCheck type="checkbox" />
          <StAgreeMent> 본인은 </StAgreeMent>
          <StAgreeMentOne> 개인정보처리방침</StAgreeMentOne>
          <StAgreeMent>
            을 읽고 이에 동의합니다. 본인은 만 16세 이상임을 확인합니다.
          </StAgreeMent>
        </StCheckBoxOne>

        <StCheckBoxTwo>
          <StInputCheck type="checkbox" />
          <StAgreeMent> 개인정보 수집 및 이용에 대한 동의 (필수)</StAgreeMent>
          <StAgreeMentOne> 상세보기 </StAgreeMentOne>
        </StCheckBoxTwo>
        <StSubmit type="submit">등록</StSubmit>
      </StForm>

      <StRigthBox>
        <StRigthTitle>소셜 미디어 계정을 사용하여 등록</StRigthTitle>
        <StRigthContents> 계정을 사용하여 등록하 십시오. </StRigthContents>
        <StRigthTitleOne> 이미 등록 하셨나요?</StRigthTitleOne>
        <StRigthContentsOne>
          로그인을 하시면 빠른 결제가 가능합니다.
        </StRigthContentsOne>

        <HoverButton> 로그인 </HoverButton>
      </StRigthBox>
    </StDiv>
  );
};

export default SignUp;

const StDiv = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 200px 0 200px;
`;

const StForm = styled.form`
  margin: 80px 0 0 10px;
  width: 60%;
`;

const StRigthBox = styled.div`
  margin: 80px 10px 0 0px;
  width: 40%;
`;

const StTitle = styled.div`
  font-size: 40px;
  margin: 55px 0 0 0;
  font-weight: bold;
`;

const StAtitle = styled.div`
  margin: 10px;
`;

const StBtitle = styled.div`
  font-size: 13px;
  margin: 20px 0 0 10px;
`;

const StContentBox = styled.div`
  display: flex;
`;
const StContentBoxOne = styled.div`
  margin: 50px 10px 0 20px;
  height: 350px;
  width: 50%;
`;

const StContentBoxTwo = styled.div`
  margin: 50px 20px 0 0;
  height: 400px;
  width: 50%;
`;

const StInput = styled.input`
  border: none;
  border-bottom: 2px solid
    ${({ length }) => (length >= 1 && length <= 2 ? "red" : "#ccc")};
  width: 90%;
  height: 30px;
  margin-top: 25px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const StPaswoordContents = styled.div`
  font-size: 13px;
  margin: 10px 0 0 0;
`;

const StDropDownContainer = styled.div`
  width: 90%;
  margin-top: 25px;
`;

const StDropDownHeader = styled.div`
  background-image: url("https://w7.pngwing.com/pngs/924/923/png-transparent-arrow-computer-icons-drop-down-list-symbol-arrow-love-angle-heart.png");
  background-size: cover;
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: right;
  margin: 30px 0 0 0;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #ccc;
  cursor: pointer;
`;

const StDropDownListContainer = styled.div`
  width: 100%;
`;

const StDropDownList = styled.div`
  padding: 10px 0 0 0;
  background: lightcyan;
  font-size: 20px;
  z-index: 10px;
`;

const StListItem = styled.div`
  margin: 8px;
  cursor: pointer;
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

const StEyes = styled.button`
  background: url("https://www.flaticon.com/svg/vstatic/svg/3917/3917112.svg?token=exp=1671799237~hmac=12e15b31c7acbb5759b5310a6c4072e8");
  background-size: cover;
  background-size: 27px;
  background-repeat: no-repeat;
  font-size: 17px;
  margin: 5px 0 0 0;
  border: none;
  background-color: white;
  width: 180px;
  cursor: pointer;
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

const Stdiv = styled.div`
  height: 60px;
`;

const StCheckBoxOne = styled.div`
  display: flex;
`;

const StInputCheck = styled.input`
  width: 25px;
  height: 25px;
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

const StCheckBoxTwo = styled.div`
  display: flex;
  margin: 50px 0 0 0;
`;

const StSubmit = styled.button`
  margin: 50px 0 0 0;
  font-size: 20px;
  width: 95%;
  height: 50px;
  font-weight: 600;
  color: #c6c6c6;
  background-color: gray;
  cursor: pointer;
`;
