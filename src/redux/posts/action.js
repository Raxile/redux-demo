import { GET_POST, GET_POST_ERROR, GET_POST_SUCCESS } from "./actionTypes";

export const getPost = () => ({
  type: GET_POST,
});

export const getPostSuccess = (response) => ({
  type: GET_POST_SUCCESS,
  payload: response,
});

export const getPostError = (response) => ({
  type: GET_POST_ERROR,
  payload: response,
});
