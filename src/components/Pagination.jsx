import React from "react";
import ReactPaginate from "react-paginate";

export default function PaginatedItems({
  itemsPerPage,
  pageCount,
  setCurrentPage,
}) {
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="flex justify-center mt-8">
      <ReactPaginate
        className="flex gap-3 text-lg"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName="pagination"
        activeClassName="text-blue-600 font-bold"
        previousClassName="text-gray-700"
        nextClassName="text-gray-700"
        pageClassName="text-gray-700"
      />
    </div>
  );
}
