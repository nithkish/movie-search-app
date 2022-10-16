import MoviesList from "../MoviesList/MoviesList";
import Summary from "../Summary/Summary";
import Modal from "../../../components/Modal/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./moviesarea.css";
import useMediaFlag from "../../../hooks/useMediaFlag";
import { selectOpenModal } from "../../../redux/movies/moviesSlice";


/**
 * Functional react component for Movie Area
 * @description wrapper component for Movie List and Summary components
 * @return {JSX.Element} 
 */
const MoviesArea = (): JSX.Element => {
  const openModal = useSelector(selectOpenModal);

  //flag to identify whether width of viewport is less than 550px
  //if tru the summary component is dispalyed as Modal
  const lowWidth =
    useMediaFlag("(max-width:550px)") || window.innerWidth < 550;
  return (
    <div className="movies-container">
      <MoviesList />
      {lowWidth ? openModal && <Modal children={<Summary />} /> : <Summary />}
    </div>
  );
};

export default MoviesArea;
