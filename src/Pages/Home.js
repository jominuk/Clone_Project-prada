import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { searching } from "../Redux/modules/listSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.listSlice);

  const onToggleSearch = () => {
    dispatch(searching(false));
  };
  return (
    <>
      <StDark search={search} onClick={onToggleSearch} />
      <Stdiv>
        <HomeLayout>
          <StFirstImage>
            <InsideFirstImage>
              <div>여성 선물</div>
              <div>
                <button>여성 제품</button>
                <button>남성 제품</button>
              </div>
            </InsideFirstImage>
          </StFirstImage>
          <StSecondImage>
            <SmallImageFirst>
              <SmallImageText>여성 홀리데이 컬렉션</SmallImageText>
              <SmallImageButton>구매하기</SmallImageButton>
            </SmallImageFirst>
            <SmallImageSecond>
              <SmallImageText>여성 홀리데이 컬렉션</SmallImageText>
              <SmallImageButton>구매하기</SmallImageButton>
            </SmallImageSecond>
          </StSecondImage>
          <StThirdImage>
            <ThirdImageBox>
              <div></div>
              <div></div>
            </ThirdImageBox>
          </StThirdImage>
        </HomeLayout>
      </Stdiv>
    </>
  );
};

const StDark = styled.div`
  display: ${({ search }) => {
    return search ? "block" : "none";
  }};
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Stdiv = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
`;

const HomeLayout = styled.div`
  padding: 10px;
`;

const StFirstImage = styled.div`
  height: 100vh;
  background-size: cover;
  margin: 10px;
  height: 677px;
  background-image: url("https://www.prada.com/content/dam/pradanux/home_page/2022/11/update_galleria/banner_galleria_v4/banner_DT.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp");
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const InsideFirstImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: 600;
`;

const StSecondImage = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallImageFirst = styled.div`
  width: 49%;
  margin: 10px;
  height: 820px;
  background-image: url("https://www.prada.com/content/dam/pradanux/home_page/2022/11/holiday/mosaic_holiday_3/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp");
  background-size: cover;
  display: flex;
  justify-content: space-between;
`;

const SmallImageSecond = styled.div`
  width: 49%;
  margin: 10px;
  height: 820px;
  background-image: url("https://www.prada.com/content/dam/pradanux/home_page/2022/11/holiday/mosaic_holiday_3/Card_2_DT.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp");
  background-size: cover;
  display: flex;
  justify-content: space-between;
`;

const SmallImageText = styled.div`
  padding: 20px;
  font-size: 32px;
  font-weight: 600;
`;

const SmallImageButton = styled.button`
  height: 60px;
`;

const StThirdImage = styled.div`
  background-color: #2d3436;
  height: 600px;
  margin: 10px;
  display: flex;
  align-items: center;
`;
const ThirdImageBox = styled.div`
  border: 1px solid green;
`;
export default Home;
