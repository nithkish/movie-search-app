import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import chevron_down from "../../assets/icons/chevron-down-solid.svg";
import { sortBy } from "../../features/movies/moviesSlice";
import classNames from "classnames";
import "./sort.css";

const Sort = ({ sortOptions }) => {
  const dispatch = useDispatch();
  const sortValue = useSelector((state) => state.movies.sortValue);

  const handleClick = (value) => {
    console.log(sortValue);
    if (value !== sortValue) dispatch(sortBy(value));
  };

  return (
    <div class="sort">
      <button type="button" className="sort-button">
        Sort By <img src={chevron_down} />
      </button>
      <div class="sort-content">
        {sortOptions.length > 0 &&
          sortOptions.map((sortOption) => {
            let sortClass = classNames({
              selected: sortValue == sortOption.name,
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
