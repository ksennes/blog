import { getPostById } from "./single-post.service";

export const POST_BY_ID_FETCH_REQUEST = "POST_BY_ID_FETCH_REQUEST";
export const POST_BY_ID_FETCH_SUCCESS = "POST_BY_ID_FETCH_SUCCESS";
export const POST_BY_ID_FETCH_FAILED = "POST_BY_ID_FETCH_FAILD";

export const getPostByIdAction = (_id) => (dispatch) => {
  dispatch(getPostByIdRequestAction());

  getPostById(_id)
    .then((res) => {
        console.log(res.data);
      dispatch(getPostByIdSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getPostByIdFailedAction(err.message));
    });
};

const getPostByIdRequestAction = () => ({
  type: POST_BY_ID_FETCH_REQUEST,
});

const getPostByIdSuccessAction = (post) => ({
  type: POST_BY_ID_FETCH_SUCCESS,
  payload: { post },
});

const getPostByIdFailedAction = (message) => ({
  type: POST_BY_ID_FETCH_FAILED,
  payload: {
    error: message,
  },
});
