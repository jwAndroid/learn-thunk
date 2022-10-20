import { combineReducers } from 'redux';

import posts from './slices/posts';

const rootReducer = combineReducers({
  posts,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
