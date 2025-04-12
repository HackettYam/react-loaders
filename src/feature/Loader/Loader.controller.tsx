import Circular1Loader from '../../components/variants/Circular1/Circular1Loader.component'
import Circular2Loader from '../../components/variants/Circular2/Circular2Loader.component'
import type { LoaderProps } from './Loader.model'
import { useMemo } from 'react'

const useLoaderController = (props: Readonly<LoaderProps>) => {
  const {
    variant = 'default',
  } = props

  const LoaderWrapper = useMemo(() => {
    switch (variant) {
      case 'circular1':
        return <Circular1Loader { ...props } />
      case 'circular2':
        return <Circular2Loader { ...props } />
      default:
        return <Circular1Loader { ...props } />
    }
  }, [props, variant])

  return {
    ...props,
    LoaderWrapper,
  }
}

export default useLoaderController
