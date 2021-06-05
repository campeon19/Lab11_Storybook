import React from 'react';

import { Post } from './Post';

export default{
    title: 'Post',
    component: Post,
    argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Post {...args} />;

export const Post1 = Template.bind({});
Post1.args = {};