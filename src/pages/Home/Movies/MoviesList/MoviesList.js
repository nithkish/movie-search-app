import MovieBar from "../../../../components/MovieBar/MovieBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectMoviesList, selectSearchValue } from "../../../../redux/movies/moviesSlice";
import { useFilteredList } from "../../../../hooks/useFilteredList";
import "./movieslist.css";

const MoviesList = () => {
  const moviesList = useSelector(selectMoviesList);
  const searchValue = useSelector(selectSearchValue);

  const filteredList = useFilteredList(moviesList,searchValue);

  return (
    <div className="movie-list-container">
      <h2>Movies List</h2>
      {filteredList?.length > 0 && filteredList.map((movie) => <MovieBar movie={movie} key={movie.episode_id}/>)}
    </div>
  );
};

export default MoviesList;
