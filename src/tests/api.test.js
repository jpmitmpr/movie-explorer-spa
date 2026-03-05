import { searchMovies } from '../services/api'

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        Response: 'False',
        Error: 'Movie not found!'
      })
  })
)

test('throws error when API returns false response', async () => {
  await expect(searchMovies('randommovie')).rejects.toThrow('Movie not found!')
})