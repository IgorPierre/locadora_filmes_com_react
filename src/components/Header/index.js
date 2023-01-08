import styled from "styled-components"

export const Header = styled.header`
    background-color: #F2ECE9;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 10vh;
    

    img {
        width: 180px;
    }
`
export const SearchArea = styled.form`
    width: 40%;

    input {
        color: #393E59;
        padding: 8px;
        width: 85%;
        border: 0;
        border-radius: 15px 0 0 15px;
    }

    button {
        background-color: #4AD96D;
        color: #393E59;
        width: 15%;
        padding: 8px 5px;
        border: 0;
        border-radius: 0 15px 15px 0;
    }
`