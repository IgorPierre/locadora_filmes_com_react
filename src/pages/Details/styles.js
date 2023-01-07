import styled from "styled-components";

export const DetailsArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 90vh;

    padding: 3%;

    .back-page {
        position: absolute;
        top: 12vh;
        left: 3%;
        font-size: 40px;
        color: #F2D6BD;
    }

    img {
        width: 40%;
        max-width: 350px;
    }

`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 60%;
    max-width: 500px;
    height: 50%;
    padding: 1rem;

    h2 {
       color : #9F79F2;
    }

    span {
        color: #F2D6BD;
    }

`
