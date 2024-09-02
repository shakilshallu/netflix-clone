// import React, { useEffect, useState } from "react";
// import Navbar from "../navbar/Navbar";
// import Heading from "../heading/Heading";
// import Button from "../button/Button";
// import Content from "../heading/Content";

// import { FaPlay } from "react-icons/fa";
import "./hero-banner.css"
import { getPageData } from "../../api/Movies";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Heading from "../heading/Heading";
import Button from "../button/Button";
import Content from "../heading/Content";
import { FaPlaceOfWorship } from "react-icons/fa";

const HeroBanner = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getPageData();
        const randomIndex = Math.floor(Math.random() * response?.netflixOriginals?.results.length);
        setMovie(response?.netflixOriginals?.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    const intervalId = setInterval(fetchMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  return (
    <main className="hero-banner">
      <Navbar isUser />
      {movie && (
        <>
          <div className="hero-img">
            <img src={`${baseUrl + movie?.backdrop_path}`} alt="hero banner img" />
          </div>
          <div className="hero-content">
            <Heading title={movie?.name || movie?.title} />
            <div className="hero-buttons">
              <Button
                size="small-play"
                icon={<FaPlaceOfWorship />}
                color="black"
                bg="bg-white"
                value="Play"
              />
              <Button
                size="small-play"
                icon={<AiTwotoneExclamationCircle className="moreicon" />}
                className="watchlater"
                color="white"
                bg="bg-trans"
                value="More Info"
              />
            </div>
            <Content className="hero-text" content={handleDescription(movie?.overview, 200)} />
          </div>
        </>
      )}
    </main>
  );
};

export default HeroBanner;