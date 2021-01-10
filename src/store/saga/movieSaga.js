import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions';
import { successGetMovies, updateSelectedMovie } from '../actions/movie.action';

const apiEndPoint = 'http://www.omdbapi.com/?apikey=b9bd48a6';

export function* watchMovies() {
    yield takeEvery(types.GET_MOVIES_LIST, getMoviesList);
    yield takeEvery(types.GET_MOVIE_SELECTED_DETAILS, getMovieDetails);
}

export function* getMoviesList() {
    try {
        const res = yield axios.get(`${apiEndPoint}&s=Marvel&type=movie`);
        yield put(successGetMovies(res.data?.Search));
    } catch (error) {
        console.log(error);
    }
}

export function* getMovieDetails({payload}) {
    try {
        const res = yield axios.get(`${apiEndPoint}&i=${payload}`);
        yield put(updateSelectedMovie(res.data));
    } catch (error) {
        console.log(error);
    }
}