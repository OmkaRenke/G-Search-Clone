import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import paginationImage from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/constant";
import "../style/pagination.css";

const Pagination = ({ queries }) => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(pagination[0].startIndex);
  //   const location = useLocation();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const pageClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };

  return (
    <div className="pagination">
      <div className="tabAndLogo">
        {queries.previousPage && (
          <div
            className="arrowWithDiv"
            onClick={() => pageClickHandler(queries.previousPage[0].startIndex)}
          >
            <FiChevronLeft size={20}></FiChevronLeft>
            <div>Pre</div>
          </div>
        )}
        <img
          className="paginationImage"
          src={paginationImage}
          alt="pagination-logo"
        />
        {queries.nextPage && (
          <div
            className="arrowWithDiv"
            onClick={() => pageClickHandler(queries.nextPage[0].startIndex)}
          >
            <FiChevronRight size={20}></FiChevronRight>
            <div>Next</div>
          </div>
        )}
      </div>
      <div className="spanPageNumber">
        {pagination.map((data) => (
          <span
            key={data.page}
            onClick={() => {
              pageClickHandler(data.startIndex);
            }}
            className={`pageNumber ${
              page === data.startIndex ? "activePage" : null
            }`}
          >
            {data.page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
