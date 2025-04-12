import Circular1Loader from '../Circular1Loader.component'
import type { Circular1LoaderProps } from '../Circular1Loader.model'
import { render } from '@testing-library/react'

describe('Circular1Loader', () => {
  const renderLoader = (props: Partial<Circular1LoaderProps> = {}) => (
    render(<Circular1Loader { ...props } data-testid="circular-loader" />)
  )

  it('renders correctly', () => {
    const { getByTestId } = renderLoader()
    const loaderElement = getByTestId('circular-loader')
    expect(loaderElement).toBeTruthy()
  })

  it('applies default color', () => {
    const { getByTestId } = renderLoader()
    const loaderElement = getByTestId('circular-loader')
    const loader = loaderElement.querySelector('.loader') as HTMLElement
    expect(loader?.style.getPropertyValue('--color')).toBe('blue')
  })

  it('applies color prop correctly', () => {
    const { getByTestId } = renderLoader({ color: 'red' })
    const loaderElement = getByTestId('circular-loader')
    const loader = loaderElement.querySelector('.loader') as HTMLElement
    expect(loader?.style.getPropertyValue('--color')).toBe('red')
  })

  it('renders children correctly', () => {
    const { getByText } = renderLoader({ children: <span>Loading...</span> })
    const childElement = getByText('Loading...')
    expect(childElement).toBeTruthy()
  })
})
