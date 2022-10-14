import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectMoviesList, selectSelectedEpisode } from "../../../../redux/movies/moviesSlice";
import "./summary.css";

const Summary = () => {
  const moviesList = useSelector(selectMoviesList);
  const selectedEpisode = useSelector(selectSelectedEpisode);

  const selectedMovie = moviesList.find((movie)=>movie.episode_id === selectedEpisode)

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      {selectedEpisode ? (
        <div>
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.opening_crawl}</p>
          <div>
            Directed By: <span>{selectedMovie.director}</span>
          </div>
        </div>
      ) : (
        <div>No Movie Selected</div>
      )}
    </div>
  );
};

export default Summary;
