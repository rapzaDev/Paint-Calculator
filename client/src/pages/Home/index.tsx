import React, { useState } from 'react';
import {
    HomeContainer,
    ContentContainer,
    Title,
    Warning,
    MainContentContainer,
    HomeForm,
    CounterWallsContainer,
    FinalContentContainer,
    ShowDataContainer,
    FinalContent,
    ButtonContainer,
    PaintCansContainer,
    PaintCansDescription,
    PaintCans
} from './styles';

import { PaintFormComponent } from '../../components/PaintForm';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

interface CansData {
    GG: 0, 
    G: 0, 
    M: 0, 
    P: 0
};

function Home() {

    const formInitialState = {
        height: 0,
        length: 0,
        doors: 0,
        windows:0,
    }

    const [ wallsCounter, setWallsCounter ] = useState(1);
    const [ form, setForm ] = useState(formInitialState);

    const [ windowsCheckbox, setWindowsCheckbox] = useState(false);
    const [ doorCheckbox, setDoorCheckbox] = useState(false);

    const [ showNextButton, setShowNextButton ] = useState(false);

    const [ walls, setWalls ] = useState(0);
    const [ windows_doors, setWindows_Doors ] = useState(0);

    //saving height & length states to control the state of next button
    const [ heightCheck, setHeightCheck ] = useState(0);
    const [ lengthCheck, setLengthCheck ] = useState(0);

    //saving quantity of doors & windows in these states
    const [ windowsCheck, setWindowsCheck ] = useState(0);
    const [ doorsCheck, setDoorsCheck ] = useState(0);

    //error messages states of inputs
    const [ wallAreaError, setWallAreaError ] = useState(false);
    const [ heightDoorError, setHeightDoorError ] = useState(false);
    const [ halfWallAreaError, setHalfWallAreaError ] = useState(false);

    //state to show API data
    const [ paintsChecked, setPaintsChecked ] = useState(false);
    const [ latas, setLatas ] = useState({
        GG: 0, 
        G: 0, 
        M: 0, 
        P: 0
    })

    function wallAreaVerification ( height: number, length: number ) {

        const totalM2 = ( height * length );

        if ( ( totalM2 < 1 ) || ( totalM2 > 15 ) ) {
            
            return 0;
        }

        return totalM2;
    }

    function windows_doorsVerification ( 
        height: number, 
        windowsQTD: number, 
        doorsQTD: number, 
        wallArea: number
    ) {

        if ( ( windowsQTD == 0) && ( doorsQTD == 0 ) ) return 0;

        const windowsArea = ( 2 * 1.20 ) * windowsQTD;
        const doorsArea = ( 0.80 * 1.90 ) * doorsQTD;
        const totalArea = ( windowsArea + doorsArea ) ;

        const halfWallArea = ( wallArea * 0.5 );//50% of the area of the current wall

        if ( totalArea > halfWallArea ) {

            //error: O total de área das portas e janelas deve ser no máximo 50% da área de parede
            setHalfWallAreaError(true);

            //error: se ocorrer este erro, nao posso ter o button de next visivel
            setShowNextButton( false );

            return 0;

        } else { 
            
            setHalfWallAreaError(false);

            setShowNextButton( true );
        }

    //error: A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.
        const heightVerify = ( height - 1.90 );

        if ( heightVerify < 0.30 ) {
            
            setHeightDoorError(true);
            
            setShowNextButton( false );

            return 0;

        } else {
            setHeightDoorError(false);
        
            setShowNextButton( true );
        }

    
        return totalArea;
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setWallsCounter( prevValue => prevValue + 1 );

        const { height, length, windows, doors } = form;

        //wall area verification
        const wallsArea = wallAreaVerification( height, length );
    
        if ( !wallsArea ) return;

        const newWallsValue = wallsArea + walls;
        setWalls( newWallsValue );

        const windows_doorsTotalArea = windows_doorsVerification( height, windows, doors, wallsArea );

        const newWDValue = windows_doors + windows_doorsTotalArea;
        setWindows_Doors( newWDValue );

        setShowNextButton(false);

        setWindowsCheckbox(false);
        setDoorCheckbox(false);

        setHeightCheck(0);
        setLengthCheck(0);
        setWindowsCheck(0);
        setDoorsCheck(0);

        if ( wallsCounter === 4 ) {
            
            const dataAPI = {
                walls,
                windows_doors
            }
    
            
            api.post('/paints', dataAPI)
                .then( response => {
                    const { latasGG, latasG, latasM, latasP } = response.data;
                    setLatas({
                        GG: latasGG,
                        G: latasG,
                        M: latasM,
                        P: latasP,
                    })
                });

        }
        
        e.currentTarget.reset();
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

        const value = Number(e.target.value);
        
        setForm({ 
            ...form, 
            [e.target.name]: value 
        });

        if ( e.target.name === 'height' ) setHeightCheck(value);

        //checando se o valor do length no input ja esta preenchido
        if ( lengthCheck ) {

            const wallAreaVerify = wallAreaVerification(lengthCheck, value);

            //checando se wallAreaVerify esta correta apos preencher o campo de input de length


            if ( !wallAreaVerify ) {
                
                setWallAreaError(true);
                setShowNextButton( false );

            } else { 

                setShowNextButton( true );
                setWallAreaError(false);
            }

        }

        if ( windowsCheck || doorsCheck ) {

            const wallsArea = wallAreaVerification( value, lengthCheck );

            windows_doorsVerification( value, windowsCheck, doorsCheck, wallsArea );
        }

    }

    function handleChangeLength ( e: React.ChangeEvent<HTMLInputElement> ) {
        const value = Number(e.target.value);

        setForm({ 
            ...form, 
            [e.target.name]: value 
        });

        if ( e.target.name === 'length' ) setLengthCheck(value);

        const wallAreaVerify = wallAreaVerification(heightCheck, value);

        if ( !wallAreaVerify ) {

            setWallAreaError(true);
            setShowNextButton( false );
        } else { 
            
            setShowNextButton( true );
            setWallAreaError(false);
        }

        if ( windowsCheck || doorsCheck ) {

            const wallsArea = wallAreaVerification( heightCheck, value );

            windows_doorsVerification( heightCheck, windowsCheck, doorsCheck, wallsArea );
        }

    }

    function handleChangeWindowsInput ( e: React.ChangeEvent<HTMLInputElement> ) {
        const value = Number(e.target.value);

        setForm({ 
            ...form, 
            [e.target.name]: value 
        });

        setWindowsCheck(value);

        const wallsArea = wallAreaVerification( heightCheck, lengthCheck );

        windows_doorsVerification( heightCheck, value, doorsCheck, wallsArea );

        

    }

    function handleChangeDoorsInput ( e: React.ChangeEvent<HTMLInputElement> ) {
        const value = Number(e.target.value);


        setForm({ 
            ...form, 
            [e.target.name]: value 
        });

        setDoorsCheck(value);

        if ( heightCheck && lengthCheck ) {
            
            const wallsArea = wallAreaVerification( heightCheck, lengthCheck );

            windows_doorsVerification( heightCheck, windowsCheck, value, wallsArea );
        }

    }

    function handleChangeDoorCheckbox() {
        setDoorCheckbox( prevDoorCheckbox => !prevDoorCheckbox );
    }

    function handleChangeWindowsCheckbox() {
        setWindowsCheckbox( prevWindowsCheckbox => !prevWindowsCheckbox );
    }

    function calculateResult() {
        setPaintsChecked(true);
    };

    function resetButtonClick () {
        window.location.reload();
    }

    return (
        <HomeContainer>
            <ContentContainer>

                    <Title>Paint Calculator</Title>

                    <h3>Warnings:</h3>
                <div id="warnings__wrapper">
                    <Warning  active={wallAreaError} >
                    <p>
                        No wall can be less than 1 square meter or more than 15 square meters,
                        but they can have different heights and widths.
                    </p>
                    </Warning>

                    <Warning  active={heightDoorError} >
                    <p>
                        The height of walls with a door must be at least 
                        30 centimeters greater than the height of the door.
                    </p>
                    </Warning>
                

                    <Warning  active={halfWallAreaError} >
                    <p>
                        The total area of ​​doors and windows must be at most 
                        50% of the wall area.
                    </p>
                    </Warning>
                </div>

                <MainContentContainer>

                { wallsCounter < 5 ? 
                    <HomeForm  id="home-form" onSubmit={ (e) => handleSubmit(e) }>
                            <PaintFormComponent 
                                handleChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)
                                }

                                handleChangeWindowsInput={
                                    (e: React.ChangeEvent<HTMLInputElement>) => handleChangeWindowsInput(e)
                                }

                                handleChangeDoorsInput={
                                    (e: React.ChangeEvent<HTMLInputElement>) => handleChangeDoorsInput(e)
                                }

                                handleChangeLength={
                                    (e: React.ChangeEvent<HTMLInputElement>) => handleChangeLength(e)
                                }

                                handleChangeDoorCheckbox={
                                    () => handleChangeDoorCheckbox()
                                }

                                handleChangeWindowsCheckbox={
                                    () => handleChangeWindowsCheckbox()
                                }
                                
                                handleClickNextButton={
                                    () => {}
                                }

                                windowsCheckbox={windowsCheckbox}
                                doorCheckbox={doorCheckbox}
                                wallsCounter={wallsCounter}
                                showNextButton={showNextButton}
                                heightCheck={heightCheck}
                                lengthCheck={lengthCheck}
                                buttonType="submit"
                            /> 
                    </HomeForm> : <></>
                    
                }   

                    
                    { ( ( wallsCounter > 4 ) && ( paintsChecked === false ) ) ? 

                        <ButtonContainer>
                            <Button className="calculate-button"
                                active={true}
                                onClick={() => calculateResult()}
                                name={"Calculate"}
                                type="button" 
                            />
                        </ButtonContainer>
                             : <></>
                    }
                    

                    {  ( wallsCounter < 5 ) ? 
                       
                       <CounterWallsContainer>
                            <h2>Walls:</h2>
                            <p>{`${wallsCounter}/4`}</p>
                        </CounterWallsContainer> 
                            
                            : 

                        <></>
                    }

                    { ( wallsCounter > 4 ) && ( paintsChecked === false ) ?
                    
                        <FinalContentContainer >
                            <FinalContent>
                                <h3>Total area available to paint in m²:</h3>
                                <ShowDataContainer>
                                    <p>{walls}</p>
                                </ShowDataContainer>
                            </FinalContent>

                            <FinalContent>
                                <h3>Total area occupied for windows and doors in m²:</h3>
                                <ShowDataContainer>
                                    <p>{windows_doors}</p>
                                </ShowDataContainer>
                            </FinalContent>


                        </FinalContentContainer> 
                        
                        : 
                        <></>

                    }



                    { paintsChecked ?  

                        <PaintCansContainer>
                            <PaintCansDescription>
                                <h3>The size of paint cans available in stores are:</h3>
                                <p>18L, 3.6L, 2.5L, 0.5L</p>
                                <p>For this living room, the recommended quantity of paint cans are:</p>
                            </PaintCansDescription>

                            <PaintCans>
                                <span>{ latas.GG ? `${latas.GG} x 18L` : "" }</span>
                                <span>{ latas.G ? `${latas.G} x 3.6L` : "" }</span>
                                <span>{ latas.M ? `${latas.M} x 2.5L` : "" }</span>
                                <span>{ latas.P ? `${latas.P} x 0.5L` : "" }</span>
                            </PaintCans>

                            <Button
                                active={true}
                                name="Reset"
                                type="button"
                                onClick={() => resetButtonClick()}
                            >

                            </Button>

                        </PaintCansContainer>

                        : <></>
                    }

                </MainContentContainer>

            </ContentContainer>

        </HomeContainer>
    );

}

export { Home };