import React, {useReducer} from "react";
import { reducer,TOGGLE_CONSTANS } from "./Reducer";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, setCollapsed] = useReducer(reducer, false)

    return (<div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed({type: TOGGLE_CONSTANS})
        }}/>
        {!collapsed && <AccordionBody/>}
    </div>)
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={() => {
            props.onClick()
        }}>--{props.title}--</h3>
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