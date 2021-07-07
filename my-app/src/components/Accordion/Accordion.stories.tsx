import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion ',
    component: Accordion
}

const callback = action('on or off clicked')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items: []
}


export const UsersUnCollapsedMode = () => <Accordion
    onClick={onClickCallback}
    items={[{title: 'Sasha', value: 1}, {title: 'Alex', value: 2}, {title: 'lyda', value: 3}]}
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion onClick={(value)=>{alert(`use with ID ${value} should be happy`)}}
                      titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'Sasha', value: 1}, {title: 'Alex', value: 2}, {title: 'lyda', value: 3}]}/>
};

