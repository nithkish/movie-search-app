import { useEffect } from "react";
import ControlBar from "./ControlBar/ControlBar";
import Movies from "./Movies/Movies";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMovies } from "../../features/movies/moviesThunk";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <main>
      <ControlBar />
      {isLoading ? <Spinner /> : <Movies />}
    </main>
  );
};

export default Home;
