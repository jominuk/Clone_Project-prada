import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";
import { getCookie } from "../../Shared/cookie";
import setToken from "../../Pattern/setToken";

export const __getCartList = createAsyncThunk(
  "GET_CARTLIST",
  async (payload, thunkAPI) => {
    try {
      console.log("겟요청");
      const accessToken = getCookie("token");
      setToken(accessToken);
      const { data } = await instance.get(`user/cart`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __postCartList = createAsyncThunk(
  "POST_CARTLIST",
  async (payload, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);
      const { data } = await instance.post(`/user/:itemId/cart
      `);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //
      .addCase(__getCartList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getCartList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(__getCartList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //   .addCase(__addWishList.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__addWishList.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.msg = action.payload.msg;
    //   })
    //   .addCase(__addWishList.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(__removeWishList.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__removeWishList.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.msg = action.payload.msg;
    //   })
    //   .addCase(__removeWishList.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export default cartSlice.reducer;
