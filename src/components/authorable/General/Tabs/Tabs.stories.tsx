// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Tabs, { TabsProps } from './Tabs';
import defaultData, { tabsData } from './Tabs.mock';

const meta: Meta<typeof Tabs> = {
  title: 'Authorable/General/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
//TODO: make the Story Book more compatible, add dropdown, add boolean for toggle
export default meta;

type Story = StoryObj<typeof Tabs>;

export const tabpills: Story = {
  render: (args) => {
    return <Tabs {...(expandObj({ ...args }) as TabsProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const secondary: Story = {
  render: (args) => {
    return <Tabs {...(expandObj({ ...args }) as TabsProps)} />;
  },
  args: {
    ...flattenObj(tabsData),
  },
};
