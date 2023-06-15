import { GET_POST, GET_POST_ERROR, GET_POST_SUCCESS } from "./actionTypes";

const initialState = {
  posts: [],
  error: "idle",
  loading: false,
};

const getPostReducer = (state = initialState, action) => {
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
    default:
      state = { ...state };
  }
  return state;
};

export default getPostReducer;
