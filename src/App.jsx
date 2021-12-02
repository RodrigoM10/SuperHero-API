import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes } from "react-router-dom";

// Shared Components
import { Footer } from "./components/shared/footer/Footer";
import { NavbarMain } from "./components/shared/navbarMain/NavbarMain";
// Pages
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import NoMatch from "./pages/NoMatch";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";



function App() {

  const [search, setSearch] = useState('');

  const [name, setName] = useState('batman')

  // useEffect(() => {
  //   const request = async () => {
  //     try {
  //       const response = await axios.get(`/search/${name}`);
  //       console.log("🚀 ~ file: SearchPage.jsx ~ line 18 ~ request ~ response", response.data.results)
  //     } catch (error) {
  //       console.error(error);
  //       alert('Hubo un error en la conexión al servidor ');
  //     }
  //   }
  //   request();
  //   console.log('Antes de la funcion asincronica');

  // }, [name]);

  return (
    <div className="schema-page">
      <NavbarMain
      setName={setName}
      setSearch={setSearch}
      />
      <Routes >
        {/* pages */}
        <Route path="/" element={<Home />} />

        <Route path="/searchPage" element={
          <SearchPage
          name={name}
            search={search}
          />} />


        <Route path="/404" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
