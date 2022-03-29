import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import App from "./App";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import WriteMe from "./components/writeme/WriteMe";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writeme" element={<WriteMe />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
