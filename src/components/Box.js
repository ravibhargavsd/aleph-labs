import styled from 'styled-components';

const Box = styled.div`
    display: ${props => props.display || 'block'};
    ${props => props.display === 'flex' && {
        'align-items': props.alignItems || 'center',
        'justify-content': props.justifyContent || 'center',
        'flex-wrap': props.flexWrap || 'wrap'
    }};
    ${props => props.flexBasis && {
        'flex-basis': props.flexBasis
    }};
    box-sizing: ${props => props.boxSizing || 'border-box'};
    padding: ${props => props.padding || '10px'};
    ${props => props.textAlign && {
        'text-align': props.textAlign
    }};
    cursor: ${props => props.cursor || 'pointer'};
`;

export default Box;