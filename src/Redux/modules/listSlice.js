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
};

const listSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {},
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

export const { data } = listSlice.actions;
export default listSlice.reducer;
