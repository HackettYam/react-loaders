import type { LoaderBaseProps } from '../../shared/interfaces/loader.model'

export type BarLoaderVariants = 'bar1' | 'bar2'
export type BarsLoaderVariants = 'bars1' | 'bars2'
export type CircularLoaderVariants = 'circular1' | 'circular2'
export type DotsLoaderVariants = 'dots1' | 'dots2'
export type LineLoaderVariants = 'line1' | 'line2'
export type PulseLoaderVariants = 'pulse1' | 'pulse2'
export type SquareLoaderVariants = 'square1' | 'square2'
export type StarLoaderVariants = 'star1' | 'star2'

export type LoaderVariant = 'default'
  | BarLoaderVariants
  | BarsLoaderVariants
  | CircularLoaderVariants
  | DotsLoaderVariants
  | LineLoaderVariants
  | PulseLoaderVariants
  | SquareLoaderVariants
  | StarLoaderVariants

export interface LoaderProps extends Readonly<LoaderBaseProps> {
  variant?: LoaderVariant
}
