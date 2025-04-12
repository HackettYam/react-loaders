import type { JSX } from 'react'
import type { LoaderProps } from './Loader.model'
import useLoaderController from './Loader.controller'

function Loader (props: Readonly<LoaderProps>): JSX.Element {
  const { LoaderWrapper } = useLoaderController(props)
  return LoaderWrapper
}

export default Loader
