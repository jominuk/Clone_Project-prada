import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CatergoryNavbar = () => {
  const { category, search } = useSelector((state) => state.listSlice);
  const arr1 = [
    "신상품",
    "기프트",
    "2022 가을/겨울",
    "룩 보고 구매하기",
    "프라다 리네마 로사",
    "America's Cup",
    "AC Factory",
  ];
  const arr2 = [
    "아우터",
    "재킷 및 코트",
    "니트웨어",
    "드레스",
    "셔츠 및 탑",
    "티셔츠 및 스웨트셔츠",
    "스커트",
    "팬츠 및 반바지",
    "데님",
    "가족 의류",
    "파자마 및 언더웨어",
  ];
  return (
    <>
      {category ? (
        <Category>
          <FirstCategoryBox width="190px" backgroundColor="#ebebeb">
            <Highlight>하이라이트</Highlight>
            {arr1.map((el, i) => {
              return <div key={`하이라이트_${i}`}>{el}</div>;
            })}
          </FirstCategoryBox>
          <FirstCategoryBox>
            <Highlight>레디 투 웨어</Highlight>
            {arr2.map((el, i) => {
              return <div key={`레디투웨어_${i}`}>{el}</div>;
            })}
          </FirstCategoryBox>
          <FirstCategoryBox>
            <Highlight>백</Highlight>
            {arr1.map((el, i) => {
              return <div key={`백_${i}`}>{el}</div>;
            })}
          </FirstCategoryBox>
          <FirstCategoryBox>
            <Highlight>슈즈</Highlight>
            {arr1.map((el, i) => {
              return <div key={`슈즈_${i}`}>{el}</div>;
            })}
          </FirstCategoryBox>
          <ImageBox />
        </Category>
      ) : null}
    </>
  );
};

const FirstCategoryBox = styled.div`
  background-color: ${(props) => props.backgroundColor || ""};
  width: ${(props) => props.width || "150px"};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  & div {
    margin: 6px 12%;
    line-height: 17px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ImageBox = styled.div`
  background-image: url("https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/holiday/menu/bags/desktop/bag_big.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp");
  background-size: cover;
  height: 400px;
  width: 400px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/holiday/menu/bags/desktop/bag_big.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp");
  }
`;

const Highlight = styled.h5`
  margin: 8px 12%;
  font-size: 12px;
  cursor: pointer;
`;

const Category = styled.div`
  background-color: #fff;
  width: 100vw;
  position: absolute;
  display: flex;
  left: 0;
  top: 50px;
  border-bottom: 1px solid none;
  height: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition-duration: 0.5s;
  animation: smoothAppear 0.6s;
`;

export default CatergoryNavbar;
