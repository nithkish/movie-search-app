import { useEffect } from "react";
import ControlBar from "./ControlBar/ControlBar";
import Movies from "./Movies/Movies";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMovies } from "../../redux/movies/moviesThunk";
import { selectIsLoading } from "../../redux/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
