import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
           <AppTitle/>
            <Rating value={2}/>
            <Accordion/>
            <Rating value={4}/>

        </div>
    );
}
function AppTitle(){
    return <>This is APP component</>
}



export default App;
