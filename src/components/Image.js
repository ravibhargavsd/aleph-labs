import styled from 'styled-components';

const Image = styled.img.attrs((props) => ({
    src: props.image,
    width: props.width || '100%'
}))`
    ${props => props.height && {
        height: props.height,
        width: 'auto'
    }}
`;

export default Image;