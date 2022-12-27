import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
const WhishList = () => {

  const isLogedIn = true;
  const [view, setView] = useState(false)

  const MokWish1 = {
    title: '리나일론 크롭 후디드 다운 재킷',
    price: '4,140,000',
    itemColor: { color: '블랙' },
    OptionSize: { size: ['사이즈', 36, 37] },
    OptionImage: { scr: 'https://www.prada.com/content/dam/pradabkg_products/U/UGD/UGD213/G54F0002/UGD213_G54_F0002_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1500.webp' }
  }//위시 리스트 1

  const MokWish2 = {
    title: '라인스톤 장식의 메쉬 드레스',
    price: '9,200,000',
    itemColor: { color: '골드' },
    OptionSize: { size: ['사이즈', 36, 37] },
    OptionImage: { scr: 'https://www.prada.com/content/dam/pradabkg_products/S/SD0/SD099/1WQ8F0002/SD099_1WQ8_F0002_S_202_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1500.webp' }

  }// 위시 리스트 2
  const MokData = [MokWish1, MokWish2];

  return (
    <>
      {isLogedIn ?
        (<Wrapper>
          {/* <p>{MokData.length}개의 결과</p> */}
          <StContainer>
            {MokData.map((wish) => {
              return (
                <StItem>
                  <StPic>
                    <Stimg src={wish.OptionImage.scr}></Stimg>
                  </StPic>
                  <StInfo>
                    <StName>{wish.title}</StName>
                    <StPrice>₩ {wish.price}</StPrice>
                    <StColorWrapper><Stp>{wish.itemColor.color}</Stp></StColorWrapper>
                    <StSizeWrapper>
                      <StSize>
                        {wish.OptionSize.size.map((size) => <option>{size}</option>)}
                      </StSize>
                    </StSizeWrapper>
                    <StButton>장바구니에 추가하기</StButton>
                  </StInfo>
                </StItem>)

            })}
          </StContainer>
        </Wrapper>)
        : (<><StFaslseWrapper>
          <StFalseP>위시 리스트를 저장하고 주문 사항을 관리하려면 가입하거나 로그인하십시오</StFalseP>
          <StFalseDiv>
            <StFalseBorder><StFalseLink to={'/login'}>로그인</StFalseLink></StFalseBorder>
            <StFalseBorder><StFalseLink to={'/signup'}>등록</StFalseLink></StFalseBorder>
          </StFalseDiv>
        </StFaslseWrapper></>)}

      <StUl onClick={() => setView(!view)}>
        <StDropWrapper>
          <StSpace></StSpace><StDropP>{view ? '∧' : '∨'}</StDropP>
        </StDropWrapper>
        {view && <Dropdown />}
      </StUl>
      {/* 위시 리스트에 최근에 본 상품 : 상품 상세페이지를 확인했던 상품사진 (추후api추가) */}

    </>

  )
}

export default WhishList;

const Wrapper = styled.div`
  margin-left:20px;
  width:97%;
`

const StContainer = styled.div`
  background-color:#fff;
  display:flex;
`
const StItem = styled.div`
  box-sizing:border-box;
  border:1px solid #000;
  width:25%;
  padding:20px;
`

const StPic = styled.div`
height:381px;
box-sizing:border-box;
border:1px solid #000;
`
const Stimg = styled.img`
  width:100%;
  height:100%;
`
const StInfo = styled.div`
box-sizing:border-box;
border:1px solid #000;
padding:20px 27px 20px 27px;
height:271px;
`
const StName = styled.p`
  font-size:16px;
  font-weight:700;
`
const StPrice = styled.p`
  font-size:16px;
  font-weight:600;
`
const StColorWrapper = styled.div`
  font-size:14px;
  letter-spacing:0.4px;
  border-bottom:1px solid rgb(0,0,0,0.2)
`
const Stp = styled.p`
  padding-left:10px;
`
const StSizeWrapper = styled.div`
  box-sizing:border-box;
  width:100%;
  height:38px;
  margin-bottom:30px;

`
const StSize = styled.select`
  width:100%;
  height:inherit;
  border:none;
  border-bottom:1px solid rgb(0,0,0,0.2);

  box-sizing:border-box;
  padding-left:10px;
`

const StButton = styled.button`
  background-color:#000;
  color:#fff;
  font-size:14px;
  font-weight:700;
  height:34px;
  width:100%;
  cursor: pointer;
`
//    <  비로그인 화면  >
const StFaslseWrapper = styled.div`
  display:flex;
  box-sizing:border-box;
  width:98%;
  margin-left:20px;
  justify-content:space-between
`
const StFalseP = styled.p`
font-size:14px;`
const StFalseDiv = styled.div`
display:flex;
`
const StFalseBorder = styled.div`
background-color:transparent;
box-sizing:border-box;
height:36px;
width:83px;
border:1px solid #000;
margin-right:20px;
line-height:36px;
padding-left:20px;
`
const StFalseLink = styled(Link)`
  font-size:15px;
  font-weight:600;
  text-decoration-line:none;
&:visited{color:#000};
`
const StUl = styled.ul`
  box-sizing:border-box;
  border:1px solid #000;

`
const StDropWrapper = styled.div`
  display:flex;
height:30px; 
align-items:center;
border-bottom:1px solid rgb(0,0,0,0.2); 
`
const StSpace = styled.div`
  width:50px;
`
const StDropP = styled.p`
  font-size:14px;
  height:inherit;
`