import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";
import { getCookie } from "../../Shared/cookie";
import setToken from "../../Pattern/setToken";

//    <  위시리스트 가져오기  > 
export const __getWishLish = createAsyncThunk("detailSlice/__getWishList", async (payload, thunkAPI) => {
  try {
    console.log('위시리스트 가져오기')
    // const token = getCookie('token')
    // if (token == '') { }
    // else {
    // console.log('token', token)
    // setToken(token)
    //쿠키안에 있는 토큰을 헤더에  보냄
    const wishData = await instance.get(
      `/user/wishlist`);
    // }
    console.log('서버로부터 위시리스트를 받아왔음')
    console.log('wishData:', wishData)
    return thunkAPI.fulfillWithValue(wishData.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


//    <  위시 리스트 삭제하기  > 
export const __deleteWish = createAsyncThunk("detailSlice/__deleteWish", async (payload, thunkAPI) => {
  try {
    // console.log('위시 리스트 삭제하기')
    const token = getCookie('token')
    // console.log('token',token)
    setToken(token)
    //쿠키안에 있는 토큰을 헤더에  보냄
    const deleteData = await instance.delete(
      `/user/${payload}wishlist`, payload);
    // console.log('위시리스트 제거 완료')
    // console.log('deleteData:',deleteData)
    return thunkAPI.fulfillWithValue('');
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


//    <  장바구니 상품 추가  > 
export const __addBasket = createAsyncThunk("detailSlice/__addBasket", async (payload, thunkAPI) => {
  try {
    // console.log('장바구니 상품 추가')
    const token = getCookie('token')
    // console.log('token',token)
    setToken(token)
    //쿠키안에 있는 토큰을 헤더에  보냄
    const response = await instance.put(
      `/user/${payload}wishlist`, payload);
    // console.log('장바구니 상품 추가 완료')
    // console.log('response:',response)
    return thunkAPI.fulfillWithValue('');
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//    <  사용자 정보 가져오기  > 
export const __getUserData = createAsyncThunk("detailSlice/__getUserData", async (payload, thunkAPI) => {
  try {
    // console.log('사용자 정보 가져오기')
    const token = getCookie('token')
    // console.log('token', token)
    setToken(token)
    //쿠키안에 있는 토큰을 헤더에  보냄
    const userData = await instance.get(
      `/user`);
    // console.log('서버로부터 사용자 정보를 받아왔음')
    // console.log('userData:', userData.data)
    return thunkAPI.fulfillWithValue(userData.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


//    <  Detail 상품 상세 조회  >
export const __getItems = createAsyncThunk("detailSlice/__getitems", async (payload, thunkAPI) => {
  try {
    // console.log('상품 상세 정보 가져오기')
    const itemData = await instance.post(`/items/${payload}`);
    // console.log('서버로부터 상품 상세 정보를 받아왔음')
    // console.log('itemData:',itemData)
    return thunkAPI.fulfillWithValue(itemData.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


const initialState = {
  authenticate: false,
  wishData: [],
  userData: [],
  itemData: [],
};

const detailSlice = createSlice({
  name: 'detailSlice',
  initialState: initialState,
  reducers: { detail: [] },

  extraReducers: {
    //    <  위시리스트 가져오기  >
    [__getWishLish.pending]: (state) => { },
    [__getWishLish.fulfilled]: (state, action) => { state.wishData = action.payload; console.log('위시리스트 가져오기 fulrilled 성공') },
    [__getWishLish.rejected]: (state, action) => { console.log('위시리스트 가져오기 Error') },

    //    <  위시리스트 삭제하기  >
    [__deleteWish.pending]: (state) => { },
    [__deleteWish.fulfilled]: (state, action) => { state.wishData = action.payload; console.log('위시리스트 삭제하기 fulrilled 성공') },
    [__deleteWish.rejected]: (state, action) => { console.log('위시리스트 삭제하기 Error') },

    //    <  장바구니 상품추가  >
    [__addBasket.pending]: (state) => { },
    [__addBasket.fulfilled]: (state, action) => { state.wishData = action.payload; console.log('장바구니 상품추가 fulrilled 성공') },
    [__addBasket.rejected]: (state, action) => { console.log('장바구니 상품추가 Error') },



    //    <  사용자 정보 가져오기  >
    [__getUserData.pending]: (state) => { },
    [__getUserData.fulfilled]: (state, action) => { state.userData = action.payload; console.log('사용자 정보 fulrilled 성공') },
    [__getUserData.rejected]: (state, action) => { console.log('사용자 정보 Error') },

    //    <  Detail 상품 상세 조회  >
    [__getItems.pending]: (state) => { },
    [__getItems.fulfilled]: (state, action) => { state.itemData = action.payload; console.log('사용자 정보 fulrilled 성공') },
    [__getItems.rejected]: (state, action) => { console.log('상품 상세 정보 Error') },
  }
})


export const { detail } = detailSlice.actions;
export default detailSlice.reducer;

