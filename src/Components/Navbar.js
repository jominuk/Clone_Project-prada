import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserSolid } from "./AwesomeSolid";
import { useDispatch, useSelector } from "react-redux";
import { searching, setAuthenticate } from "../Redux/modules/listSlice";

const Navbar = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authenticate } = useSelector((state) => state.listSlice);
  const searched = useSelector((state) => state.listSlice.search);

  const menuList = ["여성", "남성", "백", "리네아 로사", "PRADASPHERE"];
  const goToLogin = () => {
    // authenticate ? setAuthenticate(false) : navigate("/login");
    authenticate
      ? dispatch(setAuthenticate(false))
      : dispatch(setAuthenticate(true));
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
  };

  return (
    <Border>
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
                // onMouseOver={() => }
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

const Fifty = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Boundary = styled.div`
  margin: 15px 3vw 10px 3vw;
  display: flex;

  /* position: fixed; */
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
  position: absolute;
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

export default Navbar;
