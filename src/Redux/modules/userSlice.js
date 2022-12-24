import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";

export const __nameCheck = createAsyncThunk(
  "NAME_CHECK",
  async (payload, thunkAPI) => {
    try {
      await instance.post(" ");
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  name: "",
  email: "",
  onEmail: "",
  password: "",
  onPassword: "",
};

const listSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__nameCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__nameCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload;
      })
      .addCase(__nameCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { data } = listSlice.actions;
export default listSlice.reducer;
