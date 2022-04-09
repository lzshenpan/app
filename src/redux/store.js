import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {createBrowserHistory} from 'history';
import { routerReducer, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { connectRouter } from 'connected-react-router'
import reducers from './reducer';
import rootSaga from './saga';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

const store = createStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history)
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);
  export { store,history };