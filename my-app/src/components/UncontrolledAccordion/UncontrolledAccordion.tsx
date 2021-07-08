import React, {useReducer} from "react";
import { reducer,TOGGLE_COLLAPSED } from "./Reducer";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, {collapsed:false})

    return (<div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_COLLAPSED})
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