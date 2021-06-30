import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Button} from "./button/Button";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledAccordion/UncontrolledRating";

function App() {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(0)
    return (
        <div className={'App'}>

            <Rating value={ratingValue} onClick={setRatingValue}/>

         {/*  <AppTitle/>
            <Accordion titleValue={"Menu"} collapsed={true}/>

            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
            <Button />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>*/}

        </div>
    );
}
function AppTitle(){
    return <>This is APP component</>
}



export default App;
