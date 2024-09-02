// import { useEffect, useState } from "react";
// import Row from "../../../components/row/Row";
import "./home.css";
import { getPageData } from "../../../api/Movies";
import HeroBanner from "../../../component/hero-banner/HeroBanner";
import { useEffect, useState } from "react";
import Row from "../../../component/row/Row";
// import HeroBanner from "../../../components/hero-banner/HeroBanner";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((res) => setData(res));
  }, []);

  return (
    <main>
      <HeroBanner />
      {data && (
        <>
          <Row title="NETFLIX ORIGINALS" data={data.netflixOriginals?.results} />
          <Row title="TRENDING NOW" data={data.trendingNow?.results} />
          <Row title="TOP RATED" data={data.topRated?.results} />
          <Row title="ACTION MOVIES" data={data.actionMovies?.results} />
          <Row title="COMEDY MOVIES" data={data.comedyMovies?.results} />
          <Row title="HORROR MOVIES" data={data.horrorMovies?.results} />
          <Row title="ROMANCE MOVIES" data={data.romanceMovies?.results} />
          <Row title="WAR MOVIES" data={data.warMovies?.results} />
          <Row title="SCIENCE FICTION MOVIE" data={data.scienceFictionMovies?.results} />
          <Row title="DOCUMENTARIES" data={data.documentaries?.results} />
        </>
      )}
    </main>
  );
};

export default HomePage;