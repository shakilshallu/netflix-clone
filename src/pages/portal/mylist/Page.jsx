// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { getWishlist } from "../../../api/Movies";
// import Card from "../../../components/card/Card";
// import Navbar from "../../../components/navbar/Navbar";
import "./mylist.css";
import Navbar from "../../../component/navbar/Navbar";
import Card from "../../../component/card/Card";

const WishList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getWishlist().then((data) => setMovies(data?.results));
  }, []);
  const movieId = movies?.map((item) => item.id);
  return (
    <div className="wishlist-page">
      <Navbar isUser />
      <div className="wishlist-items">
        <h2 className="result-heading"> My List</h2>
        <div className="wish-list-items">
          {movies?.map((item) => (
            <Card movie={item} favMovies={movieId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;