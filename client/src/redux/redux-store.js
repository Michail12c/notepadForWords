import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import lessonReducer from './reducers/lesson';
import userReducer from './reducers/user';

let rootReducers = combineReducers({
  lessonReducer,
  userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;