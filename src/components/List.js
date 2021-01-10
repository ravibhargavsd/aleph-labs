import styled from 'styled-components';

const List = styled.ul`
    padding: ${props => props.padding || '10px'};
    margin: ${props => props.margin || '0'};
    ${props => props.listInline && {
        '& > li': {
            'display': 'inline-block',
            'margin-right': 30,
            'position': 'relative',
            'font-size': '1.1rem',
            '&::after': {
                'content': "''",
                'width': '6px',
                'height': '6px',
                'border-radius': '10px',
                'background-color': 'black',
                'position': 'absolute',
                'top': '50%',
                'transform': 'translate(0%, -50%)',
                'right': '-18px',
            },
            '&:last-child': {
                '&::after': {
                    display: 'none'
                }
            }
        }
    }}
`;

export default List;