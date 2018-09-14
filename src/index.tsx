import App from './App';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import './index.css';






const rootReducer = Redux.combineReducers({...reducers});
const store = Redux.createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
