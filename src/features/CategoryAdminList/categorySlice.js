import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  data: null,
};

const name = "category";

export const categorySlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchCategory: (state, action) => {
      return state;
    },
    fetchCategorySuccess: (state, action) => {
      state.data = action.payload;
      toast.success(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    fetchCategoryFaild: (state, error) => {
      toast.error("Mật khẩu hoặc tài khoản không chính xác !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    createCategory: (state, action) => {
      return state;
    },
    createCategorySuccess: (state, action) => {
      toast.success("Thêm danh mục thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    createCategoryFaild: (state, error) => {
      toast.error("Thêm danh mục thất bại !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    removeCategory: (state, action) => {
      return state;
    },
    removeCategorySuccess: (state, action) => {
      toast.success("xóa danh mục thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    removeCategoryFaild: (state, error) => {
      toast.error("xóa danh mục thất bại !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  },
});

export const {
    fetchCategory,
    fetchCategorySuccess,
    fetchCategoryFaild,
    createCategory,
    createCategorySuccess,
    createCategoryFaild,
    removeCategory,
    removeCategorySuccess,
    removeCategoryFaild
} = categorySlice.actions;

export default categorySlice.reducer;
