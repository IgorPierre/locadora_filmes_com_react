import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 90vh;
    padding-bottom: 40px;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #9F79F2;
        margin-bottom: 15px;
    }

    .carousel {
        background-color: #C8C1D9;

        text-align: center;
        width: 100%;
        margin-bottom: 50px;
        padding: 10px 30px;
        
        cursor: grab;
        overflow: hidden;
    }

    .inner {
        display: flex;
        width: 100%;
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