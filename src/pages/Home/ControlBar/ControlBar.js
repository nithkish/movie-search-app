import Search from "../../../components/Search";
import Sort from "../../../components/Sort";
import "./controlbar.css"

const ControlBar = () => {
  return (
    <div className="control-bar-container">
      <Search />
      <Sort />
    </div>
  );
};

export default ControlBar;
