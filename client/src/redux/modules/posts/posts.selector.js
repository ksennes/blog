import { createSelector } from "reselect";

export const getPostsSelector = createSelector(
  [(state) => state.postsReducer.posts],
  (posts) => posts
);
