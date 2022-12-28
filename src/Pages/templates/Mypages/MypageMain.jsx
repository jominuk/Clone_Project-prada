import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getWishLish } from "../../../Redux/modules/detailSlice";
import { __deleteWish } from "../../../Redux/modules/detailSlice";

const MypageMain = () => {
  // const isLogedIn = false;
  const dispatch = useDispatch();
  // const MokData = []

  const MokWish1 = {
    wishListId: 3,
    title: '리나일론 크롭 후디드 다운 재킷',
    price: '4,140,000',
    itemColor: { color: '블랙' },
    OptionSize: { size: ['사이즈', 36, 37] },
    OptionImage: { scr: 'https://www.prada.com/content/dam/pradabkg_products/U/UGD/UGD213/G54F0002/UGD213_G54_F0002_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1500.webp' }
  }//위시 리스트 1

  const MokWish2 = {
    wishListId: 4,
    title: '라인스톤 장식의 메쉬 드레스',
    price: '9,200,000',
    itemColor: { color: '골드' },
    OptionSize: { size: ['사이즈', 36, 37] },
    OptionImage: { scr: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1500.webp' }
  }// 위시 리스트 2
  const MokData = [MokWish1, MokWish2];



  // const realData = useSelector((state) => state.detailSlice.wishData)
  // const ckRealData = useSelector((state) => console.log('realData:',state.detailSlice.wishData))

  const deleteWish = (id) => {
    dispatch(__deleteWish(parseInt(id)))
  }



  // useEffect(() => {
  //   dispatch(__getWishLish());
  // }, [dispatch]);


  return (
    <>
      <StItems>
        <h2>마지막 주문</h2>
        <StLastOrder>
          <Stp2>주문 내역이 없습니다</Stp2>
          <StLink to={'/'}>쇼핑하기</StLink>
        </StLastOrder>
        <h2>최근 관심상품</h2>
      </StItems>
      {MokData == '' ? (
        <StWishListWrapper>
          <p>위시리스트가 비어 있습니다</p>
          <StA2Box><a>완벽한 스타일을 만나보세요</a></StA2Box>
        </StWishListWrapper>
      ) :
        (
          <Wrapper>
            {/* <StContainer> */}
            {MokData.map((wish) => {
              return (
                <StItem key={wish.wishListId}>
                  <StCancelButton onClick={() => deleteWish(wish.wishListId)}>🖤</StCancelButton>
                  <StPic>
                    <Stimg src={wish.OptionImage.scr}></Stimg>
                  </StPic>
                  <StInfo>
                    <StName>{wish.title}</StName>
                    <StPrice>₩ {wish.price}</StPrice>
                  </StInfo>
                </StItem>)
            })}
            {/* </StContainer> */}
          </Wrapper>
        )}

      <StItems>
        <h2>최근 배송지</h2>
        <StLastOrder2>
          <Stp2>고객님의 계정에 저장된 주소가 없습니다</Stp2>
          <StLink2>새 주소 추가하기</StLink2>
        </StLastOrder2>
      </StItems>
    </>


  )
};

export default MypageMain;

const StItems = styled.div`
background-color:transparent;
padding-left:80px;
width:100%;
`


const StLastOrder = styled.div`
margin-bottom:4.5%;
`
const StLastOrder2 = styled.div`
  padding-bottom:7%;
`
const Stp2 = styled.p`
font-size:23px;`

const StLink = styled(Link)`
border:1px solid #000;
background-color:transparent;
height:38px;
width:70px;
padding-left:5px;
line-height:38px;
font-weight:bold;
font-size:16px;
display:flex;
text-decoration-line:none;
&:visited{color:#000};
`
const StLink2 = styled(Link)`
border:1px solid #000;
background-color:transparent;
height:38px;
width:130px;
padding-left:5px;
line-height:38px;
font-weight:bold;
font-size:16px;
display:flex;
text-decoration-line:none;
&:visited{color:#000};
`

//최근 관심상품

const StWishListWrapper = styled.div`
background-color:#fff;
height:200px;
/* position:absolute; */
width:92%;
margin-left:60px;
padding:20px 0 0 50px;
font-size:23px;

`

const StA2Box = styled.div`
border:1px solid #000;
font-size:16px;
font-weight:bold;
height:34px;
width:210px;
padding-left:3px;
line-height:34px;
box-sizing:border-box;
cursor: pointer;

`
//    <  위시 리스트  >
const Wrapper = styled.div`
  margin-left:60px;
  width:94%;
  height: 40em;;
background-color:#fff;
box-sizing:border-box;
display:flex;
`

// const StContainer = styled.div`
//   display:flex;
//   height:inherit;
//   /* border:1px solid #000; */
// `
const StItem = styled.div`
  box-sizing:border-box;
  width:25%;
  padding:10px;
  /* height:200px; */

`
const StCancelButton = styled.button`
  background-color:transparent;
  border:none;
  position:relative;
  margin:0;
  padding-right:10px;
  float:right;
  font-size:18px;
  transform:translateY(45px);
  cursor: pointer;
`


const StPic = styled.div`
height:75%; 
box-sizing:border-box;
`
const Stimg = styled.img`
  width:100%;
  height:100%;
`
const StInfo = styled.div`
box-sizing:border-box;
padding:30px 27px 30px 27px;
height:20%;
`
const StName = styled.p`
  font-size:16px;
  font-weight:700;
`
const StPrice = styled.p`
  font-size:16px;
  font-weight:600;
  margin-top:40px;
`