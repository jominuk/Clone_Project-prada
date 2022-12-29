import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getItems } from "../Redux/modules/detailSlice";
import Carousel from "./templates/Details/carousel";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const realData = useSelector((state) => state.detailSlice.itemData)
  // const ckRealData = useSelector((state) => console.log('realData:',state.detailSlice.itemData))


  const MokData = {
    title: '싱글브레스티드 캐시미어 재킷',
    price: '6,950,000',
    color: '화이트',
    size: String,
    content: '레트로한 매력이 가득한 디테일과 테일러링이 특징인 싱글 브레스티드 캐시미어 재킷입니다. 프라다가 혁신적인 정신과 이탈리아의 노하우를 결합하여 감촉이 부드럽고 포근한 고품질의 캐시미어를 완성했습니다.',
    material: '캐시미어',
    OptionImage: [
      { src: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.1500.1500.crop.jpg' },
      { src: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.500.500.jpg' },
      { src: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.500.500.jpg' },
      { src: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDDA.jpg/_jcr_content/renditions/cq5dam.web.hebebed.500.500.jpg' },
      { src: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDB.jpg/_jcr_content/renditions/cq5dam.web.hebebed.500.500.jpg' },
    ]
  }


  // useEffect(() => {
  //   dispatch(__getItems(id));
  // }, [dispatch]);


  return (
    <StContainer>
      <StFlexBox>
        <StImageWrapper>
          <StImageMain >
            <Stimg src={MokData.OptionImage[0].src} />
          </StImageMain>
          <StImageSub>
            <StImageRow>
              <StItem>
                <Stimg src={MokData.OptionImage[1].src} />
              </StItem>
              <StItem>
                <Stimg src={MokData.OptionImage[2].src} />
              </StItem>
            </StImageRow>
            <StImageRow>
              <StItem>
                <Stimg src={MokData.OptionImage[3].src} />
              </StItem>
              <StItem>
                <Stimg src={MokData.OptionImage[4].src} />
              </StItem>
            </StImageRow>
          </StImageSub>
        </StImageWrapper>

        <StContentBox>
          <StContentTitle>
            {MokData.title}
          </StContentTitle>
          <StContentPrice>
            ₩ {MokData.price}
          </StContentPrice>
          <StContentColor>
            <StColorP1>색상 :</StColorP1>{MokData.color}
          </StContentColor>
          <StContentSize>
            <StColorP1>사이즈 :</StColorP1>사이즈 선택
          </StContentSize>
          <StContentSizeInfo>
            사이즈안내
          </StContentSizeInfo>
          <StButton>
            장바구니에 추가하기
          </StButton>
          <StMap>
            매장에서 찾기
          </StMap>
          <StP>
            {MokData.content}
          </StP>
          <StH3>
            소재
          </StH3>

          <StP>
            {MokData.material}
          </StP>
          <StH3>
            무료 배송 및 반품
          </StH3>
          <StP>
            모든 주문은 배송 가능한 제품의 재고가 있을 경우에 한해 생성되며 3~5 영업일 내에 처리 됩니다. 예상 배송완료 기간은 실제 배송일 이후 확인 가능합니다. 주문 완료 후 고객님께 전달되는 운송장번호를 통해서 배송 상태를 조회하실 수 있습니다.

            제품 수령일로부터 14일 이내에 당사 지정 배송 업체를 통해서 무상으로 반품하실 수 있습니다.

            맞춤 제작된 상품은 주문 확인 후 30일 이내에 배송됩니다. 맞춤 제작된 제품은 맞춤 설정 시 선택한 스타일과 수령한 제품이 다른 경우에만 반품할 수 있습니다.
          </StP>
          <StInfoLink>
            재킷 및 코트 &nbsp; 보기→
          </StInfoLink>
        </StContentBox>
      </StFlexBox>

      {/* 관련항목은 보고 있는 상품과 같은 카테고리 상품(시간있으면 api추가) */}
      <Carousel />

      <StTitle>
        여성 / 레디 투 웨어/재킷 및 코트
      </StTitle>

    </StContainer>);
};

export default Detail;


const StContainer = styled.div`
margin:0 40px 0 40px;
/* height:auto;
width:100%; */
/* border:2px solid #000; */
padding-top:40px;
box-sizing:border-box;
`
const StFlexBox = styled.div`
display:flex;
/* width:i; */
/* height:80vh; */
margin-top:40px;
`

const StImageWrapper = styled.div`
width:58%;
/* height:71vh; */
/* border:2px solid #000; */
margin-right:100px;
box-sizing:border-box;

`
const StImageMain = styled.div`
width:100%;
height:49%;
box-sizing:border-box;

`
const Stimg = styled.img`
  width:100%;
  height:100%;
`

const StImageSub = styled.div`
width:100%;
height:50%;
box-sizing:border-box;

`
const StImageRow = styled.div`
width:100%;
height:50%;
margin-top:6px;
box-sizing:border-box;
display:flex

`
const StItem = styled.div`
width:50%;
height:100%;
box-sizing:border-box;
&:nth-child(1){
  margin-right:6px;
}

`
//    <  컨텐트   >
const StContentBox = styled.div`
width:31%;
/* height:auto; */
box-sizing:border-box;
`
const StContentTitle = styled.h1`
margin:100px 0 40px 0;
`
const StContentPrice = styled.p`
margin:0 0 80px 0;
font-size:18px;
font-weight:700;

`
const StContentColor = styled.div`
border-bottom:2px solid rgb(0,0,255,0.1);
margin: 0 0 40px 0;
display:flex;
height:1.7%;
box-sizing:border-box;
`
const StColorP1 = styled.p`
  font-size:14px;
  font-weight:700;
  transform:translateY(-110%);
`
const StContentSize = styled.div`
border-bottom:2px solid rgb(0,0,255,0.1);
margin: 0 0 40px 0;
height:1.7%;
display:flex;

`
const StContentSizeInfo = styled.div`
float:right;
text-decoration:underline;
margin:0 0 40px 0;
`
const StButton = styled.button`
background-color:#000;
color:#fff;
width:100%;
height:50px;
margin:0 0 40px 0;
cursor: pointer;
`
const StMap = styled.div`
text-decoration:underline;
text-align:center;
margin:0 0 100px 0;
font-size:14px;
font-weight:600;
`
const StP = styled.p`
margin:0 0 40px 0;
`
const StH3 = styled.h3`
margin:0 0 10px 0;

`
const StPic = styled.img`
  height:100%;
  width:100%;
`

const StInfoLink = styled.a`
text-decoration:underline;
`
const StTitle = styled.div`
height:10vh;
border:2px solid rgb(0,0,0,0.2);
border-right:none;
border-left:none;
text-align:center;
line-height:10vh;
`


//  <  관련 항목  >