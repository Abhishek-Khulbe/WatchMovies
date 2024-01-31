import React from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.avif";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <section className="card">
      <div className="img-container">
        {movie?.show?.image?.medium == null ? (
          <img
            src={placeholder}
            style={{ height: "295px", width: "210px", objectFit: "cover" }}
            alt="image"
          />
        ) : (
          <img src={movie?.show?.image?.medium} alt="image" />
        )}
      </div>
      <div className="info">
        <h2>{movie?.show?.name}</h2>
        <div className="genre">
          {movie?.show?.genres?.map((item, key) => {
            return <code key={key}>{item}</code>;
          })}
        </div>
        <button onClick={() => navigate("/about", { state: movie })}>
          View Info
        </button>
      </div>
    </section>
  );
};

export default Card;
