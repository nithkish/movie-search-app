import MovieBar from "../../../../components/MovieBar/MovieBar";

const MoviesList = ({ movies }) => {
  return (
    <>
      <section>
        {movies?.length > 0 &&
          movies.map((movie) => <MovieBar movie={movie} />)}
         <MovieBar /> 
      </section>
    </>
  );
};

export default MoviesList;
