import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectMoviesList } from "../../../../features/movies/moviesSlice";
import "./summary.css";

const details = {
  header: "EPISODE IV: The JEDI Chan",
  summary:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  directed: "Steve Hankin",
};

const Summary = () => {
  const moviesList = useSelector(selectMoviesList);
  const selectedEpisode = useSelector((state) => state.movies.selectedEpisode);

  const selectedMovie = moviesList.find((movie)=>movie.episode_id == selectedEpisode)

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
