import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import './index.css';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);



// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   // prevent someone from manually setting a key of 'jwtToken' in localStorage
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   } catch(e) {
//     store.dispatch(setCurrentUser({}))
//   }
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);
