import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    min-height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    padding: 2rem;
`
const fadeUp = keyframes`
    0% {
        transform: translateY(-5rem);
        opacity: 0;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    padding: 0 4rem;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.08);

    animation:${fadeUp} .3s linear .3s backwards ;

    h3 {
        display: flex;
        justify-content: center;
        margin-bottom: 1.1rem;
    }

    div#warnings__wrapper {
        display: grid;
        grid-template-columns: repeat(1, auto);

        @media (max-width: 800px) {
            padding: 0 2rem;
            margin-bottom: 2.5rem;
        }

    }

    @media (max-width: 949px) {
        padding-bottom: 2rem;
        padding-top: 1rem;
    }

    @media (max-width: 1179px) {
        width: 55rem;
    }

`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;

    margin-bottom: 1.5rem;
`

interface WarningProps {
    active: boolean;
}

export const Warning = styled.div<WarningProps>`
    display: flex;

    border: .2rem solid #131811;
    border-radius: .3rem;
    padding: .4rem;

    background: ${ props => props.active ? "#131811" : "#fff" };
    color: ${ props => props.active ? "#fff" : "#131811" };

    transition: background .4s linear;
    transition: color .8s linear;

     & + & {
         margin-top: 1rem;
     }

     p {
        font-weight: bold;
     }

`

export const MainContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin-top: 3rem;
    padding: 0 3rem;
    
    border: 0.3rem solid #131811;
    border-radius: 12px;

    form {
        margin-bottom: 3rem;
    }

    @media (max-width: 1179px) {
        grid-template-columns: repeat(1, auto);
        width: 47rem;
    }

    @media (max-width: 800px) {
        padding: 0 0.5rem;
        margin: auto;
        width: 38rem;
    }

    @media (max-width: 730px) {
        grid-template-columns: repeat(1, auto);
        margin: auto;
        width: 33rem;
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(1, auto);
        margin: auto;
        width: 36rem;
    }

    @media (max-width: 550px) {
        width: 33rem;
    }

    @media (max-width: 500px) {
        width: 27rem;
        justify-content: center;
    }

    @media (max-width: 390px) {
        width: 24rem;
        justify-content: center;
    }

`;


export const HomeForm = styled.form`
    margin-left: 3rem;
    padding-right: 6rem;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;

    button {
        font-size: 1.1rem;
    }

    @media (max-width: 810px) {
        padding: auto;
    }
        
`;

export const ButtonContainer = styled.div`
    margin-left: 3rem;
    padding-right: 6rem;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;

    button {
        font-size: 1.1rem;
        margin-bottom: 3.5rem;
    }

    @media (max-width: 1179px) {
        margin-left: 10rem;
    }
    
    @media (max-width: 450px) {
        margin-left: 6.6rem;
    }

    @media (max-width: 412px) {
        margin-left: 5.5rem;
    }

    @media (max-width: 390px) {
        margin-left: 6rem;
    }




`;

export const CounterWallsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1rem solid #131811;


    h2 {
        font-size: 35px;
        margin-left: 2rem;
    }

    p {
        margin-left: 1rem;
        font-weight: bold;
        font-size: 35px;

        @media (max-width: 428px) {
            margin-right: 2rem;
        }

    }

    @media (max-width: 1179px) {
        border: none;
        border-top: 1rem solid #131811;
        padding: 1rem 0;
    }

    @media (max-width: 500px) {
        width: 26rem;
        margin: auto;
    }

    @media (max-width: 428px) {
        width: 25rem;
        margin: auto;
    }

    @media (max-width: 390px) {
        width: 22rem;
        margin: auto;
    }

`;

const fadeRight = keyframes`
    0% {
        transform: translateX(5rem);
        opacity: 0;
    }
`

export const FinalContentContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(1, auto);
    align-items: center;
    justify-content: center;
    border-left: 1rem solid #131811;
    padding-left: 3rem;

    animation: ${fadeRight} .4s linear;

    @media (max-width: 1179px) {

        border: none;
        border-top: 1rem solid #000;

        padding: 0;
        padding: 2rem 0.7rem;

        margin: auto;

        width: 30rem;
    }

    @media (max-width: 500px) {

        border: none;
        border-top: 1rem solid #000;

        padding: 0;
        padding: 2rem 0.7rem;

        margin: auto;

        width: 20rem;
    }


`;


export const ShowDataContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        margin-left: 1rem;

        font-weight: bold;
        font-size: 1.3rem;

        height: 2rem;
        width: 6rem;

        background: #131811;
        color: #fff;

        border: 0.1rem solid #131811;

`;

export const FinalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const fadeZ = keyframes`
    0% {
        transform: translateZ(5rem);
        opacity: 0;
    }
`

export const PaintCansContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, auto);
    justify-content: center;
    align-items: center;
    margin-left: auto;

    animation: ${fadeZ} .6s linear;

    background: #131811;
    color: #fff;

    padding: 4rem;
    padding-bottom: 1.2rem;
    padding-top: 1.5rem;

    button {
        margin-left: 25.6%;
        border: 0.2rem solid #fff;
        font-size: 1.2rem;

        @media (max-width: 810px) {
            margin: auto;
            margin-top: 2rem;
        }

        @media (max-width: 500px) {
            margin: auto;
            margin-top: 2rem;
        }

    }

    @media (max-width: 500px) {
        border-radius: 6.3px;
        padding-right: 0;

        width: 23.5rem;
        padding-left: 1rem;
    }

    @media (max-width: 428px) {
        border-radius: 6.3px;
        padding-right: 0;

        width: 26.5rem;
        padding-left: 1rem;
    }

    @media (max-width: 390px) {
        border-radius: 6.3px;
        padding-right: 0;

        width: 23.5rem;
        padding-left: 1rem;
    }

`;

export const PaintCansDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {

        @media (max-width: 500px) {
            margin-bottom: 1rem;
            padding: 0 0.7rem;
        }

    }

    p {
        font-size: 1.15rem;
        font-weight: bold;
    }

    p + p {
        margin-top: 2rem;

        @media (max-width: 500px) {
            margin-bottom: 1rem;
            padding: 0 0.7rem;
        }

    }

`;

export const PaintCans = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1rem;

    span {
        margin-bottom: .5rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

`;
