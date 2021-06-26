import React from "react";

type AccordionTitlePropsType = {
    title: string
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (<div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>)
    } else {
        return (<div>
            <AccordionTitle title={props.titleValue}/>
        </div>)
    }
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3>--{props.title}--</h3>
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