import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../modules/listSlice";
import detailSlice from "../modules/detailSlice";
import userSlice from "../modules/userSlice";
import loginSlice from "../modules/loginSlice";
import cartSlice from "../modules/cartSlice";

const store = configureStore({
  reducer: { listSlice, userSlice, detailSlice, loginSlice, cartSlice },
});

export default store;
