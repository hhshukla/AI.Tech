// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import CardListCarousel, { CardListDataProps } from './CardListCarousel';
import { defaultData } from './CardListCarousel.mock';

const meta: Meta<typeof CardListCarousel> = {
  title: 'Authorable/General/CardListCarousel',
  component: CardListCarousel,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ternary'],
      },
    },
  },
};
//TODO: make the Story Book more compatible, add dropdown, add boolean for toggle
export default meta;

type Story = StoryObj<typeof CardListCarousel>;

export const Default: Story = {
  render: (args) => {
    return <CardListCarousel {...(expandObj({ ...args }) as CardListDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const primary: Story = {
  render: (args) => {
    return <CardListCarousel {...(expandObj({ ...args }) as CardListDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
