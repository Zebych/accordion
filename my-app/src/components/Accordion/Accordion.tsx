import React from "react";

export function Accordion() {
    return (<div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>)
}
export function AccordionTitle() {
    return (<div>
        <h3>Меню</h3>
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