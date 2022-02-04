import styled, { keyframes } from "styled-components";

interface ButtonContainerProps {
    active: boolean;
}

const fadeZ = keyframes`
    0% {
        transform: translateZ(-5rem);
        opacity: 0;
    }
`

export const ButtonContainer = styled.button<ButtonContainerProps>`

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