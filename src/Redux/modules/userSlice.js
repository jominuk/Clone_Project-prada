import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";

export const __signUp = createAsyncThunk(
  "SIGN_UP",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await instance.post(" ", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  emailConfirm: "",
  password: "",
  passwordConfirm: "",
  country: "",
};

const userSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload;
      })
      .addCase(__signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { data } = userSlice.actions;
export default userSlice.reducer;
