import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from '../pages/Search'

test('renders search form', () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  )

  expect(screen.getByPlaceholderText(/search movie/i)).toBeInTheDocument()
})