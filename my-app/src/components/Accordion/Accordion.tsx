import React from "react";

type ItemType={
    title:string
    value:any
}
type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
    items:ItemType[]
    onClick:(value:any)=>void
}


export function Accordion(props: AccordionPropsType) {

    return (<div>
        <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>)
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={(e)=>props.onChange()}>--{props.title}--</h3>
    </div>)
}

export type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}
export function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}