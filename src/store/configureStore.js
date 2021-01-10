import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middlewares = [sagaMiddleware];
    const composeEnhancers =
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        createRootReducer,
        composeEnhancers(...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
