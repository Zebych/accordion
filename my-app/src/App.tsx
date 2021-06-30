import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./button/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledAccordion/UncontrolledRating";
import {ControlledOnOff} from "./button/ControlledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [buttonState, setButtonState] = useState(true)

    return (
        <div className={'App'}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
            <UncontrolledOnOff/>
            <ControlledOnOff onChange={() => setButtonState(buttonState)} buttonState={buttonState}/>
            {/*  <AppTitle/>


            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>*/}

        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}


export default App;
