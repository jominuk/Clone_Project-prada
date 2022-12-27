import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserSolid } from "./AwesomeSolid";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCategory,
  searching,
  setAuthenticate,
} from "../Redux/modules/listSlice";
import CatergoryNavbar from "./CatergoryNavbar";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const { authenticate } = useSelector((state) => state.listSlice);

  const searched = useSelector((state) => state.listSlice.search);

  const menuList = ["여성", "남성", "백", "리네아 로사", "PRADASPHERE"];
  const goToLogin = () => {
    // authenticate ? setAuthenticate(false) : navigate("/login");
    authenticate ? dispatch(setAuthenticate(false)) : setIsOpen(true);
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
    dispatch(searchCategory(false));
  };

  return (
    <Border>
      <CatergoryNavbar />
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
                onMouseOver={() => dispatch(searchCategory(true))}
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
              {authenticate ? <UserSolid /> : <FontAwesomeIcon icon={faUser} />}
            </Mypage>
            {isOpen ? (
              <ModalBackdrop>
                <StModal>
                  <ModalLogin>
                    <h1>login</h1>
                    <div>로그인을 하시면 빠른 결제가 가능합니다.</div>
                    <StInput placeholder="이메일 *" />
                    <StInput placeholder="비밀 번호 *" />
                  </ModalLogin>

                  <MdadalView>
                    <StSocialLogin>소셜 로그인 </StSocialLogin>
                    <StEnrollment>등록하지 않으셨나요?</StEnrollment>
                    <StSignup>새 계정 만들기</StSignup>
                  </MdadalView>

                  <StModalClose onClick={() => setIsOpen(false)}>
                    ✖
                  </StModalClose>
                </StModal>
              </ModalBackdrop>
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
  background-color: #fff;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: row;
  align-items: center;
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
  height: 690px;
  background-color: black;
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
  margin: 150px 0 0 220px;
  color: white;
`;

const MdadalView = styled.div`
  margin: 150px 600px 0 0;
  color: white;
`;

const StModalClose = styled.div`
  position: absolute;
  top: 70px;
  right: 70px;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

const StSocialLogin = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const StInput = styled.input`
  background-color: black;
  border: none;
  border-bottom: 2px solid #ccc;
  width: 130%;
  height: 30px;
  margin-top: 40px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const StEnrollment = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 180px;
`;

const StSignup = styled.button`
  z-index: 0;
  color: white;
  position: relative;
  margin: 20px 0 0 0;
  font-weight: bold;
  font-size: 23px;
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
export default Navbar;
