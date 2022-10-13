import MoviesList from "./MoviesList/MoviesList";
import Summary from "./Summary/Summary";
import Modal from "../../../components/Modal/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./movies.css";
import useMediaFlag from "../../../hooks/useMediaFlag";

const Movies = () => {
  const openModal = useSelector((state) => state.movies.openModal);
  const lowWidth =
    useMediaFlag("(max-width:550px)") || window.innerWidth < 550;
  return (
    <div className="movies-container">
      <MoviesList />
      {lowWidth ? openModal && <Modal children={<Summary />} /> : <Summary />}
    </div>
  );
};

export default Movies;
