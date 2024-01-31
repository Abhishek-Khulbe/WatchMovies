import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location?.state;

  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const onSubmit = () => {
    console.log(email, number);
    localStorage.setItem("user-details", JSON.stringify({ email, number }));
    navigate("/");
  };

  return (
    <section className="form">
      <h1>Confirmation:</h1>
      <p
        className="summary"
        dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}
      />

      <form onSubmit={onSubmit}>
        <h4>Email</h4>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
        />
        <h4>Mobile</h4>
        <input
          type="tel"
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter your phone number..."
        />
        <br />
        <button type="submit">Book Ticket</button>
      </form>
    </section>
  );
};

export default Form;
