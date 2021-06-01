import axiosClient from "./axiosClient";

const urlApi = "/admin/categories"

const categoryApi = {
    getAllCategory: () => {
        const url = urlApi;
        return axiosClient.get(url);
    },
    CreateCategory: (params) => {
        const url = urlApi;
        return axiosClient.post(url, params);
    },
    removeCategory: (id) => {
        const url = `/admin/categories/${id}`;
        return axiosClient.delete(url);
    }
};

export default categoryApi;