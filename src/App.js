import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

const App = () => (
  <Provider store={store}>
    <InboxScreen />
  </Provider>
);

export default App;
