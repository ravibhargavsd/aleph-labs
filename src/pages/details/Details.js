import React, { useEffect } from 'react';
import { Box, Button, List, Image } from '../../components';

const Details = ({
    match,
    getMovieDetails,
    selectedMovie,
    history,
    updateMovieDetails
}) => {
    useEffect(() => {
        getMovieDetails(match.params?.movieId);
    }, []);

    const changeMovie = () => {
        history.push('/');
        updateMovieDetails();
    };

    const MovieDetails = () => {
        const details = {
            'Director': 'Director',
            'Writer': 'Writer',
            'Actors': 'Actors',
            'Plot': 'Plot',
            'Ratings': 'Ratings'
        };

        let content = [];
        for(let key in details) {
            content.push(
                <Box key={key} display="flex" alignItems="baseline">
                    <Box flexBasis="15%">
                        <b>{key}</b>
                    </Box>
                    <Box flexBasis="85%">
                        {typeof selectedMovie[key] === 'string' ? 
                            selectedMovie[key] : 
                            (selectedMovie[key]?.map((ele, i) => (
                                <Box display="flex" key={i} padding="0 0 15px 0">
                                    <Box flexBasis="60%" padding="0">
                                        {ele.Source}
                                    </Box>
                                    <Box flexBasis="40%" padding="0">
                                        <b>{ele.Value}</b>
                                    </Box>
                                </Box>
                            )))
                        }
                    </Box>
                </Box>
            );
        }

        return content;
    };

    return (
        <Box display="flex" alignItems="baseline" justifyContent="space-between">
            <Box flexBasis="40%" textAlign="center">
                <Box display="flex">
                    <h3>{selectedMovie.Title}</h3>
                </Box>
                <Image image={selectedMovie.Poster} width="auto" />
            </Box>
            <Box flexBasis="60%">
                <List padding="10px 20px" listInline>
                    <li>{selectedMovie.Released}</li>
                    <li>{selectedMovie.Runtime}</li>
                    <li>{selectedMovie.Genre}</li>
                    <li>{selectedMovie.Language}</li>
                </List>
                <MovieDetails />
                <Box textAlign="right">
                    <Button onClick={changeMovie}>
                        Change Movie
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Details;