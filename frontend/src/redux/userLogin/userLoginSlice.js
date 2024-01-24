import { getStorageItem } from '@/utils/localStore';
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: "userLogin",
  initialState: getStorageItem("userLogin") || "",
  reducers: {
    setUserLogin(state, actions){
      return state = actions.payload;
  }
  },
});

export const { setUserLogin } = counterSlice.actions;
export default counterSlice.reducer;