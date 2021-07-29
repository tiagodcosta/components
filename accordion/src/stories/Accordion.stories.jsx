import React from 'react';
import { Accordion } from './Accordion';

const Middle = () => {
  return (<section>Hello World</section>)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'FrontWork/Accordion',
  component: Accordion,
  subcomponent: Middle,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'I am an accordion',
  },
};

const Template = (args) => (
          <Accordion {...args}>
              <Middle />
          </Accordion>
        );

export const Default = Template.bind({});
Default.args = {
  title: 'I am an accordion',
};
