import {
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  GET_POST,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
} from "./actionTypes";

export const getPost = () => {
  return { type: GET_POST };
};

export const getPostSuccess = (response) => ({
  type: GET_POST_SUCCESS,
  payload: response,
});

export const getPostError = (response) => ({
  type: GET_POST_ERROR,
  payload: response,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const deletePostSuccess = (response) => ({
  type: DELETE_POST_SUCCESS,
  payload: response,
});

export const deletePostError = (response) => ({
  type: DELETE_POST_ERROR,
  payload: response,
});
