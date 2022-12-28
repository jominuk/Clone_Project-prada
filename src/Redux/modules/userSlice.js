import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";

export const __signUp = createAsyncThunk(
  "SIGN_UP",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {

      const { data } = await instance.post("/user/signup", payload);
      console.log(data);
      //  data.messge === "회원가입 성공"
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("양식을 확인해 주세요");
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
  errorMsg: "",
  msg: "",
};

const userSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__signUp.pending, (state) => {
        console.log("Pending");
        state.isLoading = true;
      })
      .addCase(__signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload;
      })
      .addCase(__signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export default userSlice.reducer;
