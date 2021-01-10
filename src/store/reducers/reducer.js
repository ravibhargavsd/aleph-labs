import * as appActions from '../actions';

const defaultState = {
    movieList: [],
    selectedMovie: {}
};

function reducer(state = defaultState, action = {}) {
    switch(action.type) {
        case appActions.SUCCESS_MOVIES_LIST: 
            return {
                ...state,
                movieList: [
                    ...action.payload
                ]
            };
        case appActions.UPDATE_MOVIE_SELECTED:
            return {
                ...state,
                selectedMovie: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

export default reducer;
