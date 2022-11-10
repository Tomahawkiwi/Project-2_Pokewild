import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PokedexPage from "./pages/Pokedex";
import CombatSelection from "./pages/Combat_selection";

function App() {
  const [currentPage, setCurrentPage] = useState("POKEDEX");
  return (
    <Layout setCurrentPage={setCurrentPage}>
      {currentPage === "HOME" && <Home />}
      {currentPage === "POKEDEX" && <PokedexPage />}
      {currentPage === "COMBAT" && <CombatSelection />}
    </Layout>
  );
}

export default App;
