import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import MainLayout from "./pages/Layout/MainLayout";
import About from "./pages/About/About";
import NotFound from "./components/NotFound";
import LogIn from "./pages/login/LogIn";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FAF3E0";

    return;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
