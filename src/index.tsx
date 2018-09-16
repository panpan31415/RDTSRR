import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as reducers from './reducers';

import * as Redux from 'redux';

import App from './App';


import registerServiceWorker from './registerServiceWorker';

import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux';

import './index.css';




const rootReducer = Redux.combineReducers(
  {
    Albums:reducers.LoadAlbumHandler,
    Comments:reducers.LoadCommentHandler,
    Messages:reducers.MessageHandller,
    Posts:reducers.LoadPostDataHandler,
    Users:reducers.LoadUserDataHandler
  });
const store = Redux.createStore(rootReducer,Redux.applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
