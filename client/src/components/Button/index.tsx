import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    active: boolean;
    onClick(): void;
    name: string;
    type: string;
}

function Button( { active, onClick, name, type } : ButtonProps ) {

    return (
        <ButtonContainer
            active={active}
            onClick={() => onClick()}
            type={type}
        >
            {name}
        </ButtonContainer>
    );
}

export { Button };