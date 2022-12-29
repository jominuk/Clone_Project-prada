import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserSolid } from "./AwesomeSolid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  searchCategory,
  searching,
  setAuthenticate,
} from "../Redux/modules/listSlice";
import CategoryNavbar from "./CategoryNavbar";
import CategoryNavbar2 from "./CategoryNavbar2";
import CategoryNavbar3 from "./CategoryNavbar3";

import InputMode from "./InputMode";
import { __login } from "../Redux/modules/loginSlice";
import { getCookie } from "../Shared/cookie";
import { deleteCookie } from "../Shared/cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const { category } = useSelector((state) => state.listSlice);
  const [em, setId] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState(false);

  const { authenticate } = useSelector((state) => state.listSlice);
  const { login } = useSelector((state) => state.loginSlice);
  const { firstname } = useSelector((state) => state.loginSlice);

  const searched = useSelector((state) => state.listSlice.search);

  const menuList = ["여성", "남성", "백", "리네아 로사", "PRADASPHERE"];
  const goToLogin = () => {
    authenticate ? dispatch(setAuthenticate(false)) : setIsOpen(true);
  };

  const onSignUpHandler = () => {
    navigate("/signup");
    setIsOpen(false);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      navigate(`/?q=${e.target.value}`);
    }
  };
  const goToHome = () => {
    navigate("/");
  };

  const searchToggle = (sign) => {
    dispatch(searching(sign));
    dispatch(searchCategory(""));
  };

  const WhichCategory = () => {
    switch (category) {
      case "여성":
        return <CategoryNavbar />;
      case "남성":
        return <CategoryNavbar2 />;
      case "백":
        return <CategoryNavbar3 />;
      case "리네아 로사":
        return <CategoryNavbar3 />;
      case "PRADASPHERE":
        return <CategoryNavbar3 />;

      default:
        return null;
    }
  };

  const onEmailHandlerID = (e) => {
    if (em.includes("@") && em.includes(".")) {
      setEmail(true);
    } else {
      setEmail(false);
    }
    setId(e.target.value);
  };

  const onEmailHandlerPw = (e) => {
    setPw(e.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(em, pw);
    dispatch(
      __login({
        email: em,
        password: pw,
      })
    );
    setId("");
    setPw("");
    setIsOpen(false);
    dispatch(setAuthenticate(true));
  };

  const logout = () => {
    if (deleteCookie("token")) {
      navigate("/");
    }
    setIsOpen(false);
  };

  const MyPage = () => {
    navigate("/mypage");
    setIsOpen(false);
  };

  return (
    <Border>
      {WhichCategory()}
      <Boundary>
        <Fifty>
          <NavSection onClick={goToHome}>
            <img
              width={125}
              alt="프라다"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/1280px-Prada-Logo.svg.png"
            />
          </NavSection>
          <MenuList>
            {menuList.map((el, i) => (
              <Menu
                onMouseOver={() => dispatch(searchCategory(el))}
                key={`menuList-${i}`}
              >
                {el}
              </Menu>
            ))}
          </MenuList>
        </Fifty>
        <Fifty>
          <FlexEnd>
            <Mypage onClick={goToLogin}>
              {getCookie("token") ? (
                <div>
                  <UserSolid />
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              )}
            </Mypage>

            {isOpen ? (
              !getCookie("token") ? (
                <ModalBackdrop>
                  <StModal>
                    <ModalLogin>
                      <StLoginTitle>login</StLoginTitle>
                      <StContentLoginPass>
                        로그인을 하시면 빠른 결제가 가능합니다.
                      </StContentLoginPass>
                      <StInput
                        placeholder="이메일 *"
                        onChange={(e) => onEmailHandlerID(e)}
                        value={em}
                      />
                      <StInput
                        type="password"
                        placeholder="비밀 번호 *"
                        onChange={(e) => onEmailHandlerPw(e)}
                        value={pw}
                      />
                      <StContentLogin>
                        <StContents>
                          <InputMode />

                          <StContent>Remember me</StContent>
                        </StContents>
                        <StLoginButton onClick={loginHandler}>
                          로그인
                        </StLoginButton>
                      </StContentLogin>
                    </ModalLogin>

                    <MdadalView>
                      <StSocialLogin>소셜 로그인 </StSocialLogin>
                      <StEnrollment>등록하지 않으셨나요?</StEnrollment>
                      <StSignup onClick={() => onSignUpHandler()}>
                        새 계정 만들기
                      </StSignup>
                    </MdadalView>

                    <StModalClose onClick={() => setIsOpen(false)}>
                      ✖
                    </StModalClose>
                  </StModal>
                </ModalBackdrop>
              ) : (
                <ModalBoxOne>
                  <StModalOne>
                    <ModalLoginName>
                      <StName>{firstname} 님 환영합니다.</StName>
                      <StPrount>계정 정보, 주문 및 선호 제품 보기</StPrount>

                      <div>
                        <ModalLoginbutton>
                          <StSignup1 onClick={MyPage}>대시보드</StSignup1>
                          <StSignup2>계정 상세 정보</StSignup2>
                          <StSignup1>주문</StSignup1>
                        </ModalLoginbutton>
                      </div>
                    </ModalLoginName>

                    <div>
                      <StModalClose onClick={() => setIsOpen(false)}>
                        ✖
                      </StModalClose>
                      <Stlogout onClick={logout}>로그아웃</Stlogout>
                    </div>
                  </StModalOne>
                </ModalBoxOne>
              )
            ) : null}

            <WishList>
              <FontAwesomeIcon icon={faHeart} />
            </WishList>
            <Cart>
              <FontAwesomeIcon icon={faCartShopping} />
            </Cart>

            <SearchBox>
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => searchToggle(true)}
              />
              {searched ? (
                <Modal>
                  <SearchInput
                    onKeyDown={search}
                    placeholder="prada.com에서 검색"
                  />
                  <CloseButton onClick={() => searchToggle(false)}>
                    닫기
                  </CloseButton>
                </Modal>
              ) : (
                ""
              )}
            </SearchBox>
          </FlexEnd>
        </Fifty>
      </Boundary>
    </Border>
  );
};

