import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/movie.action';
import Home from './Home';

const mapStateToProps = (state) => ({
    movies: state.movies
});

const mapDispatchProps = (dispatch) => ({
    getMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchProps)(Home);
