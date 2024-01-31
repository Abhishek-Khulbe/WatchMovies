import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location?.state;

  return (
    <section className="about">
      <h1>Summary:</h1>
      <p
        className="summary"
        dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}
      />
      <button onClick={() => navigate("/form", { state: movie })}>
        Book Ticket
      </button>
    </section>
  );
};

export default About;
