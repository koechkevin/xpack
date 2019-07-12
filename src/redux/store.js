import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middlewares = [thunk];
const middleware = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(
  rootReducer, middleware,
);

export default store;
