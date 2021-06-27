import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Button} from "./button/Button";

function App() {
    return (
        <div>
           <AppTitle/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Rating value={3}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
            <Button />

        </div>
    );
}
function AppTitle(){
    return <>This is APP component</>
}



export default App;
