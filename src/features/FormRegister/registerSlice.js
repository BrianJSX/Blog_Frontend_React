import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
  data: null
};

const name = "Register";

export const registerSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchAccount: (state, action) => {
      return state;
    },
    fetchAccountSuccess: (state, action) => {
      toast.success("Đăng kí thành công !", {
        position: toast.POSITION.TOP_RIGHT
      });
    },
    fetchAccountFaild: (state, error) => {
      toast.error("Username đã được đăng kí !", {
        position: toast.POSITION.TOP_RIGHT
      });
    },
  },
});

export const { fetchAccount, fetchAccountSuccess, fetchAccountFaild } =
  registerSlice.actions;

export default registerSlice.reducer;
