import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion ',
    component: Accordion,
}

const callback=action('on or off clicked')

export const MenuCollapsedMode=()=> <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />;
export const UsersUnCollapsedMode=()=> <Accordion titleValue={'Users'} collapsed={true} onChange={callback} />;

export const ModeChanging=()=> {
    const [value,setValue]=useState<boolean>(true)
  return <Accordion titleValue={'Menu'} collapsed={value} onChange={()=>setValue(!value)} />
};

