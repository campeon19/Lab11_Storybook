import React from 'react';

import { Carrusel } from './Carrusel';

export default{
    title: 'Carrusel',
    component: Carrusel,
};

const Template = (args) => <Carrusel {...args} />;

export const Prueba = Template.bind({});
Prueba.args = {};