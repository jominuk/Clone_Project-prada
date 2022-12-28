import React from "react";
import styled from "styled-components";

const CategoryNavbar3 = () => {
  return (
    <>
      <Category>
        <ImageBox />
        <Stdiv />
      </Category>
    </>
  );
};

const ImageBox = styled.div`
  background-image: url("https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/holiday/menu/bags/desktop/bag_big.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp");
  background-size: cover;
  height: 380px;
  width: 380px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/holiday/menu/bags/desktop/bag_big.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp");
  }
`;

const Stdiv = styled.div`
  width: 240px;
  height: 100%;
  background-color: #ebebeb;
`;

const Category = styled.div`
  background-color: #fff;
  width: 100vw;
  position: absolute;
  display: flex;
  left: 0;
  top: 50px;
  padding-left: 2vw;
  border-bottom: 1px solid none;
  height: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition-duration: 0.5s;
  animation: smoothAppear 0.6s;
  & div div:hover {
    color: #71797f;
  }
`;

export default CategoryNavbar3;
