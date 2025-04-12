import type {
  LoaderOrientation,
  LoaderRotation,
  LoaderSizeUnit,
  LoaderSpeedUnit,
  LoaderStrokeUnit,
} from './types.model'
import type { ReactNode } from 'react'

export interface LoaderBaseProps extends Readonly<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode
  color?: string
  orientation?: LoaderOrientation
  rotation?: LoaderRotation
  size?: number
  sizeUnit?: LoaderSizeUnit
  speed?: number
  speedUnit?: LoaderSpeedUnit
  stroke?: number
  strokeUnit?: LoaderStrokeUnit
}
