import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../instance/instance";
import setToken from "../../Pattern/setToken";
import { setCookie } from "../../shared/cookie";

export const __loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (payload, thunkAPI) => {
    try {
      setToken();
      const { data } = await instance.post("", payload);
      setCookie("token", data.token, {
        //받아온 토큰을 쿠키에 저장하는 역할을
        //setCookie가 한다.
        //브라우저에서 쿠키가 있으니, API요청이 필요할 떄 토큰을 줘야한다.
        //토큰을 서버에 보내준다.
        //토큰에 담아서 회원정보를 보내준다.
        //토큰은 프론트에도 가지고 있어야 누군지 알기 때문에
        //ex 위시리스트에 등록할때 누구인지 구별을 해야하기 때문에
        //받아온 순간 set쿠키를 써서 토큰을 저장 한다.
        //로그인할 떄 get쿠키는 토큰에
        //로그인을 전역 상태로 관리
        //토큰 유효성 검사도 해야한다
        //로그인 상태 유지
        path: "/",
        expire: "after60m",
      });
      localStorage.setItem("", data); //로그인할 때 받은 쿠키를 꺼낸다?
      alert("로그인 성공!");
      return thunkAPI.fulfillWithValue(payload);
    } catch ({ response }) {
      alert("아이디어와 비밀번호를 다시 확인해주세요.");
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "LOGIN_USER",
  initialState,
  reducers: {
    loginCheck: (state, action) => {
      state.login = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__loginUser.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.data.message;
      });
  },
});

export const { loginCheck } = userSlice.actions;
export default userSlice.reducer;
