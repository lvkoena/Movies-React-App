
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelected: (item: string) => void;
}

function ListGroup() {
  let items = ["Primrose", "Boksburg", "Edenvale", "Witfield"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
