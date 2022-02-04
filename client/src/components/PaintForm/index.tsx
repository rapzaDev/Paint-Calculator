import { ChangeEventHandler, MouseEventHandler } from "react";
import { Button } from "../Button";
import { 
    VisibleContainer,
    InputsContent,
    CheckBoxContent,
    CheckboxContainer, 
    DoorCheckbox, 
    InputFormContainer, 
    SpanFormContent, 
    Windows_DoorsInput,
} from "./styles";

interface PaintFormComponentProps {
    handleChange: ChangeEventHandler,
    handleChangeWindowsInput: ChangeEventHandler,
    handleChangeDoorsInput: ChangeEventHandler,
    handleChangeLength: ChangeEventHandler,
    handleChangeDoorCheckbox: ChangeEventHandler,
    handleChangeWindowsCheckbox: ChangeEventHandler,
    windowsCheckbox: boolean,
    doorCheckbox: boolean,
    wallsCounter: number,
    handleClickNextButton(): void,
    showNextButton: boolean,
    buttonType: "button" | "submit" | "reset",
    heightCheck: number,
    lengthCheck: number
}

function PaintFormComponent ({ 
    handleChange,
    handleChangeWindowsInput,
    handleChangeDoorsInput,
    handleChangeLength,
    handleChangeDoorCheckbox,
    handleChangeWindowsCheckbox,
    windowsCheckbox,
    doorCheckbox,
    wallsCounter,
    handleClickNextButton,
    showNextButton,
    buttonType,
    heightCheck,
    lengthCheck
} : PaintFormComponentProps
) {


    return (
            <VisibleContainer>
                
                <InputsContent>
                    <InputFormContainer>
                        <label htmlFor="height">Height of the wall in m:</label>
                        <input 
                            type="number" 
                            name="height"
                            onChange={handleChange}
                            required
                            step="0.1"
                            checked={!!heightCheck}
                            defaultValue={0}
                            min={0}
                        />
                    </InputFormContainer>

                    <InputFormContainer>
                        <label htmlFor="length">Length of the wall in m:</label>
                        <input 
                            type="number" 
                            name="length"
                            onChange={handleChangeLength}
                            required
                            step="0.1"
                            checked={!!lengthCheck}    
                            defaultValue={0}
                            min={0}
                        />
                    </InputFormContainer>
                </InputsContent>

                <CheckBoxContent>
                    <CheckboxContainer>

                        <SpanFormContent>
                            This wall have any windows?
                        </SpanFormContent>

                        <DoorCheckbox 
                            type="checkbox" 
                            name="windowsCheckbox"
                            onChange={handleChangeWindowsCheckbox}
                            checked={windowsCheckbox}
                        />

                    </CheckboxContainer>

                    { windowsCheckbox ? 
                        <Windows_DoorsInput 
                            type="number" 
                            name="windows"
                            defaultValue={0}
                            onChange={handleChangeWindowsInput}
                            min={0}
                        />
                         : <></>
                    }

                    <CheckboxContainer>

                        <SpanFormContent>
                            This wall have any doors?
                        </SpanFormContent>

                        <DoorCheckbox 
                            type="checkbox" 
                            name="doorCheckbox"
                            onChange={handleChangeDoorCheckbox}
                            checked={doorCheckbox}
                        />

                    </CheckboxContainer>

                    { doorCheckbox ? 
                        <Windows_DoorsInput 
                            type="number" 
                            name="doors"
                            defaultValue={0}
                            min={0}
                            onChange={handleChangeDoorsInput}
                        /> : <></>
                    }

                </CheckBoxContent>

                { ( wallsCounter < 5) ? 
                    <Button
                        active={showNextButton}
                        onClick={handleClickNextButton}
                        name={"Next"}
                        type={buttonType}
                    /> : <></> 
                }
            </VisibleContainer>
    );
}

export { PaintFormComponent };