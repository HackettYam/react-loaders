import type Circular1Loader from '@/components/variants/Circular1/Circular1Loader.component'
import type { Meta } from '@storybook/react'

const meta = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Loader children content',
      table: {
        type: { summary: 'ReactNode | string' },
      },
    },
    color: {
      control: 'color',
      description: 'Loader color',
      table: {
        defaultValue: { summary: '#3b82f6' },
        type: { summary: 'hex | rgb | rgba | hsl | hsla' },
      },
    },
    orientation: {
      control: 'select',
      description: 'Loader content orientation',
      options: ['row', 'column'],
      table: {
        defaultValue: { summary: 'row' },
        type: { summary: 'row | column' },
      },
    },
    rotation: {
      control: 'select',
      description: 'Loader rotation direction',
      options: ['clockwise', 'anticlockwise'],
      table: {
        defaultValue: { summary: 'clockwise' },
        type: { summary: 'clockwise | anticlockwise' },
      },
    },
    size: {
      control: 'number',
      description: 'Loader size',
      table: {
        defaultValue: { summary: '50' },
        type: { summary: 'number' },
      },
    },
    speed: {
      control: 'number',
      description: 'Loader speed (animation duration)',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    stroke: {
      control: 'number',
      description: 'Loader stroke width',
      table: {
        defaultValue: { summary: '4' },
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof Circular1Loader>

export default meta
