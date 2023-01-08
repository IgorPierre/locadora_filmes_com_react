import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 90vh;
    padding-bottom: 40px;

    h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: #9F79F2;
        margin-bottom: 15px;
    }

    .back-page {
        position: absolute;
        top: 12vh;
        left: 3%;
        font-size: 40px;
        color: #F2D6BD;
    }

    .carousel {
        background-color: #C8C1D9;

        text-align: center;
        width: 100%;
        margin-bottom: 50px;
        padding: 20px 30px;
        
        overflow: hidden;
    }

    .inner {
        display: flex;
        width: 100%;
        cursor: grab;
    }

    .item img {
        width: 15%;
        min-width: 200px;
        padding: 5px 8px;
        pointer-events: none;
    }

    .item a {
        text-decoration: none;
        color: #393E59;

        font-size: 1rem;
        font-weight: 700;
        transition: 0.3s;

        &:hover {
            color: #9F79F2;
        }
    }

    
`