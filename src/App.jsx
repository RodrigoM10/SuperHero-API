import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes, useLocation } from "react-router-dom";

// Shared Components
import { Footer } from "./components/footer/Footer";
import { NavbarMain } from "./components/navbarMain/NavbarMain";
// Pages
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import NoMatch from "./pages/NoMatch";
import { readFromLocalStorage } from "./utils/localStorage";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import CharacterFull from "./pages/CharacterFull";

function App() {
  const tokenLocalData = readFromLocalStorage('token') || {};
  const [IsToken, setIsToken] = useState({})

  const [team, setTeam] = useLocalStorage('team', []);
  const [heros, setHeros] = useLocalStorage('heros', []);
  const [villains, setVillains] = useLocalStorage('villains', []);

  const requestToken = () => {
    const tokenLocal = readFromLocalStorage('token') || {};
    if (tokenLocal.token) {
      setIsToken(tokenLocal.token)
    } else {
      alert('No hay token')
    }
  }

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  return (
    <div  className={splitLocation[1] === ''? 'schema-page bg-home' : 'schema-page bg-search'}>
      <NavbarMain
        tokenLocalData={tokenLocalData}
      />
      <Routes >
        {/* pages */}
        <Route path="/" element={<Home
          tokenLocalData={tokenLocalData}
          requestToken={requestToken}
          team={team}
          setTeam={setTeam}
          heros={heros}
          setHeros={setHeros}
          villains={villains}
          setVillains={setVillains}
        />} />

        <Route path="/searchPage" element={<SearchPage
          team={team}
          setTeam={setTeam}
          heros={heros}
          setHeros={setHeros}
          villains={villains}
          setVillains={setVillains}
          tokenLocalData={tokenLocalData}
          requestToken={requestToken}
        />} />

        {tokenLocalData.token &&
          <Route path="/characterFull/:charId" element={
            <CharacterFull />} />
        }


        <Route path="/404" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
