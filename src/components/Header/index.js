import styled from "styled-components"

export const Header = styled.header`
    background-color: #C8C1D9;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 10vh;
    

    img {
        width: 180px;
    }

    nav {
        display: flex;
        justify-content: space-evenly;

        width: 30%;
    }

    a {
        text-decoration: none;
        color: #453073;

        font-size: 18px;
        font-weight: 700;

        transition: 0.2s;

        &:hover{
            color: #6C568C;
            box-shadow: 0 3px 0 #F2D6BD;
           
        }
    }

    
`