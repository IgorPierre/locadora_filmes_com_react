import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 40px 0;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        column-gap: 2rem;
        row-gap: 4rem;

        width: 80%;
        margin-top: 50px;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 220px;
        transition: .4s;
    }

    img:hover {
        transform: scale(1.2);
    }
`

