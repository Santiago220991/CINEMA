import { jest } from "@jest/globals";
import { get_movie } from "../javascript/get-movie";
import { API_MOVIE_ID_URL } from "../javascript/constants";

describe("get-movie function", () => {
  it("should return a movie", async () => {
    const movieId = "movie001"
    const API_URL=`${API_MOVIE_ID_URL}${movieId}?info=base_info`
    const mockMovie = {results: { id: movieId, title: "Movie 1" }};

    const mockFetch = Promise.resolve({
      text: () => Promise.resolve(JSON.stringify(mockMovie)),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);
    const movie = await get_movie(movieId);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}`, expect.anything());
    expect(movie).toEqual(mockMovie.results);
  });
});
