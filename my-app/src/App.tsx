import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
           <AppTitle/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Rating value={2}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>

        </div>
    );
}
function AppTitle(){
    return <>This is APP component</>
}



export default App;
