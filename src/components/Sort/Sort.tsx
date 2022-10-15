import { useDispatch, useSelector } from "react-redux/es/exports";
import chevron_down from "../../assets/icons/chevron-down-solid.svg";
import { sortBy, selectSortValue } from "../../redux/movies/moviesSlice";
import classNames from "classnames";
import { SortOption } from "../../constants/sortOptions";
import "./sort.css";

interface SortProps {
  sortOptions : SortOption[];
}

const Sort = ({ sortOptions }:SortProps) => {
  const dispatch = useDispatch();
  const sortValue = useSelector(selectSortValue);

  const handleClick = (value:string) => {
    console.log(sortValue);
    if (value !== sortValue) dispatch(sortBy(value));
  };

  return (
    <div className="sort">
      <button type="button" className="sort-button">
        Sort By <img src={chevron_down} alt="down icon" />
      </button>
      <div className="sort-content">
        {sortOptions.length > 0 &&
          sortOptions.map((sortOption) => {
            let sortClass = classNames({
              selected: sortValue === sortOption.name,
            });
            return (
              <div
                key={sortOption.id}
                className={sortClass}
                onClick={() => handleClick(sortOption.name)}
              >
                {sortOption.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sort;
