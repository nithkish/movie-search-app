import { useEffect, useState } from "react";

export function useFilteredList(movies, search) {
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
