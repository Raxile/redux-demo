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
  UPDATE_POST,
  UPDATE_POST_ERROR,
  UPDATE_POST_SUCCESS,
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
    case ADD_POST:
      state = { ...state, loading: true };
      break;
    case ADD_POST_ERROR:
      state = {
        ...state,
        loading: false,
        error: action?.payload?.message,
      };
      break;
    case ADD_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload.data],
      };
      break;
    case UPDATE_POST:
      state = { ...state, loading: true };
      break;
    case UPDATE_POST_SUCCESS:
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.data.id)
          return { ...post, ...action.payload.data };
        else return post;
      });
      state = { ...state, loading: false, posts: updatedPosts };
      break;
    case UPDATE_POST_ERROR:
      state = { ...state, loading: false, error: action?.payload?.message };
      break;
    default:
      state = { ...state };
  }
  return state;
};
