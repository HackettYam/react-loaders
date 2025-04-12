import type { Circular1LoaderProps } from './Circular1Loader.model'
import useCircular1LoaderController from './Circular1Loader.controller'

function Circular1Loader (props: Readonly<Circular1LoaderProps>) {
  const {
    children,
    containerProps,
    loaderProps,
  } = useCircular1LoaderController(props)

  return (
    <div { ...containerProps }>
      <i { ...loaderProps } />

      { children }
    </div>
  )
}

export default Circular1Loader
