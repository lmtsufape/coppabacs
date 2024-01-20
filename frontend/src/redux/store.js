import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./userLogin/userLoginSlice";

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice
  },
});

export default store;
