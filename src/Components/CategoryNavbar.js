import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { searchCategory } from "../Redux/modules/listSlice";

const CategoryNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    { kr: "아우터", eng: "outer" },
    { kr: "재킷 및 코트", eng: "jacket_and_coats" },
    { kr: "니트웨어", eng: "knitwear" },
    { kr: "드레스", eng: "" },
    { kr: "셔츠 및 탑", eng: "outer" },
    { kr: "티셔츠 및 스웨트셔츠", eng: "outer" },
    { kr: "스커트", eng: "outer" },
    { kr: "팬츠 및 반바지", eng: "outer" },
    { kr: "데님", eng: "outer" },
    { kr: "가족 의류", eng: "outer" },
    { kr: "파자마 및 언더웨어", eng: "outer" },
  ];
  const arr3 = [
    { kr: "숄더백", eng: "shoulder_bags" },
    { kr: "탑 핸들", eng: "top" },
    { kr: "호보백", eng: "ho" },
    { kr: "미니백", eng: "mi" },
    { kr: "백팩 및 벨트백", eng: "backpack_bags" },
    { kr: "브리프케이스", eng: "briefcase" },
  ];
  const arr4 = [
    "로퍼",
    "펌프스 및 발레리나",
    "스니커즈",
    "샌들",
    "레이스업",
    "앵글 부츠 및 부츠",
  ];
  const arr5 = [
    "지갑 및 카드홀더",
    "하이테크 악세사리 및 키체인",
    "모자 및 장갑",
    "헤어 악세사리",
    "벨트",
    "실크 및 스카프",
    "선글라스",
    "향수",
  ];
  const arr6 = ["게임 및 홈 악세사리", "반려동물 악세사리", "스포츠 및 레져"];
  const arr7 = ["트러블 백", "러기지 및 트롤리", "파우치 및 트래블 악세사리"];
  return (
    <>
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
            return (
              <div
                key={`레디투웨어_${i}`}
                onClick={() => {
                  navigate(`/woman/ready_to_wear?category=${el.eng}`);
                  dispatch(searchCategory(false));
                }}
              >
                {el.kr}
              </div>
            );
          })}
        </FirstCategoryBox>
        <FirstCategoryBox>
          <Highlight>백</Highlight>
          {arr3.map((el, i) => {
            return (
              <div
                key={`백_${i}`}
                onClick={() => {
                  navigate(`/woman/bags?category=${el.eng}`);
                  dispatch(searchCategory(false));
                }}
              >
                {el.kr}
              </div>
            );
          })}
        </FirstCategoryBox>
        <FirstCategoryBox>
          <Highlight>슈즈</Highlight>
          {arr4.map((el, i) => {
            return <div key={`슈즈_${i}`}>{el}</div>;
          })}
        </FirstCategoryBox>
        <FirstCategoryBox>
          <Highlight>악세사리</Highlight>
          {arr5.map((el, i) => {
            return <div key={`슈즈_${i}`}>{el}</div>;
          })}
        </FirstCategoryBox>
        <FirstCategoryBox>
          <Highlight>라이프 스타일 악세사리</Highlight>
          {arr6.map((el, i) => {
            return <div key={`슈즈_${i}`}>{el}</div>;
          })}
        </FirstCategoryBox>
        <FirstCategoryBox>
          <Highlight>여행</Highlight>
          {arr7.map((el, i) => {
            return <div key={`슈즈_${i}`}>{el}</div>;
          })}
        </FirstCategoryBox>
      </Category>
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
  animation: smoothAppear 0.1s;
  & div div:hover {
    color: #71797f;
  }
`;

export default CategoryNavbar;
