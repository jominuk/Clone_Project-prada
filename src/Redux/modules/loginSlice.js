// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { instance } from "../../instance/instance";
// import setToken from "../../Pattern/setToken";
// import { setCookie } from "../../shared/cookie";

// export const __loginUser = createAsyncThunk(
//   "LOGIN_USER",
//   async (payload, thunkAPI) => {
//     try {
//       setToken();
//       const data = await instance.post("", payload);
//       setCookie("token", data.token, {
//         path: "/",
//         expire: "after60m",
//       });
//       // localStorage.setItem("", data);
//       alert("로그인 성공!");
//       return thunkAPI.fulfillWithValue(data);
//     } catch ({ response }) {
//       alert("아이디어와 비밀번호를 다시 확인해주세요.");
//       return thunkAPI.rejectWithValue(response);
//     }
//   }
// );

// const initialState = {
//   email: "",
//   password: "",
//   isLoading: false,
//   error: "",
// };

// const userSlice = createSlice({
//   name: "LOGIN_USER",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(__loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(__loginUser.fulfilled, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(__loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.data.message;
//       });
//   },
// });

// export default userSlice.reducer;
