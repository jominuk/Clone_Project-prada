import React from "react";
import styled from "styled-components";

const CategoryNavbar3 = () => {
  const arr1 = ["소프트 필", "뉴 포멀", "파티 에센셜", "라이프스타일 액세서리"];
  return (
    <>
      <Category>
        <ImageBox image="url(https://www.prada.com/content/dam/pradanux/e-commerce/2022/09/update_co_fw22/menu_3/gift_women.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp)" />
        <Stdiv>
          <FirstCategoryBox width="190px" backgroundColor="#ebebeb">
            <Highlight>여성 선물</Highlight>
            {arr1.map((el, i) => {
              return <div key={`하이라이트_${i}`}>{el}</div>;
            })}
          </FirstCategoryBox>
        </Stdiv>
        <ImageBox image="url(https://www.prada.com/content/dam/pradanux/e-commerce/2022/09/update_co_fw22/menu_3/gift_men.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp)" />
        <Stdiv>
          <FirstCategoryBox width="190px" backgroundColor="#ebebeb">
            <Highlight>남성 선물</Highlight>
            {arr1.map((el, i) => {
              return <div key={`하이라이트_${i}`}>{el}</div>;
            })}
          </FirstCategoryBox>
        </Stdiv>
      </Category>
    </>
  );
};

const ImageBox = styled.div`
  background-image: ${(props) => props.image};
  background-size: cover;
  height: 380px;
  width: 380px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${(props) => props.image};
  }
`;

const Highlight = styled.h5`
  margin: 8px 12%;
  font-size: 12px;
  cursor: pointer;
`;

const FirstCategoryBox = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  & div {
    margin: 6px 12%;
    line-height: 17px;
    &:hover {
      cursor: pointer;
      color: #71797f;
    }
  }
`;

const Stdiv = styled.div`
  width: 240px;
  height: 95%;
  background-color: #ebebeb;
`;

const Category = styled.div`
  gap: 10px;
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
  align-items: center;
  /* animation: smoothAppear 0.1s; */
`;

export default CategoryNavbar3;
