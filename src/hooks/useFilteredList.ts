import { useEffect, useState } from "react";
import { Movie } from "../redux/movies/moviesSlice";

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
