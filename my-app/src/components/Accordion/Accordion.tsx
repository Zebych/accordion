import React from "react";

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
    items:string[]
}

export function Accordion(props: AccordionPropsType) {

    return (<div>
        <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>)
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={(e)=>props.onChange()}>--{props.title}--</h3>
    </div>)
}

export type AccordionBodyPropsType = {
    items:string[]
}
export function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i=><li>{i}</li>)}
        </ul>
    )
}