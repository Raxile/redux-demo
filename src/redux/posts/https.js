import axios from "axios";
import { POST_BACKEND_URL, USER_POST_BACKEND_URL } from "./actionTypes";
export const callGetPost = async () => {
  try {
    const res = await axios(POST_BACKEND_URL);
    return res;
  } catch (error) {
    return error;
  }
};
export const callDeletePost = async (postId) => {
  console.log("delete Api Call", postId);
  try {
    const res = await axios.delete(POST_BACKEND_URL + "/" + postId);
    return res;
  } catch (error) {
    return error;
  }
};
export const callUpdatePost = async (postId, data) => {
  try {
    const res = await axios({
      method: "put",
      url: POST_BACKEND_URL + `/${postId}`,
      data,
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const callAddPost = async (data) => {
  try {
    const res = await axios({
      method: "post",
      url: POST_BACKEND_URL,
      data,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const callGetUserPosts = async (userId) => {
  try {
    const res = await axios(USER_POST_BACKEND_URL + userId);
    return res;
  } catch (error) {
    return error;
  }
};
