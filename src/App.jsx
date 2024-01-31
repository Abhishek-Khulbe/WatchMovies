import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Form from "./screens/Form";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Form />} path="/form" />
    </Routes>
  );
};

export default App;
