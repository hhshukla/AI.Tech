// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Accordion, { accordionProps } from './Accordian';
import accordionData from './Accordian.mock';

const meta: Meta<typeof Accordion> = {
  title: 'Authorable/General/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {},
};
//TODO: make the Story Book more compatible, add dropdown, add boolean for toggle
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => {
    return <Accordion {...(expandObj({ ...args }) as accordionProps)} />;
  },
  args: {
    ...flattenObj(accordionData),
  },
};
export const primary: Story = {
  render: (args) => {
    return <Accordion {...(expandObj({ ...args }) as accordionProps)} />;
  },
  args: {
    ...flattenObj(accordionData),
  },
};
