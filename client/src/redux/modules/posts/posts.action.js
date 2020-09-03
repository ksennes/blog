import { getPosts, addPost, editPost, deletePost } from "./posts.service";

export const POSTS_FETCH_REQUEST = "POSTS_FETCH_REQUEST";
export const POSTS_FETCH_SUCCESS = "POSTS_FETCH_SUCCESS";
export const POSTS_FETCH_FAILED = "POSTS_FETCH_FAILD";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILD";

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILED = "EDIT_POST_FAILD";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILED = "DELETE_POST_FAILD";


export const getPostsAction = () => (dispatch) => {
  dispatch(getPostsRequestAction());

  getPosts()
    .then((res) => {
      dispatch(getPostsSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getPostsFailedAction(err.message));
    });
};

const getPostsRequestAction = () => ({
  type: POSTS_FETCH_REQUEST,
});
const getPostsSuccessAction = (posts) => ({
  type: POSTS_FETCH_SUCCESS,
  payload: { posts },
});
const getPostsFailedAction = (message) => ({
  type: POSTS_FETCH_FAILED,
  payload: { error: message },
});

export const addPostAction = (title, imageURL,  text) => (dispatch) => {
  dispatch(addPostRequestAction());

  addPost(title, text, imageURL)
    .then((res) => {
      dispatch(addPostSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(addPostFailedAction(err.message));
    });
};

const addPostRequestAction = () => ({
  type: ADD_POST_REQUEST,
});
const addPostSuccessAction = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: { post },
});
const addPostFailedAction = (message) => ({
  type: ADD_POST_FAILED,
  payload: { error: message },
});

export const editPostAction = (_id, title, imageURL,  text) => (dispatch) => {
  dispatch(editPostRequestAction());

  editPost(_id, title, imageURL, text)
    .then((res) => {
      dispatch(editPostSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(editPostFailedAction(err.message));
    });
};

const editPostRequestAction = () => ({
  type: EDIT_POST_REQUEST,
});
const editPostSuccessAction = (post) => ({
  type: EDIT_POST_SUCCESS,
  payload: { post },
});
const editPostFailedAction = (message) => ({
  type: EDIT_POST_FAILED,
  payload: { error: message },
});

export const deletePostAction = (_id) => (dispatch) => {
  dispatch(deletePostRequestAction());

  deletePost(_id)
    .then((res) => {
      dispatch(deletePostSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(deletePostFailedAction(err.message));
    });
};

const deletePostRequestAction = () => ({
  type: DELETE_POST_REQUEST,
});
const deletePostSuccessAction = (post_id) => ({
  type: DELETE_POST_SUCCESS,
  payload: { post_id },
});
const deletePostFailedAction = (message) => ({
  type: DELETE_POST_FAILED,
  payload: { error: message },
});