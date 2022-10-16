import Search from "../../../components/Search/Search";
import Sort from "../../../components/Sort/Sort";
import { useDebounce } from "../../../hooks/useDebounce";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useEffect, useState } from "react";
import { setSearch } from "../../../redux/movies/moviesSlice";
import sortOptions from "../../../constants/sortOptions";
import "./controlbar.css";

/**
 * Functional react component for Control Bar
 * @description wrapper component for Search and Sort components
 * @return {JSX.Element} 
 */
const ControlBar = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();
  //debounced search value
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(setSearch(debouncedSearchValue));
  }, [debouncedSearchValue]);

  return (
    <div className="control-bar-container">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Sort sortOptions={sortOptions} />
    </div>
  );
};

export default ControlBar;
