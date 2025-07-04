import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HabitsPage from "./pages/Habits";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/habits" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
