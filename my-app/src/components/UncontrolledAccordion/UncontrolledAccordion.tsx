import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}
type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    return (<div>
        <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}} />
        {!collapsed && <AccordionBody/>}
    </div>)
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>
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