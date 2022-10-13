import search_icon from "../../assets/icons/search.svg";
import "./search.css";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div class="search-wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Type to Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img class="searchButton" src={search_icon} />
      </div>
    </div>
  );
};

export default Search;
