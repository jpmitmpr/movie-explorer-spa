import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from '../pages/Search'

test('does not crash when searching empty query', () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  )

  const button = screen.getByRole('button', { name: /search/i })
  fireEvent.click(button)

  expect(screen.getByRole('button')).toBeInTheDocument()
})