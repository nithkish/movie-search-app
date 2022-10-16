import React from "react";
import search_icon from "../../assets/icons/search.svg";
import "./search.css";

interface SearchProps {
  searchValue: string;
  setSearchValue: (a: string) => void;
}

/**
 * Function Re-usable react search component
 * @description used for a dynamic search component, 
 * triggers the handlers on change of input field
 * @param {string} searchValue - value of the input field
 * @param {function} setSearchValue - setter of the search value
 * @returns {JSX.Element} 
 */
const Search = ({ searchValue, setSearchValue }: SearchProps):JSX.Element => {
  return (
    <div className="search-wrap">
      <div className="search">
        <input
          type="text"
          data-testid="searchTerm"
          className="searchTerm"
          placeholder="Type to Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          className="searchIcon"
          data-testid="searchIcon"
          src={search_icon}
          alt="search icon"
        />
      </div>
    </div>
  );
};

export default Search;
