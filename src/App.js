import React from "react";

// import css global
import "./App.css";

// import boostrap global
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

// import components
import Home from "./pages/Home";
import Cars from "./pages/Cars";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
};

export default App;
