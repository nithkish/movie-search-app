import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectMovie,
  selectSelectedEpisode,
} from "../../redux/movies/moviesSlice";
import classNames from "classnames";
import { Movie } from "../../redux/movies/moviesSlice";
import "./moviebar.css";

interface MovieBarProps {
  movie: Movie;
}

/**
 * Functional react component for Movie Bar
 * @description used to display the details of the movie. clickable.
 * @param {Movie} - movie : object having details of movie
 * @return {JSX.Element} 
 */

const MovieBar = ({ movie }: MovieBarProps):JSX.Element => {
  const selected_episode = useSelector(selectSelectedEpisode);
  const dispatch = useDispatch();

  //to display the highlight for selected movie bar
  let movieBarClass = classNames({
    "movie-bar": true,
    selected: selected_episode === movie.episode_id,
  });

  //dispatches the selectMovie reducer
  const handleClick = (id: number) => {
    dispatch(selectMovie(id));
  };

  return (
    <div
      className={movieBarClass}
      data-testid="movie-bar"
      onClick={() => handleClick(movie.episode_id)}
    >
      <div className="movie-item">
        <label className="episode">Episode {movie.episode_id}</label>
        <label className="title">{movie.title}</label>
        <label className="date">{movie.release_date}</label>
      </div>
    </div>
  );
};

export default MovieBar;
