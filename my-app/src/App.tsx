import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Button} from "./button/Button";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledAccordion/UncontrolledRating";

function App() {
    return (
        <div className={'App'}>
           <AppTitle/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Rating value={3}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
            <Button />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>

        </div>
    );
}
function AppTitle(){
    return <>This is APP component</>
}



export default App;
