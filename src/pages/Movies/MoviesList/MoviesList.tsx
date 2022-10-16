import MovieBar from "../../../components/MovieBar/MovieBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectMoviesList,
  selectSearchValue,
} from "../../../redux/movies/moviesSlice";
import { useFilteredList } from "../../../hooks/useFilteredList";
import Error from "../../../components/Error/Error";
import "./movieslist.css";

/**
 * Functional react component for Movie List
 * @description wrapper component for listing Movie bar components
 * @return {JSX.Element}
 */
const MoviesList = (): JSX.Element => {
  const moviesList = useSelector(selectMoviesList);
  const searchValue = useSelector(selectSearchValue);

  //filtered list depending on searchvalue
  const filteredList = useFilteredList(moviesList, searchValue);

  return (
    <div className="movie-list-container">
      <h2>Movies List</h2>
      {filteredList?.length > 0 ? (
        filteredList.map((movie) => (
          <MovieBar movie={movie} key={movie.episode_id} />
        ))
      ) : (
        <Error error={"No Movie match search criteria.Please enter different value."} />
      )}
    </div>
  );
};

export default MoviesList;
