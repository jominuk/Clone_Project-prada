import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../modules/listSlice";
import detailSlice from "../modules/userSlice";
import userSlice from "../modules/userSlice";

const store = configureStore({
  reducer: { listSlice, userSlice, detailSlice },
});

export default store;
