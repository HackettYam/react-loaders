import { useEffect, useRef } from 'react'
import type { Circular2LoaderProps } from './Circular2Loader.model'
import styles from './styles.module.css'

function Circular2Loader (props: Readonly<Circular2LoaderProps>) {
  const {
    children,
    color = 'red',
  } = props

  const loaderRef = useRef<HTMLElement>(null)

  useEffect(() => {
    loaderRef.current?.style.setProperty('--color', color)
  }, [color])

  return (
    <div className={ styles.container }>
      <i className={ styles.loader } ref={ loaderRef } />

      { children }
    </div>
  )
}

export default Circular2Loader
