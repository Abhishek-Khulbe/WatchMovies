import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Card from "../components/Card";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setMoviesList(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="home">
      <h1>WatchMovies</h1>
      {loading ? (
        <div className="loading">
          <ReactLoading type="cylon" color="#937047" height={200} width={100} />
        </div>
      ) : (
        <div className="grid-container">
          {moviesList.length == 0
            ? "No movies are there."
            : moviesList.map((item) => {
                return <Card key={item?.show?.id} movie={item} />;
              })}
        </div>
      )}
    </section>
  );
};

export default Home;
