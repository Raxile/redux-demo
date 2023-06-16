import {
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  GET_POST,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
} from "./actionTypes";

const initialState = {
  posts: [],
  error: "idle",
  loading: false,
};

export const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      state = { ...state, loading: true };
      break;
    case GET_POST_SUCCESS:
      state = { ...state, loading: false, posts: action?.payload?.data };
      break;
    case GET_POST_ERROR:
      state = { ...state, loading: false, error: action?.payload?.message };
      break;
    case DELETE_POST:
      state = { ...state, loading: true, deletedId: action?.payload };
      break;
    case DELETE_POST_SUCCESS:
      const { posts, deletedId } = state;
      const remainigPosts = posts.filter((post) => post.id !== deletedId);
      state = {
        ...state,
        loading: false,
        posts: remainigPosts,
      };
      delete state.deletedId;
      break;
    case DELETE_POST_ERROR:
      state = {
        ...state,
        loading: false,
        error: action?.payload?.message,
      };
      break;
    default:
      state = { ...state };
  }
  return state;
};
