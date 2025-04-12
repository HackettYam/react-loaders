import type { LoaderBaseProps } from '../../../shared/interfaces/loader.model'

export type Circular1LoaderProps = Partial<Omit<LoaderBaseProps, 'contentEditable' | 'enterKeyHint' | 'style' | 'translate' | 'role' | 'prefix' | 'popover' | 'inputMode'>>
