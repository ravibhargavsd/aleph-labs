import { render, screen } from '@testing-library/react';
import { MockMovies } from '../mockData';
import Home from './Home';

const compData = {
    movies: [],
    getMovies: () => {},
    history: {}
};

describe('Home', () => {
    test('renders Home component', () => {
        const getMoviesSpy = jest.fn();
        const _data = {
            ...compData,
            getMovies: getMoviesSpy 
        };
        const data = render(<Home {..._data} />);
        expect(data).toBeTruthy();
        expect(getMoviesSpy).toHaveBeenCalled();
    });
    
    test('render component with mock movies', () => {
        const _data = {
            ...compData,
            movies: {
                movieList: [
                    ...MockMovies
                ]
            }
        };
        const data = render(<Home {..._data} />);
        expect(data).toBeTruthy();
        const titleText = screen.getByText(new RegExp(MockMovies[0].Title + ' - ' + MockMovies[0].Year));
        expect(titleText).toBeInTheDocument();
    });

    test('expect to goto details page', () => {
        const updateRouteSpy = jest.fn();
        const _data = {
            ...compData,
            history: {
                push: updateRouteSpy
            },
            movies: {
                movieList: [
                    ...MockMovies
                ]
            }
        };
        const { container } = render(<Home {..._data} />);
        container.querySelector('img').click();
        expect(updateRouteSpy).toHaveBeenCalled();
    });
});
