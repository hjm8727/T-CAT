import React from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";
 
const Paging = ({ page, count, setPage }) => {
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={1}
        totalItemsCount={3}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
    </div>
  );
};
 
export default Paging;
