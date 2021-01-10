import { connect } from 'react-redux';
import { getMovieDetails, updateSelectedMovie } from '../../store/actions/movie.action';
import Details from './Details';

const mapStateToProps = (state) => ({
    selectedMovie: state.movies.selectedMovie
});

const mapDispatchProps = (dispatch) => ({
    getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
    updateMovieDetails: () => dispatch(updateSelectedMovie({}))
});

export default connect(mapStateToProps, mapDispatchProps)(Details);
