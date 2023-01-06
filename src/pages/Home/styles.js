import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 40px 0;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #9F79F2;
        text-decoration-line: underline;
    }
`

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

    a img {
        width: 220px;
        transition: .4s;
        margin-bottom: 30px;
    }

    a img:hover {
        transform: scale(1.2);
    }

    span {
        font-weight: 700;
        font-size: 1.2rem;
    }
`
