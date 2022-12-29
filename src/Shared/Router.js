import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import SignUp from "../Pages/Signup";
import Mypage from "../Pages/Mypage";
import Main from "../Pages/Main";
import Detail from "../Pages/Detail";
import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchCategory, searching } from "../Redux/modules/listSlice";
import Login from "../Pages/Login";

const Router = () => {
  const dispatch = useDispatch();
  const onToggleSearch = () => {
    dispatch(searching(false));
  };

  const { search, category } = useSelector((state) => state.listSlice);
  // const commentList = [
  //   { postId: 1, comments: ["a", "b", "c"] },
  //   { postId: 2, comments: ["a", "b", "c"] },
  // ];
  return (
    <BrowserRouter>
      {/* <Modal /> */}
      <Navbar />
      <StDark
        search={search}
        category={category}
        onClick={onToggleSearch}
        onMouseOver={() => {
          dispatch(searchCategory(false));
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:gender/:thema" element={<Main />} />
        <Route path="/detail/:itemId" element={<Detail />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/mypage" element={<Mypage />} />

        <Route path="/modal" element={<LoginModal />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const StDark = styled.div`
  display: ${({ search, category }) => {
    return search || category ? "block" : "none";
  }};
  width: 100%;
  height: 400vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export default Router;
