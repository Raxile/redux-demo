import { POSTS } from "./actionTypes";
import { del, get, post, put } from "../../helpers/api.helper";
export const callGetPost = async () => {
  try {
    const res = await get(POSTS);
    return res;
  } catch (error) {
    return error;
  }
};
export const callDeletePost = async (postId) => {
  try {
    const res = await del(POSTS + "/" + postId);
    return res;
  } catch (error) {
    return error;
  }
};
export const callAddPost = async (data) => {
  try {
    const res = await post(POSTS, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const callUpdatePost = async (data) => {
  try {
    const res = await put(POSTS + "/" + data?.id, data);
    return res;
  } catch (error) {
    return error;
  }
};

// export const callGetUserPosts = async (userId) => {
//   try {
//     const res = await axios(USER_POST_BACKEND_URL + userId);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
