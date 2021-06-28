import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
}
type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [toggle, setToggle] = useState(false)
    let onClickHandler=()=>{
        setToggle(!toggle)
    }
    return (<div>
        <AccordionTitle title={props.titleValue}/>
        {toggle && <AccordionBody/>}
        <button onClick={onClickHandler}>TOGGLE</button>
    </div>)
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