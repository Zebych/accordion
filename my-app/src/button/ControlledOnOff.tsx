import React from 'react';

type ButtonPropsType={
    onChange:(buttonState:boolean)=>void
    buttonState:boolean
}

export const ControlledOnOff = (props:ButtonPropsType) => {


    const onStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        display:'inline-block',
        padding:'2px',
        backgroundColor: props.buttonState ? 'green' : 'white'
    }
    const ofStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        display:'inline-block',
        padding:'2px',
        backgroundColor: props.buttonState ? 'white' : 'red'
    }
    const indicatorStyle = {
        display:'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: props.buttonState ? 'green' : 'red'

    }
    return (
        <div>
            <div style={onStyle} onClick={()=>props.onChange(true)}>on</div>
            <div style={ofStyle} onClick={()=>props.onChange(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
        
    );
};

