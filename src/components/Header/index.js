import styled from "styled-components"

export const Header = styled.header`
    background-color: #F2ECE9;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 10vh;
    

    img {
        width: 10rem;
        cursor: pointer;
    }
`
export const SearchArea = styled.form`
    display: flex;
    width: 50%;

    input {
        color: #393E59;
        padding: 8px;
        width: 85%;
        border: #C8C1D9 1px solid;
        border-radius: 15px 0 0 15px;
    }

    a {
        background-color: #6C568C;
        color: #FFF;
        padding: 4px 15px;
        border: #6C568C 1px solid;
        border-radius: 0 15px 15px 0;
        text-align: center;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: #4AD96D;
            color: #393E59;
        }
    }
`