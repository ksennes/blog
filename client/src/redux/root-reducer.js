import { combineReducers } from 'redux';

import { postsReducer } from './modules/posts/posts.reducer';
import { singlePostReducer } from './modules/single-post/single-post.reducer';

export const rootReducer = combineReducers({
    postsReducer,
    singlePostReducer,
});
