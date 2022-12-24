import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";

export const __getPostBox = createAsyncThunk(
  "GET_POST",
  async ({ num, page }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/posts?categoryId=${num}&page=${page}`
      );
      return thunkAPI.fulfillWithValue({ ...data, num, page });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  postList: [],
  search: false,
};

const listSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {
    loginCheck: (state, action) => {
      state.login = action.payload;
    },
    searching: (state, action) => {
      console.log(state.search);
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //
      .addCase(__getPostBox.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPostBox.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__getPostBox.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { searching } = listSlice.actions;
export default listSlice.reducer;
