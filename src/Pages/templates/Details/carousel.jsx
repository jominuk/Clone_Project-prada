import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";


const Carousel = () => {
  const TotalSlides = 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  //    < next button >
  const NextSlide = () => {
    if (currentSlide >= TotalSlides) {
      //더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0)  //1번째 사진으로 넘어간다
    }
    else { setCurrentSlide(currentSlide + 1) }
  }

  //    <  prev button  >
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TotalSlides)
      // 마지막 사진으로 이동
    }
    else { setCurrentSlide(currentSlide - 1) }
  }


  // useEffect(() => {
  //   slideRef.current.style.transition = `all 0.5s ease-in-out`;
  //   slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
  // }, [currentSlide])

  return (
    <>
      <StAnotherList>
        <StHeader>
          <StH2>관련항목</StH2>
          <StButtonWrapper>
            <StArrowButton onCanPlay={PrevSlide}>←</StArrowButton>
            <StArrowButton onClick={NextSlide}>→</StArrowButton>
          </StButtonWrapper>
        </StHeader>
        <StTestItemContainer>

          <StTestItemBox>
            <StItems>
              <StPic src="https://www.prada.com/content/dam/pradabkg_products/U/UGD/UGD213/G54F0002/UGD213_G54_F0002_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp" />
            </StItems>
            <StP2>캐시고라 코트</StP2>
            <StP2>₩ &nbsp; 5,750,000</StP2>
          </StTestItemBox>

          <StTestItemBox>
            <StItems>
              <StPic src="https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp" />
            </StItems>
            <StP2>싱클브레스트 캐시고라 베스트</StP2>
            <StP2>₩ &nbsp; 4,790,000</StP2>
          </StTestItemBox>

          <StTestItemBox>
            <StItems>
              <StPic src="https://www.prada.com/content/dam/pradabkg_products/U/UPW/UPW404/1Y7QF0806/UPW404_1Y7Q_F0806_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp" />
            </StItems>
            <StP2>크롭 스트레티 포플린 재킷</StP2>
            <StP2>₩ &nbsp;2,410,000</StP2>
          </StTestItemBox>

          <StTestItemBox>
            <StItems>
              <StPic src="https://www.prada.com/content/dam/pradanux_products/S/SGM/SGM346/1WQ8F0002/SGM346_1WQ8_F0002_S_202_MDF.png/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp" />
            </StItems>
            <StP2>싱글 브레스티드 울 재킷</StP2>
            <StP2>₩ &nbsp; 5,250,000</StP2>
          </StTestItemBox>

        </StTestItemContainer>
      </StAnotherList>

    </>
  )
}

export default Carousel;

const StAnotherList = styled.div`
width:200%;
/* overflow:hidden; */
/* height:500px; */
/* border:2px solid #000; */
box-sizing:border-box;
margin:100px 0 0 0;
`

const StHeader = styled.div`
justify-content: space-between;
display:flex`

const StButtonWrapper = styled.div`

`
const StH2 = styled.h2`
`

const StArrowButton = styled.button`
background-color:#fff;
border:none;
font-size:20px;
cursor: pointer;
&:nth-child(1){
  margin-right:10px;
  /* color:rgb(255,255,255,) */
  opacity:0.5;
}
`

const StTestItemContainer = styled.div`
/* border:2px solid #000; */
display:flex;
`
const StTestItemBox = styled.div`
/* border:2px solid #000; */
margin-right:20px;
`
const StP2 = styled.p`
padding-left:20px`

const StItems = styled.div`
height:80vh;
/* border:2px solid #000; */
box-sizing:border-box;

`
const StPic = styled.img`
  height:100%;
  width:100%;
`
