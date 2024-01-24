import { get_movies } from "../javascript/get-movies";
import { jest } from "@jest/globals";
import { API_URL } from "../javascript/constants";

describe("get-movies function", () => {
  it("should return movie list", async () => {
    const mockMovies = { results: [{ id: 1, title: "Movie 1" }] };

    const mockFetch = Promise.resolve({
      text: () => Promise.resolve(JSON.stringify(mockMovies)),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const movies = await get_movies();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}`, expect.anything());
    expect(movies).toEqual(mockMovies.results);
  });
});
