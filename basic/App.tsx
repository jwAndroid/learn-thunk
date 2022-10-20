/**
 * @format
 */

import React, { memo } from 'react';
import { Provider } from 'react-redux';

import PostApp from './src/components/PostApp';
import { store } from './src/redux/config';

function App() {
  return (
    <Provider store={store}>
      <PostApp />
    </Provider>
  );
}

export default memo(App);
