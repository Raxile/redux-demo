import axios from "axios";

// import { toast } from "react-toastify/dist/components";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  timeout: 5000,
});

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response);
}
export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response);
}
export async function post(url, data, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => response);
}
export async function put(url, data, config = {}) {
  return await axiosApi
    .put(url, data, { ...config })
    .then((response) => response);
}
export async function patch(url, data, config = {}) {
  return await axiosApi
    .patch(url, data, { ...config })
    .then((response) => response);
}