//////// 위부터는 카테고리
const Fifty = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Boundary = styled.div`
  margin: 15px 3vw 10px 3vw;
  display: flex;
`;
const NavSection = styled.div`
  cursor: pointer;
`;

const Border = styled.div`
  border-bottom: 1.5px solid #ebebeb;
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const MenuList = styled.div`
  display: flex;
  margin-left: 100px;
`;

const Menu = styled.div`
  padding-right: 30px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

const FlexEnd = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  font-size: 18px;
  gap: 23px;
`;

const SearchBox = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const WishList = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Cart = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Mypage = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Modal = styled.div`
  padding: 30px;
  background-color: #fff;
  width: 100vw;
  z-index: 5;
  position: absolute;
  display: flex;
  justify-content: row;
  align-items: center;
  left: 0;
  top: 0;
  border-bottom: 1px solid black;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  animation: searchAppear 0.3s;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 25px;
  font-size: 1em;
  outline: none;
  border: none;
  border-right: 1px solid black;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  background-color: #fff;
  font-size: 0.8em;
`;
// == login 스타일
const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const StModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  background-color: #1b1b1b;
  left: 0;
  top: -15px;
  animation: modal 0.8s;
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacitiy: 1;
      transform: translateZ(0);
    }
  }
`;

const ModalLogin = styled.div`
  width: 110vw;
  height: 50vh;
  margin: 150px 0 0 350px;
  color: white;
`;

const MdadalView = styled.div`
  margin-top: 170px;
  width: 150vw;
  height: 60vh;
  color: white;
`;

const StModalClose = styled.div`
  position: absolute;
  top: 70px;
  right: 70px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const StSocialLogin = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const StInput = styled.input`
  background-color: #1b1b1b;
  border: none;
  border-bottom: 2px solid #ccc;
  width: 80%;
  height: 28px;
  margin-top: 23px;
  font-size: 15px;
  color: white;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

const StEnrollment = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 100px;
`;

const StSignup = styled.button`
  z-index: 0;
  color: white;
  position: relative;
  margin: 45px 0 0 0;
  font-weight: bold;
  font-size: 15px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
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
    background-color: white;
    top: 100%;
    left: 0%;
    transition: all 0.3s;
    z-index: -1;
  }
  :hover:before {
    transform: translateY(-100%);
  }
  :hover {
    color: black;
  }
`;

const StLoginTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0 15px 0;
`;

const StContents = styled.div`
  font-size: 25px;
  display: flex;
`;

const StContent = styled.div`
  margin: 42px 0 0 15px;
  font-size: 15px;
`;

const StContentLogin = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const StLoginButton = styled.button`
  margin: 35px 0 0 0;
  width: 95px;
  height: 40px;
  color: black;
  background-color: gray;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const ModalBoxOne = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const StModalOne = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  background-color: #1b1b1b;
  left: 0;
  top: -15px;
  animation: modal 0.8s;
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacitiy: 1;
      transform: translateZ(0);
    }
  }
`;

const ModalLoginName = styled.div`
  width: 40%;
  height: 30vh;
  margin: 110px 0 0 250px;
`;

const StName = styled.div`
  font-size: 29px;
  font-weight: bold;
  margin: 10px;
  color: #5f5f5f;
`;

const StPrount = styled.div`
  margin: 25px 0 0 10px;
  color: white;
`;

const ModalLoginbutton = styled.div`
  display: flex;
  margin-top: 20px;
  width: 50%;
  height: 50px;
`;

const StSignup1 = styled.div`
  width: 100px;
  height: 40px;
  z-index: 0;
  color: white;
  position: relative;
  text-align: center;
  margin: 45px 10px 0 10px;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
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
    background-color: white;
    top: 100%;
    left: 0%;
    transition: all 0.3s;
    z-index: -1;
  }
  :hover:before {
    transform: translateY(-100%);
  }
  :hover {
    color: black;
  }
`;

const StSignup2 = styled.div`
  width: 180px;
  height: 40px;
  z-index: 0;
  color: white;
  position: relative;
  text-align: center;
  margin: 45px 10px 0 10px;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
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
    background-color: white;
    top: 100%;
    left: 0%;
    transition: all 0.3s;
    z-index: -1;
  }
  :hover:before {
    transform: translateY(-100%);
  }
  :hover {
    color: black;
  }
`;

const Stlogout = styled.button`
  height: 40px;
  width: 90px;
  background-color: #1b1b1b;
  color: white;
  border: 1px solid white;
  font-size: 18px;
  font-weight: bold;
  margin: 260px 150px 0 0;
  cursor: pointer;
`;

const StContentLoginPass = styled.div`
  font-size: 15px;
`;

export default Navbar;
