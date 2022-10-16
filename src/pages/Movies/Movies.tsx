import { useEffect } from "react";
import ControlBar from "./ControlBar/ControlBar";
import MoviesArea from "./MoviesArea/MoviesArea";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getMovies } from "../../redux/movies/moviesThunk";
import { selectIsLoading, selectMessage } from "../../redux/movies/moviesSlice";

/**
 * Functional react component for Summary
 * @description container showing all summary details of the selected movie, if none 
 * selected shows default message
 * @return {JSX.Element} 
 */
const Movies = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const message = useAppSelector(selectMessage);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <main>
      <ControlBar />
      {isLoading ? (
        <Spinner />
      ) : message.length > 0 ? (
        <Error error={message} />
      ) : (
        <MoviesArea />
      )}
    </main>
  );
};

export default Movies;
