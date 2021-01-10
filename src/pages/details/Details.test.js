import { render, screen } from '@testing-library/react';
import { MockMovieDetails } from '../mockData';
import Details from './Details';

const compData = {
    selectedMovie: {},
    match: {},
    getMovieDetails: (id) => {},
    history: {},
    updateMovieDetails: () => {}
};

describe('Details', () => {
    test('renders Details component', () => {
        const getMovieDetailsSpy = jest.fn();
        const _data = {
            ...compData,
            getMovieDetails: getMovieDetailsSpy
        };
        const data = render(<Details {..._data} />);
        expect(data).toBeTruthy();
        expect(getMovieDetailsSpy).toHaveBeenCalled();
    });
    
    test('expect to click on back button', () => {
        const updateMovieDetailsSpy = jest.fn();
        const _data = {
            ...compData,
            updateMovieDetails: updateMovieDetailsSpy,
            history: {
                push: () => {}
            }
        };
        const { container } = render(<Details {..._data} />);
        container.querySelector('button').click();
        expect(updateMovieDetailsSpy).toHaveBeenCalled();
    });
    
    test('expect text to be in document', () => {
        const _data = {
            ...compData,
            selectedMovie: {
                ...MockMovieDetails
            }
        };
        render(<Details {..._data} />);
        const titleText = screen.getByText(new RegExp(MockMovieDetails.Title));
        expect(titleText).toBeInTheDocument();
    });
});
