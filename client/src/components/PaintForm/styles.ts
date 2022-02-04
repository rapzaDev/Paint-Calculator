import styled, { keyframes } from 'styled-components';



export const VisibleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    width: 20rem;
    margin-left: 10%;

    @media (max-width: 1179px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 23%;
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 18%;
    }

    @media (max-width: 730px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 12.5%;
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 16%;
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 13%;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 8%;
    }

    @media (max-width: 390px) {
        grid-template-columns: repeat(1, auto);
        margin-left: 3rem;
    }

`;

export const InputsContent = styled.div`
    border-right: .5rem solid #131811;
    padding-right: 5rem;

    display: flex;
    flex-direction: column;

    @media (max-width: 1179px) {
        padding-right: 0;

        border: none;
        border: .3rem solid #131811;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
    }

    @media (max-width: 720px) {

        border: none;
        border: .3rem solid #131811;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
    }
`;

export const CheckBoxContent = styled.div`
    margin-bottom: 1rem;
    margin-left: 2rem;
    font-size: .9rem;
    font-weight: bold;

    @media (max-width: 730px) {
        
        display: grid;
        grid-template-columns: repeat(1, auto);
        margin: 0;
    }

    @media (max-width: 1179px) {
        display: grid;
        grid-template-columns: repeat(1, auto);
        margin: 0;
    }

`;


export const InputFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  
    margin-top: 1rem;
    margin-bottom: 1rem;

    align-items: center;

    label {
        margin-bottom: 0.5rem;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 0.7px;
        line-height: 1.3;

        @media (max-width: 810px) {
            width: 7.9rem;
        }

    }

    input {
        padding: 0.55rem 0.4rem;
        border: 1px solid #131811;
        border-radius: 4px;
        font-size: 0.8rem;
        outline: none;
        width: 85%;
        color: #fff;
        font-weight: bold;
        background: #131811;
        width: 5rem;
    }



`;

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
`;

export const SpanFormContent = styled.span`

    & + & {
        margin-top: 10rem;
    }
`;

export const DoorCheckbox = styled.input`
    margin-left: 1rem;
`;

export const Windows_DoorsInput = styled.input`

    margin: 1rem 0;
    margin-left: 33%;

    padding: 0.55rem 0.4rem;
    border: 1px solid #131811;
    border-radius: 4px;
    font-size: 0.8rem;
    outline: none;
    color: #fff;
    font-weight: bold;
    background: #131811;
    width: 5rem;
`;

interface ContinueButtonFormProps {
    active: boolean;
}

const fadeZ = keyframes`
    0% {
        transform: translateZ(-5rem);
        opacity: 0;
    }
`

export const ContinueButtonForm = styled.input<ContinueButtonFormProps>`

    display: ${ props => props.active 
            ? "flex"
            : "none"
    };

    animation: ${fadeZ} .4s linear;
    
    justify-content: center;
    align-items: center;

    margin-top: 2.5rem;
    border-radius: 4px;
    height: 3rem;
    width: 20rem;

    font-weight: bold;
    background: #131811;
    color: #fff;
    font-family: "Roboto";

    transition: .2s linear;
    &:hover {
        transform: scale(1.05); 
        
    }

`;