import React from 'react';

import { Logo } from './Logo';

export default{
    title: 'Logo Principal',
    component: Logo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Logo {...args} />;

export const Prueba = Template.bind({});
Prueba.args = {
    blue:true,
};