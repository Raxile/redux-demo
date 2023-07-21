import React from "react";
import PropTypes from "prop-types";

const CustomPagination = ({
  totalElements,
  currentPage,
  setCurrentPage,
  postPerPage,
}) => {
  const totalPages = [];
  for (let i = 1; i <= Math.ceil(totalElements / postPerPage); i++) {
    totalPages.push(i);
  }
  return (
    <div className="d-flex justify-content-center align-items-center mb-2">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn bg-info text-white rounded-circle m-0 p-0 border border-black"
        style={{ minHeight: "30px", height: "30px", width: "30px" }}
      >
        &lt;&lt;
      </button>
      {totalPages.map((value) => (
        <button
          key={value}
          onClick={() => setCurrentPage(value)}
          disabled={currentPage === value}
          className="btn bg-info text-white border border-black rounded-circle m-0 p-0"
          style={{ minHeight: "30px", height: "30px", width: "30px" }}
        >
          {value}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages.length}
        className="btn bg-info text-white rounded-circle m-0 p-0 border border-black"
        style={{ minHeight: "30px", height: "30px", width: "30px" }}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

CustomPagination.propTypes = {
  totalElements: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  postPerPage: PropTypes.number.isRequired,
};

export default CustomPagination;
