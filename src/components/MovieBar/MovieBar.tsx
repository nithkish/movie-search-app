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

const MovieBar = ({ movie }: MovieBarProps) => {
  const selected_episode = useSelector(selectSelectedEpisode);
  const dispatch = useDispatch();

  let movieBarClass = classNames({
    "movie-bar": true,
    selected: selected_episode === movie.episode_id,
  });

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
        <label className="description">{movie.title}</label>
        <label className="date">{movie.release_date}</label>
      </div>
    </div>
  );
};

export default MovieBar;
