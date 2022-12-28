import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Instance/instance";

export const __signUp = createAsyncThunk(
  "SIGN_UP",
  async (payload, thunkAPI) => {
    console.log("함수 작동 됨");
    try {
      const data = await instance.post("/user/signup", payload);
      console.log(data);
      // console.log("서버로 부터 값을 받아옴")
      alert("회원가입 성공");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("아이디 비밀번호를 확인해주세요");
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

export default userSlice.reducer;
