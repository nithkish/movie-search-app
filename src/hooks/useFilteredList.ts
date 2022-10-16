import { useEffect, useState } from "react";
import { Movie } from "../redux/movies/moviesSlice";

/**
 * @description this custom hook filters the movielist based on search string
 * @param {Movie[]} movies -list of movies
 * @param {string} search - search term
 * @returns {Movie[]} array of filtered movies object
 */
export function useFilteredList(movies: Movie[], search: string) {
  const [displayList, setDisplayList] = useState(movies);
  useEffect(() => {
    if (search)
      setDisplayList(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    else setDisplayList(movies);
  }, [movies, search]);
  return displayList;
}
