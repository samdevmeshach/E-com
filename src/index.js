import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import ReactDOM from 'react-dom';
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
