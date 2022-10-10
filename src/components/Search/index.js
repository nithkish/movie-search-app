import search_icon from "../../assets/icons/search.svg";
import "./search.css"

const Search = () => {
  return (
    <div class="search-wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Type to Search..."
        />
        <button type="submit" class="searchButton">
          <img src={search_icon}/>
        </button>
      </div>
    </div>
  );
};

export default Search;
