import { createSelector } from "reselect";

export const getPostSelector = createSelector(
  [(state) => state.singlePostReducer .post],
  (post) => post
);
