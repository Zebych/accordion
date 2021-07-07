import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion ',
    component: UncontrolledAccordion,
}

const callback=action('on or off clicked')

export const ModeChanging=()=> {
    return  <UncontrolledAccordion titleValue={'Users'}/>
};

