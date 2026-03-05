import { describe, it, expect, vi, beforeEach } from "vitest";
import { searchMovies } from "../services/api";

global.fetch = vi.fn();

describe("API searchMovies function", () => {

  beforeEach(() => {
    fetch.mockClear();
  });

  it("throws error when query is empty", async () => {
    await expect(searchMovies("")).rejects.toThrow(
      "Search query cannot be empty"
    );
  });

  it("handles API error response", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        Response: "False",
        Error: "Movie not found"
      })
    });

    await expect(searchMovies("invalidmovie")).rejects.toThrow(
      "Movie not found"
    );
  });

  it("returns movie results when API call succeeds", async () => {
    const mockMovies = [
      { imdbID: "tt123", Title: "Test Movie", Poster: "N/A" }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        Response: "True",
        Search: mockMovies
      })
    });

    const result = await searchMovies("test");

    expect(result).toEqual(mockMovies);
  });

});