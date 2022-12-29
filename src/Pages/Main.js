import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __addWishList,
  __getProducts,
  __removeWishList,
} from "../Redux/modules/listSlice";
import { HeartSolid } from "../Components/AwesomeSolid";
import { list, themaKorea } from "../Components/CategorList";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [heart, setHeart] = useState([]);
  const { gender, thema } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URLSearch = new URLSearchParams(window.location.search);
  const queryCategory = URLSearch.get("category");

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { productList } = useSelector((state) => state.listSlice);

  useEffect(() => {
    dispatch(__getProducts({ gender, thema, queryCategory }));
  }, [queryCategory, thema, gender]);

  const filter = (e) => {
    // setSelectedItem(e.target.id);
    navigate(`/${gender}/${thema}?category=${e.target.id}`);
  };
  return (
    <div>
      <Box />
      <SecondNavbar>
        <Stdiv>{themaKorea(thema)}</Stdiv>
        {list(gender, thema)?.map((el, i) =>
          queryCategory === el.eng ? (
            <Stdiv3 key={`메뉴바 ${i}`} onClick={filter} id={el.eng}>
              {el.kr}
            </Stdiv3>
          ) : (
            <Stdiv2 key={`메뉴바 ${i}`} onClick={filter} id={el.eng}>
              {el.kr}
            </Stdiv2>
          )
        )}
      </SecondNavbar>
      <Box2 />

      <Boundary>
        <SpaceBetween>
          <HowManyProduct>{productList?.length} 제품</HowManyProduct>
          <FilterButton>
            <div>필터</div>
            <div>|</div>
            <div>정렬 기준</div>
          </FilterButton>
        </SpaceBetween>
        <ProductBox>
          {productList?.map((el, i) => {
            return (
              <Product
                key={`product_${i}`}
                onClick={() => {
                  console.log("aa");
                  navigate(`/detail/${el.itemId}`);
                }}
              >
                <ImageBox
                  image={`url(${el.OptionImages[2].src})`}
                  hoverImage={`url(${el.OptionImages[1].src})`}
                >
                  <HeartIcon
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {heart.includes(el.itemId) ? (
                      <FontAwesomeIcon
                        onClick={() => {
                          dispatch(__removeWishList(el.itemId));
                          const erasedList = heart.filter(
                            (item) => item !== el.itemId
                          );
                          setHeart(erasedList);
                        }}
                        icon={faHeartCirclePlus}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => {
                          dispatch(__addWishList(el.itemId));
                          // dispatch(__removeWishList(el.itemId));
                          setHeart([...heart, el.itemId]);
                        }}
                      />
                    )}
                  </HeartIcon>
                </ImageBox>
                <ProductName>{el.title}</ProductName>
                <ProductPrice>₩ {numberWithCommas(el.price)}</ProductPrice>
                <ProductColor>{el.ItemColors.length} 색상</ProductColor>
              </Product>
            );
          })}
          <Product>
            <ImageBox
              hoverImage="url(https://www.prada.com/content/dam/pradabkg_products/2/291/291805/11A9F0002/291805_11A9_F0002_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg)"
              image="url(https://www.prada.com/content/dam/pradabkg_products/2/29Y/29Y056/11FCF0002/29Y056_11FC_F0002_S_222_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp)"
            >
              <HeartIcon
                onClick={(e) => {
                  e.stopPropagation();
                  setHeart(!heart);
                  console.log(heart);
                }}
              ></HeartIcon>
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
          </Product>{" "}
        </ProductBox>
        <Flex>
          <MoreButton>더 보기</MoreButton>
        </Flex>
        <CategoryHighlight>{queryCategory?.toUpperCase()}</CategoryHighlight>
        <CategoryFooter>
          PRADA / {gender?.toUpperCase()} / {thema?.toUpperCase()} /{" "}
          {queryCategory?.toUpperCase()}
        </CategoryFooter>
      </Boundary>
    </div>
  );
};

export default Main;

const HeartIcon = styled.div`
  display: none;
`;

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
  transition: all 0.6s cubic-bezier(0.5, 0, 0.5, 1);
  &:hover {
    background-image: ${(props) => props.hoverImage};

    & div {
      display: block;
    }
  }
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
