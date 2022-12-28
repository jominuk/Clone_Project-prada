import React from "react";
import styled from "styled-components";

const CategoryNavbar2 = () => {
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
    "재킷 및 코트",
    "셔츠",
    "니트웨어",
    "셔츠 및 탑",
    "티셔츠 및 폴로 셔츠",
    "조깅복 및 스웨트 셔츠",
    "팬츠 및 버뮤다",
    "데님",
    "수트",
    "아우터",
    "가족 소재",
  ];
  const arr3 = [
    "메신저백",
    "백팩 및 밸트백",
    "토드백",
    "브리프케이스",
    "클리치",
    "백팩",
  ];
  const arr4 = ["스니커즈", "로퍼", "레이스업", "샌들", "부츠"];
  const arr5 = [
    "맞춤형 벨트",
    "카드 및 카드홀더",
    "하이테크 악세사리 및 키체인",
    "모자 및 장갑",
    "벨트",
    "타이 및 보우타이",
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
            return <div key={`레디투웨어_${i}`}>{el}</div>;
          })}
        </FirstCategoryBox>
        <FirstCategoryBox>
          <Highlight>백</Highlight>
          {arr3.map((el, i) => {
            return <div key={`백_${i}`}>{el}</div>;
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
  & div div:hover {
    color: #71797f;
  }
`;

export default CategoryNavbar2;
