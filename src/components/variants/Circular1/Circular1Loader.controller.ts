import { type HTMLAttributes, useEffect, useMemo, useRef } from 'react'
import type { Circular1LoaderProps } from './Circular1Loader.model'
import defaultValues from '@/shared/constants/default'
import styles from './styles.module.css'

const {
  DEFAULT_LOADER_COLOR: defaultColor,
  DEFAULT_LOADER_ORIENTATION: defaultOrientation,
  DEFAULT_LOADER_ROTATION: defaultRotation,
  DEFAULT_LOADER_SIZE: defaultSize,
  DEFAULT_LOADER_SIZE_UNIT: defaultSizeUnit,
  DEFAULT_LOADER_SPEED: defaultSpeed,
  DEFAULT_LOADER_SPEED_UNIT: defaultSpeedUnit,
  DEFAULT_LOADER_STROKE: defaultStroke,
  DEFAULT_LOADER_STROKE_UNIT: defaultStrokeUnit,
} = defaultValues

const useCircular1LoaderController = (props: Readonly<Circular1LoaderProps>) => {
  const {
    children,
    className = '',
    color = defaultColor,
    orientation = defaultOrientation,
    rotation = defaultRotation,
    size = defaultSize,
    sizeUnit = defaultSizeUnit,
    speed = defaultSpeed,
    speedUnit = defaultSpeedUnit,
    stroke = defaultStroke,
    strokeUnit = defaultStrokeUnit,
    ...restProps
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const loaderRef = useRef<HTMLDivElement>(null)

  const containerProps = useMemo<HTMLAttributes<HTMLDivElement>>(() => {
    const containerClassName = `${styles.container} ${className || ''}`

    return {
      className: containerClassName,
      ref: containerRef,
    }
  }, [className, containerRef])

  const loaderProps = useMemo<HTMLAttributes<HTMLDivElement>>(() => {
    const rotationValue = rotation || defaultRotation
    const loaderClassName = `${styles.loader} ${styles[`animation-${rotationValue}`]}`

    return {
      className: loaderClassName,
      ref: loaderRef,
    }
  }, [loaderRef, rotation])

  const setStyleProperty = (property: string, value: string) => {
    containerRef?.current?.style.setProperty(property, value)
  }

  useEffect(() => {
    const colorValue = color || defaultColor
    setStyleProperty('--color', colorValue)
  }, [color])

  useEffect(() => {
    const orientationValue = orientation || defaultOrientation
    setStyleProperty('--orientation', orientationValue)
  }, [orientation])

  useEffect(() => {
    const sizeValue = 'number' === typeof size ? size : defaultSize
    const sizeUnitValue = sizeUnit || defaultSizeUnit
    setStyleProperty('--size', `${sizeValue}${sizeUnitValue}`)
  }, [size, sizeUnit])

  useEffect(() => {
    const speedValue = 'number' === typeof speed ? speed : defaultSpeed
    const speedUnitValue = speedUnit || defaultSpeedUnit
    setStyleProperty('--speed', `${speedValue}${speedUnitValue}`)
  }, [speed, speedUnit])

  useEffect(() => {
    const strokeValue = 'number' === typeof stroke ? stroke : defaultStroke
    const strokeUnitValue = strokeUnit || defaultStrokeUnit
    setStyleProperty('--stroke', `${strokeValue}${strokeUnitValue}`)
  }, [stroke, strokeUnit])

  return {
    children,
    containerProps: {
      ...containerProps,
      ...restProps,
    },
    loaderProps,
  }
}

export default useCircular1LoaderController
