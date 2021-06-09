import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  data: null,
};

const name = "category";

export const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    createPost: (state, action) => {
      return state;
    },
    createPostSuccess: (state, action) => {
      toast.success("Thêm bài viết thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    createPostFaild: (state, error) => {
      toast.error("Thêm bài viết thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    fetchPost: (state, action) => {
      return state;
    },
    fetchPostSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchPostFaild: (state, error) => {
      toast.error("lấy bài viết thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    removePost: (state, action) => {
      return state;
    },
    removePostSuccess: (state, action) => {
      toast.success("Xóa bài viết thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    removePostFaild: (state, error) => {
      toast.error("Xóa bài viết thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    updatePost: (state, action) => {
      return state;
    },
    updatePostSuccess: (state, action) => {
      toast.success("cập nhật bài viết thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    updatePostFaild: (state, error) => {
      toast.error("cập nhật bài viết thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },  
  },
});

export const {
    createPost,
    createPostSuccess,
    createPostFaild,
    fetchPost,
    fetchPostSuccess,
    fetchPostFaild,
    removePost,
    removePostSuccess,
    removePostFaild,
    updatePost,
    updatePostSuccess,
    updatePostFaild
} = postSlice.actions;

export default postSlice.reducer;
