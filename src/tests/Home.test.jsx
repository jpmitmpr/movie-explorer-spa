import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

test('renders home page text', () => {
  render(<Home />)
  expect(screen.getByText(/Welcome to Movie Explorer/i)).toBeInTheDocument()
})