import "./moviebar.css"


const MovieBar = ({ movie }) => {
  return (
    <div className="movie-bar" data-testid="movie-bar">
      <div className="movie-item">
        <label className="episode">Episode 1</label>
        <label className="description">Episode IV :The Jedi Chan</label>
        <label className="date">2010-09-20</label>
      </div>
    </div>
  );
};

export default MovieBar;
