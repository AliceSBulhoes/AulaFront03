import styled from 'styled-components';
import Colors from './Colors';

export const HomeStyle = styled.section`
    .home{
        width: 100%;
        height: 89vh;
        padding: 10px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .image{
        background-image: url(./src/assets/imagem.jpg);
    }
    h1{
        color: ${Colors.ft_color};
        text-transform: uppercase;
    }
`