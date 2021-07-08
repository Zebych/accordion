import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from './Select'

export default {
    title: 'Select',
    component: Select,
}
type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const WithValue = () =>{
    const [value,setValue]=useState('2')
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}/>
    </>
}
export const WithoutValue=()=>{
    const [value,setValue]=useState(null)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}/>
    </>
}