import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  viteFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@/': path.resolve(dirname, '../src'),
        '@/components': path.resolve(dirname, '../src/components'),
        '@/shared': path.resolve(dirname, '../src/shared'),
      },
    },
  }),
}

export default config
