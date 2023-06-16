export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_ERROR = "GET_POST_ERROR";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_ERROR = "DELETE_POST_ERROR";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_API;
export const POST_BACKEND_URL = BACKEND_URL + "/posts";
export const USER_POST_BACKEND_URL = BACKEND_URL + "/posts?userId=";
