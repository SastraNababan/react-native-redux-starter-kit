import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';
import middlewareExample from './middlewares'

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware =[thunk,middlewareExample]

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
 
export default configureStore