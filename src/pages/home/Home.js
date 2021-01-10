import React, { useEffect } from 'react';
import { Box, Image } from '../../components';

const Home = ({
    movies,
    getMovies,
    history
}) => {
    useEffect(() => {
        getMovies();
    }, []);

    const gotoDetails = (evt) => history.push(evt.target.parentElement.id || evt.target.id);

    return (
        <div>
            <Box onClick={gotoDetails} display="flex" justifyContent="flex-start" textAlign="center">
                {movies.movieList?.map((movie, i) => (
                    <Box key={i} flexBasis="25%" id={movie.imdbID}>
                        <Image image={movie.Poster} height="200px" />
                        <h5> {movie.Title + ' - ' + movie.Year} </h5>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Home;