import React from "react";
import styled from "styled-components";
import { HoverButton } from "../Components/HoverButton";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stdiv>
        <HomeLayout>
          <Box></Box>
          <StFirstImage>
            <InsideFirstImage>
              <div>여성 선물</div>
              <Gap>
                <HoverButton
                  mode="white"
                  hoverColor="black"
                  fontSize="15px"
                  onClick={() =>
                    navigate("/women/ready_to_wear?category=jacket_and_coats")
                  }
                >
                  여성 제품
                </HoverButton>
                <HoverButton
                  mode="white"
                  hoverColor="black"
                  fontSize="15px"
                  onClick={() =>
                    navigate("/men/ready_to_wear?category=jacket_and_coats")
                  }
                >
                  남성 제품
                </HoverButton>
              </Gap>
            </InsideFirstImage>
          </StFirstImage>
          <StSecondImage>
            <SmallImageFirst>
              <SmallImageText>여성 홀리데이 컬렉션</SmallImageText>
              <div>
                <HoverButton
                  margin="20px 13px 0 0 "
                  fontSize="15px"
                  onClick={() => navigate("/women/ready_to_wear?category=all")}
                >
                  구매 하기
                </HoverButton>
              </div>
            </SmallImageFirst>
            <SmallImageSecond>
              <SmallImageText> 남성 홀리데이 컬렉션</SmallImageText>
              <div>
                <HoverButton
                  margin="20px 13px 0 0 "
                  fontSize="13px"
                  onClick={() =>
                    navigate("/men/ready_to_wear?category=jacket_and_coats")
                  }
                >
                  구매 하기
                </HoverButton>
              </div>
            </SmallImageSecond>
          </StSecondImage>
          <div>
            <Test>
              <InsideFirstImage>
                <div>남성 선물</div>
                <Gap>
                  <HoverButton
                    mode="white"
                    hoverColor="black"
                    fontSize="14px"
                    onClick={() =>
                      navigate("/women/ready_to_wear?category=jacket_and_coats")
                    }
                  >
                    여성 제품
                  </HoverButton>
                  <HoverButton
                    mode="white"
                    hoverColor="black"
                    fontSize="14px"
                    onClick={() =>
                      navigate("/men/ready_to_wear?category=jacket_and_coats")
                    }
                  >
                    남성 제품
                  </HoverButton>
                </Gap>
              </InsideFirstImage>
            </Test>

            <FirstVideo>
              <ReactPlayer
                url="img/prada2.mp4"
                width="100%"
                height="70%"
                muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                playing={true}
                loop={true}
              />
            </FirstVideo>
          </div>
          <StThirdImage>
            <ThirdImageBox>
              <LastImage></LastImage>
              <StWord>Holiday 2022</StWord>
              <HoverButton
                mode="white"
                hoverColor="black"
                color="white"
                fontSize="16px"
                onClick={() =>
                  navigate("/women/ready_to_wear?category=jacket_and_coats")
                }
              >
                살펴보기
              </HoverButton>
            </ThirdImageBox>
          </StThirdImage>
        </HomeLayout>
      </Stdiv>
    </>
  );
};

const Test = styled.div`
  color: white;
  position: absolute;
  width: 94.5%;
  height: 85%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const FirstVideo = styled.div`
  width: 98.8%;
  margin-left: 0.5vw;
  display: flex;
  justify-content: center;
  border: none;
  position: relative;
  z-index: -1;
`;

const Box = styled.div`
  width: 100%;
  height: 50px;
`;

const Stdiv = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
`;

const HomeLayout = styled.div`
  padding: 10px;
`;

const Gap = styled.div`
  width: 155px;
  justify-content: space-between;
  display: flex;
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

const StThirdImage = styled.div`
  background-color: black;
  height: 700px;
  margin: 10px;
  display: flex;

  justify-content: center;
`;
const ThirdImageBox = styled.div`
  margin-top: 45px;
  width: 930px;
  height: 450px;
`;

const LastImage = styled.div`
  width: 900px;
  height: 100%;
  background-size: cover;
  background-image: url("https://www.prada.com/content/dam/pradanux/home_page/2022/10/banner_pradasphere/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp");
`;

const StWord = styled.div`
  color: white;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  padding: 22px 0;
`;

export default Home;
