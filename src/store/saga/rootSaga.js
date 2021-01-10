// import { fork } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import { watchMovies } from './movieSaga';

export default function* rootSaga() {
    yield all([
        watchMovies()
    ]);
}
