import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes } from "react-router-dom";

// Shared Components
import { Footer } from "./components/footer/Footer";
import { NavbarMain } from "./components/navbarMain/NavbarMain";
// Pages
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {


  return (
    <div className="schema-page">
      <NavbarMain
      />
      <Routes >
        {/* pages */}
        <Route path="/" element={<Home />} />

        <Route path="/searchPage" element={
          <SearchPage
          />} />
        <Route path="/login" element={
          <Login/>} />


        <Route path="/404" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
