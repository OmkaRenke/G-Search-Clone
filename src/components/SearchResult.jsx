import React, { useContext, useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { fetchDataFromApi } from "../utils/api";
import { useLocation, useParams } from "react-router-dom";
import SearchItemBox from "./SearchItemBox";
import SerachImageItem from "./SerachImageItem";
import Pagination from "./Pagination";
import "../style/SearchResult.css";
import { context } from "../utils/contextApi";
const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(context);
  // console.log(imageSearch)

  useEffect(() => {
    fetchResult();
  }, [query, startIndex, imageSearch]);

  const fetchResult = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      setResult(res);
      // console.log(res);
    });
  };
  if (!result) return;
  const { items, queries, searchInformation } = result;
  return (
    <>
      <Header></Header>
      <main>
        <span className="result">
          {`About ${searchInformation.formattedTotalResults} results (${searchInformation.formattedSearchTime} seconds)`}
        </span>
        {!imageSearch ? (
          items.map((item, index) => (
            <SearchItemBox key={index} data={item}></SearchItemBox>
          ))
        ) : (
          <div className="SerachImageAllItem">
            {items.map((item, index) => (
              <SerachImageItem key={index} data={item}></SerachImageItem>
            ))}
          </div>
        )}
      </main>
      <Pagination queries={queries}></Pagination>
      <Footer></Footer>
    </>
  );
};

export default SearchResult;
