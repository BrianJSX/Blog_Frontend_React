import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    data: null,
    isLogin: false
};

const name = "login";


export const loginSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchAccountLogin: (state, action) => {
            return state;
        },
        fetchAccountLoginSuccess: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("role", action.payload.user.roleEntity.name);
            toast.success(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        },
        fetchAccountLoginFaild: (state, error) => {
            state.isLogin = false;
            toast.error("Mật khẩu hoặc tài khoản không chính xác !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        },
        setStateDatalogin: (state, action) => {
            localStorage.setItem("username", action.payload);
            state.data = action.payload;
        },
    },
});

export const {
    fetchAccountLogin,
    fetchAccountLoginSuccess,
    fetchAccountLoginFaild,
    setStateDatalogin,
} = loginSlice.actions;

export default loginSlice.reducer;