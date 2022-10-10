import { DropdownButton, Dropdown } from "react-bootstrap";
import "./sort.css"

const sortOptions = [{
 id:1,
 name:"Year",
 selected:false
},
{
  id:2,
  name:"Episode",
  selected:true
 }]

const Sort = ({sortMenu}) => {
  return (
    <div class="sort">
       <DropdownButton
            key="down"
            id={`dropdown-button-drop-down`}
            variant="secondary"
            title="Sort By..."
          >
            {sortOptions.length > 0 && sortOptions.map((option,index)=>(
              <Dropdown.Item eventKey={index} active={option.selected}>
                <div>{option.name}</div>
              </Dropdown.Item>
            )
            )}
          </DropdownButton>
    </div>
  );
};

export default Sort;
