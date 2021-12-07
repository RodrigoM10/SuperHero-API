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
import { readFromLocalStorage } from "./utils/localStorage";
import { useState } from "react";

function App() {
  const tokenLocalData = readFromLocalStorage('token') || {};
  const [IsToken, setIsToken] = useState({})


  const requestToken = () => {
    const tokenLocal = readFromLocalStorage('token') || {};
    if (tokenLocal.token) {
      setIsToken(tokenLocal.token)
    } else {
      alert('No hay token')
    }
  }


  return (
    <div className="schema-page">
      <NavbarMain
        tokenLocalData={tokenLocalData}
      />
      <Routes >
        {!tokenLocalData.token &&
          <Route path="/login" element={
            <Login
              requestToken={requestToken}
            />} />
        }
        {/* pages */}
          <Route path="/" element={<Home
            tokenLocalData={tokenLocalData}
            requestToken={requestToken}
          />} />

          <Route path="/searchPage" element={<SearchPage 
           tokenLocalData={tokenLocalData}
           requestToken={requestToken}
          />} />


        <Route path="/404" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
