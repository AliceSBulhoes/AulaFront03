import styled from 'styled-components';
import Colors from './Colors';

export const KleinStyle = styled.section`
    .klein{
        width: 100%;
        height: 89vh;
        padding: 10px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .image{
        background-image: url(./src/assets/imagem2.jpg);
    }
    h1{
        color: ${Colors.ft_color2};
        text-transform: uppercase;
    }
`