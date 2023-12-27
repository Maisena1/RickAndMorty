import React from "react";

const Pagination = ({ pagination, Onnext, Onprevious }) => {
  const { next, prev } = pagination;
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center mt-4">
          {prev === null ? (
            <button className="btn btn-warning disabled" onClick={Onprevious}>
              Previous
            </button>
          ) : (
            <button className="btn btn-warning" onClick={Onprevious}>
              Previous
            </button>
          )}
          {next === null ? (
            <button
              className="btn btn-primary ms-2 disabled"
              onClick={Onnext}
            >
              Next
            </button>
          ) : (
            <button className="btn btn-primary ms-2" onClick={Onnext}>
              Next
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
