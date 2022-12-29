import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";
import { getCookie } from "../../Shared/cookie";
import setToken from "../../Pattern/setToken";

export const __getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  async ({ gender, queryCategory, thema }, thunkAPI) => {
    try {
      console.log("겟요청");
      const { data } = await instance.get(
        `items/${gender}/${thema}?category=${queryCategory}`
      );
      //data 안에는 [] title,price,color,
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __addWishList = createAsyncThunk(
  "ADD_WISHLIST",
  async (payload, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);

      const data = await instance.post(`user/${payload}/wishList`);
      console.log(data);
      //data 안에는 [] title,price,color,
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __removeWishList = createAsyncThunk(
  "REMOVE_WISHLIST",
  async (payload, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);
      const data = await instance.delete(`user/${payload}/wishList`);
      console.log(data);
      //data 안에는 [] title,price,color,
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  postList: [],
  search: false,
  authenticate: false,
  category: "",
  msg: "",
};

const listSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {
    setAuthenticate: (state, action) => {
      state.authenticate = action.payload;
    },
    searching: (state, action) => {
      state.search = action.payload;
    },
    searchCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //
      .addCase(__getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(__getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__addWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      })
      .addCase(__addWishList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__removeWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__removeWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      })
      .addCase(__removeWishList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { searching, setAuthenticate, searchCategory } = listSlice.actions;
export default listSlice.reducer;
