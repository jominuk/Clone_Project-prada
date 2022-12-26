import React, { useState } from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const arr = [
    "전체 보기",
    "아우터",
    "재킷 및 코트",
    "니트웨어",
    "드레스",
    "셔츠 및 탑",
    "티셔츠 및 스웨트셔츠",
    "스커트",
    "데님",
    "가죽 의류",
    "파자마 및 언더웨어",
  ];

  const filter = (e) => {
    setSelectedItem(e.target.id);
    console.log(e.target.id);
  };

  return (
    <div>
      <Box />
      <SecondNavbar>
        <Stdiv>레디 투 웨어</Stdiv>
        {arr.map((el, i) =>
          selectedItem === el ? (
            <Stdiv3 key={`메뉴바 ${i}`} onClick={filter} id={el}>
              {el}
            </Stdiv3>
          ) : (
            <Stdiv2 key={`메뉴바 ${i}`} onClick={filter} id={el}>
              {el}
            </Stdiv2>
          )
        )}
      </SecondNavbar>
      <Box2 />

      <Boundary>
        <SpaceBetween>
          <HowManyProduct>217 제품</HowManyProduct>
          <FilterButton>
            <div>필터</div>
            <div>|</div>
            <div>정렬 기준</div>
          </FilterButton>
        </SpaceBetween>
        <ProductBox>
          <Product>
            <ImageBox image="url(https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL34A/11B3F0806/UJL34A_11B3_F0806_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)">
              <FontAwesomeIcon
                onClick={() => {
                  console.log("클릭");
                }}
                icon={faHeart}
              />
            </ImageBox>
            <ProductName>트윌 자켓</ProductName>
            <ProductPrice>₩ 2,900,000</ProductPrice>
            <ProductColor>2 색상</ProductColor>
          </Product>
          <Product>
            <ImageBox image="url(https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL34A/11B3F0806/UJL34A_11B3_F0806_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)" />
            <ProductName>트윌 자켓</ProductName>
            <ProductPrice>₩ 2,900,000</ProductPrice>
            <ProductColor>2 색상</ProductColor>
          </Product>
          <Product>
            <ImageBox image="url(https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL34A/11B3F0806/UJL34A_11B3_F0806_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)" />
            <ProductName>트윌 자켓</ProductName>
            <ProductPrice>₩ 2,900,000</ProductPrice>
            <ProductColor>2 색상</ProductColor>
          </Product>
          <Product>
            <ImageBox image="url(https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL34A/11B3F0806/UJL34A_11B3_F0806_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)" />
            <ProductName>트윌 자켓</ProductName>
            <ProductPrice>₩ 2,900,000</ProductPrice>
            <ProductColor>2 색상</ProductColor>
          </Product>
          <Product>
            <ImageBox image="url(https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL34A/11B3F0806/UJL34A_11B3_F0806_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)" />
            <ProductName>트윌 자켓</ProductName>
            <ProductPrice>₩ 2,900,000</ProductPrice>
            <ProductColor>2 색상</ProductColor>
          </Product>
          <Product>
            <ImageBox image="url(https://www.prada.com/content/dam/pradabkg_products/U/UJL/UJL34A/11B3F0806/UJL34A_11B3_F0806_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)" />
            <ProductName>트윌 자켓</ProductName>
            <ProductPrice>₩ 2,900,000</ProductPrice>
            <ProductColor>2 색상</ProductColor>
          </Product>
        </ProductBox>
        <Flex>
          <MoreButton>더 보기</MoreButton>
        </Flex>
        <CategoryHighlight>니트웨어</CategoryHighlight>
        <CategoryFooter>PRADA / 여성 / 레디 투 웨어 / 니트웨어</CategoryFooter>
      </Boundary>
    </div>
  );
};

export default Main;

const SecondNavbar = styled.div`
  height: 60px;
  align-items: center;
  display: flex;
  padding-left: 13px;
  border-bottom: 1.5px solid #ebebeb;
  padding-left: 3vw;
  padding-right: 3vw;
  position: fixed;
  background-color: white;
  width: 100vw;

  & div {
    margin-right: 1.5em;
  }
`;

const Boundary = styled.div`
  margin: 0 3vw;
  padding-top: 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 50px;
`;

const Box2 = styled.div`
  height: 70px;
  width: 100%;
`;

const Stdiv2 = styled.div`
  font-size: 13px;
  font-weight: 600;
  padding: 5px;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

const Stdiv3 = styled.div`
  font-size: 13px;
  font-weight: 600;
  background-color: black;
  color: white;
  padding: 5px;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

const Stdiv = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const HowManyProduct = styled.div`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.23px;
`;

const FilterButton = styled.div`
  display: flex;
  & div {
    margin-right: 10px;
    font-size: 13px;
    font-weight: 700;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 20.8vw;
  height: 500px;
  background-image: ${(props) => props.image || ""};
  background-size: cover;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  padding: 15px;
`;

const ProductBox = styled.div`
  gap: 1vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
`;

const ProductName = styled.div`
  margin: 10px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const ProductPrice = styled.div`
  font-size: 13px;
  font-weight: 350;
  line-height: 18px;
`;

const Product = styled.div`
  margin-bottom: 60px;
  cursor: pointer;
`;

const ProductColor = styled.div`
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;

const CategoryFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top: 1px solid #ebebeb;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2px;
  padding-top: 15px;
`;

const MoreButton = styled.button`
  width: 152px;
  height: 33px;
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 10px;
  outline: none;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoryHighlight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top: 1px solid #ebebeb;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  padding-top: 15px;
`;
