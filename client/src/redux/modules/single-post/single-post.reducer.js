import { toast } from 'react-toastify';
import {
  POST_BY_ID_FETCH_REQUEST,
  POST_BY_ID_FETCH_SUCCESS,
  POST_BY_ID_FETCH_FAILED
} from "./single-post.actions";

const initialState = {
  post: null,
  error: null,
};

export const singlePostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_BY_ID_FETCH_REQUEST:
      return {
        ...state,
      };
    case POST_BY_ID_FETCH_SUCCESS:
      return {
        ...state,
        post: payload.post,
      };
    case POST_BY_ID_FETCH_FAILED:
      toast.error(payload.error);
      return {
        ...state,
        error: payload.error
      };
    default:
      return state;
  }
};