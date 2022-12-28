import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { HoverButton } from "../Components/HoverButton";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __signUp } from "../Redux/modules/userSlice";

const SignUp = ({ text }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const email = useRef();
  email.current = watch("email");
  const password = useRef();
  password.current = watch("password");

  const selectMenu = () => setOpen(!Open);
  const country = ["대한민국", "체코", "독일", "폴란드", "일본"];

  const onOptionClicked = (value) => {
    console.log(value);
    setSelectedOption(value);
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    data.country = selectedOption;
    dispatch(__signUp(data));
  };

  return (
    <StDiv>
      <StForm onSubmit={handleSubmit(onSubmit)}>
        <StTitle> 등록</StTitle>
        <StAtitle> 지금 등록하시고 내 계정의 혜택을 누리세요</StAtitle>
        <StBtitle> * 필수 항목 </StBtitle>
        <StContentBox>
          <StContentBoxOne>
            <StInput
              placeholder="이름 (성 제외)*"
              name="firstName"
              type="firstName"
              autoComplete="off"
              {...register("firstName", {
                required: "true",
                minLength: 2,
              })}
            />
            <StError>
              {errors.firstName && errors.firstName.type === "required" && (
                <p> 이름을 입력해 주세요 </p>
              )}
              {errors.firstName && errors.firstName.type === "minLength" && (
                <p> 다시 입력해 주세요 </p>
              )}
            </StError>

            <StDropDownContainer>
              <StDropDownHeader onClick={selectMenu}>
                {selectedOption || "대한민국"}
              </StDropDownHeader>
              {Open && (
                <StDropDownListContainer>
                  <StDropDownList>
                    {country.map((option, i) => (
                      <StListItem
                        key={`options_${i}`}
                        value="option"
                        autoComplete="off"
                        {...register("country", {
                          required: "true",
                        })}
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
              name="email"
              autoComplete="off"
              {...register("email", {
                required: "true",
                pattern: /^\S+@\S+$/i,
              })}
            />
            <StError>{errors.email && <p> 이메일을 확인해 주세요 </p>}</StError>

            <StInput
              placeholder="비밀번호 *"
              name="password"
              type="password"
              autoComplete="off"
              {...register("password", {
                required: "true",
                minLength: 8,
                maxLength: 16,
              })}
            />
            <StError>
              {errors.password && errors.password.type === "required" && (
                <p> 비밀번호를 입력해 주세요 </p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p> 8~16자로 입력해 주세요 </p>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <p> 8~16자로 입력해 주세요 </p>
              )}
            </StError>

            <StPaswoordContents>
              비밀번호는 8~16자여야 합니다.
            </StPaswoordContents>
          </StContentBoxOne>

          <StContentBoxTwo>
            <StInput
              placeholder="성"
              type="lastName"
              name="lastName"
              autoComplete="off"
              {...register("lastName", {
                required: "true",
              })}
            />
            <Stdiv> </Stdiv>
            <StInput
              placeholder="이메일 주소 확인 *"
              type="emailConfirm"
              name="emailConfirm"
              autoComplete="off"
              {...register("emailConfirm", {
                required: "true",
                validate: (value) => value === email.current,
              })}
            />
            <StError>
              {errors.emailConfirm &&
                errors.emailConfirm.type === "required" && (
                  <p> 이메일을 확인해주세요. </p>
                )}
              {errors.emailConfirm &&
                errors.emailConfirm.type === "validate" && (
                  <p> 이메일을 확인해주세요. </p>
                )}
            </StError>

            <StInput
              placeholder="비밀번호 확인 *"
              type="password"
              name="passwordConfirm"
              autoComplete="off"
              {...register("passwordConfirm", {
                required: "true",
                validate: (value) => value === password.current,
              })}
            />
            <StError>
              {errors.passWordConfirm &&
                errors.passWordConfirm.type === "required" && (
                  <p> 비밀번호를 확인해 주세요. </p>
                )}
              {errors.passWordConfirm &&
                errors.passWordConfirm.type === "validate" && (
                  <p> 비밀번호를 확인해 주세요. </p>
                )}
            </StError>

            <StEyes type="button"> 비밀번호 표시 </StEyes>
          </StContentBoxTwo>
        </StContentBox>

        <StCheckBoxOne>
          <StyledLabel htmlFor={text}>
            <StyledInput type="checkbox" id={text} name={text} />
            <StyledP>{text}</StyledP>
          </StyledLabel>
          <StAgreeMent> 본인은 </StAgreeMent>
          <StAgreeMentOne type="button"> 개인정보처리방침</StAgreeMentOne>

          <StAgreeMent>
            을 읽고 이에 동의합니다. 본인은 만 16세 이상임을 확인합니다.
          </StAgreeMent>
        </StCheckBoxOne>
        <StCheckBoxTwo>
          <StyledLabel htmlFor={text}>
            <StyledInput type="checkbox" id={text} name={text} />
            <StyledP>{text}</StyledP>
          </StyledLabel>
          <StAgreeMent> 개인정보 수집 및 이용에 대한 동의 (필수)</StAgreeMent>
          <StAgreeMentOne type="button">상세보기</StAgreeMentOne>
          {modalOpen && <StModal setModalOpen={setModalOpen} />}
        </StCheckBoxTwo>
        <StSubmit type="submit">등록</StSubmit>
      </StForm>

      <StRigthBox>
        <StRigthTitle>소셜 미디어 계정을 사용하여 등록</StRigthTitle>
        <StRigthContents> 계정을 사용하여 등록하십시오. </StRigthContents>
        <StRigthTitleOne> 이미 등록 하셨나요?</StRigthTitleOne>

        <StRigthContentsOne>
          로그인을 하시면 빠른 결제가 가능합니다.
        </StRigthContentsOne>
        <HoverButton
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </HoverButton>
      </StRigthBox>
    </StDiv>
  );
};

export default SignUp;

const StDiv = styled.div`
  display: flex;
  // height: 100vh;
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
  position: relative;
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
  position: absolute;
  width: 90%;
  padding: 10px 0 0 0;
  background: lightcyan;
  border-radius: 20px;
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

const StAgreeMent = styled.div`
  margin: 0 0 0 10px;
  font-size: 17px;
`;

const StAgreeMentOne = styled.button`
  position: relative;
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
  color: white;
  background-color: black;
  cursor: pointer;
`;

const StError = styled.div`
  font-size: 12px;
  color: red;
`;

const StModal = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
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
