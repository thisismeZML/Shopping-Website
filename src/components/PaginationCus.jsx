import React from "react";

const PaginationCus = ({ itemsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  return (
    <div className="container flex justify-center mt-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`border p-2 px-4 mx-1 rounded-full border-black ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`border p-2 px-4 mx-1 rounded-full border-black ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationCus;
