import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";



export default {
    title: 'Rating ',
    component: Rating,
}

const EmptyRating=()=> <Rating value={0} onClick={x=>x}/>;
const Rating1=()=> <Rating value={0} onClick={x=>x}/>;
const Rating2=()=> <Rating value={0} onClick={x=>x}/>;
const Rating3=()=> <Rating value={0} onClick={x=>x}/>;
const Rating4=()=> <Rating value={0} onClick={x=>x}/>;
const Rating5=()=> <Rating value={0} onClick={x=>x}/>;

