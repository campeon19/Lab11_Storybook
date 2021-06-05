import React from 'react';

import { Footer } from './Footer';

export default{
    title: 'Pie de pagina',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Footer {...args} />;

export const Prueba = Template.bind({});
Prueba.args = {
    blue:true,
};