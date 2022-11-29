import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

function DataSearch(props) {
  const [SearchItem, setSearchItem] = useState("");

  const searchHandler = (e) => {
    setSearchItem(e.currentTarget.value);
    props.refreshFunction(e.currentTarget.value);
  };

  return (
    <div>
      <div>
        <Search
          placeholder="search"
          style={{
            width: 200,
          }}
          value={SearchItem}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default DataSearch;
