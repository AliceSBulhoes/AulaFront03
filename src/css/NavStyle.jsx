import styled from "styled-components";
import Colors from "./Colors";

 export const NavStyle = styled.header`
    .nav{
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        padding: 10px;
        background-color: ${Colors.bg_color2};
    }
    .link{
        text-transform: uppercase;
        text-decoration: none;
        color: ${Colors.ft_color};
    }
    .fool{
        color: ${Colors.ft_color2};
    }
    
 `