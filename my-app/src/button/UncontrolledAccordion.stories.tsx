import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff'

export default {
    title: 'UnControlledOnOff ',
    component: UncontrolledOnOff,
}

const callback=action('on or off clicked')

export const OnMode=()=> <UncontrolledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode=()=> <UncontrolledOnOff  defaultOn={false} onChange={callback}/>;
export const BugMode=()=> {}
export const DefaultInputValue=()=> <input defaultValue={"oy"} /*readOnly={true}*/ />;


