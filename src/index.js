import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WishList from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WishList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
