import React from "react";

function Pagination({
  userPerPage,
  totalUser,
  paginate,
  handleNext,
  handlePrev
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUser / userPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination" style={{ marginTop: "15px" }}>
      <button onClick={handleNext}>
        Next
      </button>
      {pageNumbers.map((number) => (
        <>
          <button
            key={number}
            onClick={() => paginate(number)}
            className="page-item"
          >
            {number}
          </button>
        </>
      ))}
      <button onClick={handlePrev}>
        Prev
      </button>
    </div>
  );
}

export default Pagination;
