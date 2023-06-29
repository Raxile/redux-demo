import {
  ADD_POST,
  ADD_POST_ERROR,
  ADD_POST_SUCCESS,
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

export const addPost = (value, cb) => {
  return {
    type: ADD_POST,
    payload: { value, cb },
  };
};

export const addPostSuccess = (response) => ({
  type: ADD_POST_SUCCESS,
  payload: response,
});
export const addPostError = (response) => ({
  type: ADD_POST_ERROR,
  payload: response,
});
