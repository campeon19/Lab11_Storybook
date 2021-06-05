import React from 'react';

import { About } from './About';

export default{
    title: 'About',
    component: About,
};

const Template = (args) => <About {...args} />;

export const Prueba1 = Template.bind({});
Prueba1.args = {};