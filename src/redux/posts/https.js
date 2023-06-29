import { POSTS } from "./actionTypes";
import { del, get, post } from "../../helpers/api.helper";
export const callGetPost = async () => {
  try {
    const res = await get(POSTS);
    return res;
  } catch (error) {
    return error;
  }
};
export const callDeletePost = async (postId) => {
  console.log("delete Api Call", postId);
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
// export const callUpdatePost = async (postId, data) => {
//   try {
//     const res = await axios({
//       method: "put",
//       url: POST_BACKEND_URL + `/${postId}`,
//       data,
//     });
//     return res;
//   } catch (error) {
//     return error;
//   }
// };

// export const callGetUserPosts = async (userId) => {
//   try {
//     const res = await axios(USER_POST_BACKEND_URL + userId);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
