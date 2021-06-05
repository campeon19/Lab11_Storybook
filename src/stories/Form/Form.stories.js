import React from 'react';

import { Form } from './Form';

export default{
    title: 'Form',
    component: Form,
};

const Template = (args) => <Form {...args} />;

export const Prueba1 = Template.bind({});
Prueba1.args = {};