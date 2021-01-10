import * as actions from './index';

export const getMovies = () => ({
    type: actions.GET_MOVIES_LIST
});

export const successGetMovies = (data) => ({
    type: actions.SUCCESS_MOVIES_LIST,
    payload: data
});

export const getMovieDetails = (id) => ({
    type: actions.GET_MOVIE_SELECTED_DETAILS,
    payload: id
});

export const updateSelectedMovie = (data) => ({
    type: actions.UPDATE_MOVIE_SELECTED,
    payload: data
});