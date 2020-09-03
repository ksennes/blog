import { toast } from "react-toastify";
import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILED,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
} from "./posts.action";

const initialState = {
  posts: null,
  error: null,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_FETCH_REQUEST:
      return {
        ...state,
      };
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        posts: payload.posts,
      };
    case POSTS_FETCH_FAILED:
      toast.error(payload.error);
      return {
        ...state,
        error: payload.error,
      };
    case ADD_POST_REQUEST:
      return {
        ...state,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [payload.post].concat(state.posts),
      };
    case ADD_POST_FAILED:
      toast.error(payload.error);
      return {
        ...state,
        error: payload.error,
      };
    case EDIT_POST_REQUEST:
      return {
        ...state,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((p) =>
          payload.post.id === p._id ? payload.post : p
        ),
      };
    case EDIT_POST_FAILED:
      toast.error(payload.error);
      return {
        ...state,
        error: payload.error,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((p) => payload.post_id !== p._id),
      };
    case DELETE_POST_FAILED:
      toast.error(payload.error);
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
