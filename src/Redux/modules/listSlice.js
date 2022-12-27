import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";

export const __getProducts = createAsyncThunk(
  "GET_POST",
  async ({ num, page }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `items/women/ready_to_wear?category=skirts`
      );
      //data 안에는 [] title,price,color
      return thunkAPI.fulfillWithValue({ ...data, num, page });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  postList: [],
  search: false,
  authenticate: false,
  category: false,
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
      })
      .addCase(__getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { searching, setAuthenticate, searchCategory } = listSlice.actions;
export default listSlice.reducer;
