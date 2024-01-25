// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import CardList, { CardListProps } from './CardList';
import defaultData from './CardList.mock-data';

const meta: Meta<typeof CardList> = {
  title: 'Authorable/General/CardList',
  component: CardList,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  render: (args) => {
    return <CardList {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
