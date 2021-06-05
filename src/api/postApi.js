import axiosClient from "./axiosClient";
import {omit} from "lodash"

const postApi = {
    getAllPost: () => {
        const url = "/admin/news";
        return axiosClient.get(url);
    },
    createPost: (params) => {
        const url = `/admin/${params.category_id}/news`
        const validateParams = omit(params, ['category_id'])
        return axiosClient.post(url, validateParams);
    },

    removePost: (id) => {
        const url = `/admin/news/${id}`
        return axiosClient.delete(url);
    },

    updatePost: (params) => {
        const url = `/admin/${params.category_id}/news/${params.news_id}`
        return axiosClient.put(url, params);
    },

};

export default postApi;