import React, {useState} from 'react';

/*type PropsType = {
    on: boolean
}*/

export const Button = () => {
    const [buttonState, setButtonState] = useState(true)

    const onStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        display:'inline-block',
        padding:'2px',
        backgroundColor: buttonState ? 'green' : 'white'
    }
    const ofStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        display:'inline-block',
        padding:'2px',
        backgroundColor: buttonState ? 'white' : 'red'
    }
    const indicatorStyle = {
        display:'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: buttonState ? 'green' : 'red'

    }
    return (
        <div>
            <div style={onStyle} onClick={()=>setButtonState(true)}>on</div>
            <div style={ofStyle} onClick={()=>setButtonState(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
        
    );
};

