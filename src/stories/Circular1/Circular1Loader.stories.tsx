import type { Meta, StoryObj } from '@storybook/react'
import Circular1Loader from '@/components/variants/Circular1/Circular1Loader.component'
import model from './Circular1Loader.model'

const meta: Meta<typeof Circular1Loader> = {
  ...model,
  component: Circular1Loader,
  tags: ['autodocs'],
  title: 'Loaders/Variants/Circular/Circular1',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomColor: Story = {
  args: {
    color: 'rgb(200, 0, 255)',
  },
}

export const WithContentRow: Story = {
  args: {
    children: <i>Loading...</i>,
    orientation: 'row',
  },
  name: 'With content (row)',
}

export const WithContentColumn: Story = {
  args: {
    children: <i>Loading...</i>,
    orientation: 'column',
  },
  name: 'With content (column)',
}
