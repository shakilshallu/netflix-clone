import React from "react";
import "./search.css";
import { useState, useEffect } from "react";
import axios from "../../../libs/axios";
// import Navbar from "../../../components/navbar/Navbar";
// import Input from "../../../components/input/Input";
// import Button from "../../../components/button/Button";
// import Card from "../../../components/card/Card";

import { getPageData } from "../../../api/Movies";
// import Row from "../../../components/row/Row";
import Card from "../../../component/card/Card";
import Input from "../../../component/input/Input";
import Button from "../../../component/button/Button";
import Navbar from "../../../component/navbar/Navbar";
import List from "../../../component/row/List";
const Page = () => {
  const [data, setData] = useState(null); // to fetch trending Movies
  useEffect(() => {
    getPageData().then((res) => setData(res));
  }, []);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const getMovies = async (query) => {
    try {
      const response = await axios.get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      const results = response.data.results;
      // console.log(response);
      return results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    if (search) {
      getMovies(search).then((results) => {
        setMovies(results);
      });
    }
  }, [search]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <div className="">
        <Navbar isUser />
        <div className="search-input">
          <div className="input">
            <Input
              type="search"
              bg="search"
              placeholder="Search Movies"
              value={search}
              onChange={handleChange}
            />
          </div>
          <Button
            color="white"
            value="Search"
            size="small"
            bg="bg-1"
            rounded="rounded"
          />
        </div>

        <div className="wish-list">
          {search ? (
            <div className="result-padding">
              <h1 className="result-heading">Results for {search}</h1>
              <div className="wish-list-items">
                {movies?.map((item) => (
                  <Card movie={item} />
                ))}
              </div>
            </div>
          ) : (
            <>
              <List title="Trending Now" data={data?.trendingNow.results} />
            </>
          )}
        </div>
  </div>        34##$##$$$
<x id="x"></x>
    </>
  );
};

// search page ends

export default Page;