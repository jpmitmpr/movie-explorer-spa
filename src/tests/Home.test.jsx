import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

test('renders home page text', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  expect(screen.getByText(/Welcome to Movie Explorer/i)).toBeInTheDocument()
})