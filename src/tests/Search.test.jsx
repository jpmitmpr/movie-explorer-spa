import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from '../pages/Search'

test('renders search input and button', () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  )

  expect(screen.getByPlaceholderText(/search movie/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
})