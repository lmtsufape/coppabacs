import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./userLogin/userLoginSlice";

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice
  },
});

export default store;
export const RootState = store.getState;
export const AppDispatch = store.dispatch;