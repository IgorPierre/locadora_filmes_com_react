import styled from "styled-components";

export const MovieList = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    justify-items: center;
    column-gap: 2rem;
    row-gap: 4rem;

    width: 80%;
    margin-top: 50px;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    transition: 0.4s;

    a img {
        width: 220px;
        margin-bottom: 30px;
    }

    span {
        font-weight: 700;
        font-size: 1.2rem;
    }

    &:hover,:focus{
        transform: scale(1.1);

        span {
            color: #4AD96D;
            padding-left: 3px;
        }
    }
`
