import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Dashboard from "./pages/Dashboard/dashboard";
import Tool from "./pages/Tool/tool";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Tool />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
