import { ReactNode } from 'react'
import { LoaderBaseProps } from '../../../shared/interfaces/loader.model'

export interface Circular2LoaderProps extends Readonly<LoaderBaseProps> {
  children?: ReactNode
}
