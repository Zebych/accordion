import React from "react";

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

export function Accordion(props: AccordionPropsType) {

    return (<div>
        <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>)
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={props.onChange}>--{props.title}--</h3>
    </div>)
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}