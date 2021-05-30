import axiosClient from "./axiosClient";

const authApi = {
    registerUser: (params) => {
        const url = "/register";
        return axiosClient.post(url, params);
    },
    loginUser: (params) => {
        const url = "/login";
        return axiosClient.post(url, params);
    }
};

export default authApi;